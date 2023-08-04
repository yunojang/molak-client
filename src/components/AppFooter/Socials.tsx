import { FC } from 'react';
import { SocialItem } from './info';

interface SocialsProps {
  route?: (path?: string) => void;
  contents: SocialItem[];
}

const Socials: FC<SocialsProps> = ({ contents }) => {
  return (
    <div className="flex items-center gap-5">
      {contents.map((content, i) => (
        <div
          onClick={() => window.open(content.path, '_blank')}
          key={i}
          className="p-2 border-4 border-white rounded-full cursor-pointer"
        >
          {content.icon}
        </div>
      ))}
    </div>
  );
};

export default Socials;
