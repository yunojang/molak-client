import { ImgHTMLAttributes, FC, useState, useRef, useEffect } from 'react';

interface IFrameProps extends ImgHTMLAttributes<HTMLIFrameElement> {
  fallback?: React.ReactNode;
}

const IFrame: FC<IFrameProps> = ({ src, fallback, ...props }) => {
  const ref = useRef<HTMLIFrameElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (ref.current && src) {
      ref.current.onload = () => setIsLoaded(true);
      ref.current.src = src;
    }
  }, [src]);

  return (
    <>
      <iframe
        {...props}
        ref={ref}
        hidden={!isLoaded}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
      {!isLoaded && fallback}
    </>
  );
};

export default IFrame;
