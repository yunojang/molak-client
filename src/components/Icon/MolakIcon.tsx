import { env } from '@/config';
import { FC } from 'react';

import MolakLogo from '@/components/Icon/asset/molak-logo.svg';
import MolakText from '@/components/Icon/asset/molak-text.svg';

interface SvgProps {
  size?: number;
  color?: string;
}

interface MolakIconProps {
  icon?: SvgProps;
  text?: SvgProps;
}

const MolakIcon: FC<MolakIconProps> = ({ icon = {}, text = {} }) => {
  const { size = 90, color = env.colors.primary } = icon;
  const { size: textSize = 180, color: textColor = 'text-white' } = text;

  return (
    <div className="flex items-end">
      <MolakLogo width={size} height={size / 2} color={color} />
      <MolakText width={textSize} color={textColor} />
    </div>
  );
};

export default MolakIcon;
