import React, { FC } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  targetId?: string;
  children?: React.ReactNode;
}

const Portal: FC<PortalProps> = ({ children, targetId = 'app' }) => {
  const target = document.getElementById(targetId) ?? document.body;
  return <>{createPortal(children, target)}</>;
};

export default Portal;
