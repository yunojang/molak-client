import React, { FC, useState } from 'react';

interface Loadable {
  onLoad(): void;
  hidden?: boolean;
  src?: string;
}

export function withLoad<T extends Loadable>(
  Loadable: FC<T>,
  fallback?: React.ReactNode,
) {
  return function Inner(props: T) {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
      <>
        <Loadable {...props} onLoad={() => setIsLoaded(true)} />
        {!isLoaded && fallback}
      </>
    );
  };
}
