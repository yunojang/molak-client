import { throttle } from '@/utils/timing/throttle';
import React, { FC, useEffect, useRef } from 'react';

interface IntersectionProps {
  onIntersection?(): void;
  isShow?: boolean;
  isActive?: boolean;
  fallback?: React.ReactNode;
  children: React.ReactNode;
}

const Intersection: FC<IntersectionProps> = ({
  children,
  fallback,
  isShow,
  isActive,
  onIntersection,
}) => {
  const targetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = targetRef.current;
    if (!el) return;

    const handler = throttle(
      (
        entries: IntersectionObserverEntry[],
        observer: IntersectionObserver,
      ) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            onIntersection?.();
            observer.unobserve(entry.target);
          }
        });
      },
      150,
    );

    const observer = new IntersectionObserver(handler, {
      rootMargin: '0px 0px 40px 0px',
    });
    if (el) observer.observe(targetRef.current);
    return () => {
      if (el) observer.disconnect();
    };
  }, [targetRef, onIntersection]);

  console.log('isShow', isShow);
  console.log('isActive', isActive);

  if (!isActive) return null;
  if (isShow) return <div ref={targetRef}>{children}</div>;
  return <>{fallback}</>;
};

export default Intersection;
