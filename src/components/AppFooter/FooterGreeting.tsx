import { cx } from '@emotion/css';
import { FC } from 'react';

interface FooterGreetingProps {
  route?: (path?: string) => void;
  contents: string[];
}

const FooterGreeting: FC<FooterGreetingProps> = ({ contents }) => {
  return (
    <div>
      {contents.map((content, i) => (
        <div
          key={i}
          className={cx(
            i === contents.length - 1 ? 'font-bold' : '',
            'text-right text-sm',
          )}
        >
          {content}
        </div>
      ))}
    </div>
  );
};

export default FooterGreeting;
