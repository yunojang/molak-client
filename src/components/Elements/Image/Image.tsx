import {
  FC,
  ImgHTMLAttributes,
  useState,
  useRef,
  useEffect,
  ReactNode,
} from 'react';

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  useSuspense?: boolean;
  fallback?: ReactNode;
}

const Image: FC<ImageProps> = ({ useSuspense, src, fallback, ...rest }) => {
  const imgRef = useRef<HTMLImageElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (imgRef.current && src) {
      imgRef.current.onload = () => setIsLoaded(true);
      imgRef.current.src = src;
    }
  }, [src]);

  return (
    <>
      <img {...rest} ref={imgRef} src={src} hidden={!isLoaded} />
      {!isLoaded && fallback}
    </>
  );
};

export default Image;

const SuspenseNode = ({ isLoading }: { isLoading: boolean }) => {
  if (isLoading) throw new Promise(resolve => isLoading && resolve(true));

  return null;
};
