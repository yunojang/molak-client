import React, { FC, useEffect } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  targetId?: string;
  children?: React.ReactNode;
  isContainer?: boolean;
}

const Portal: FC<PortalProps> = ({ children, targetId, isContainer }) => {
  const [render, setRender] = React.useState(false);
  const target = targetId
    ? document.getElementById(targetId) ?? document.body
    : document.body;

  useEffect(() => {
    setRender(true);
    return () => setRender(false);
  }, []);

  // root에 컨테이너 렌더후 타겟 찾을 수 있도록 미룸
  if (!render && !isContainer) return null;
  return <>{createPortal(children, target)}</>;
};

export default Portal;
