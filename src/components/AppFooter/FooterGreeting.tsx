import { useFont } from '@/hooks/responsive/usePadding';
import { cx } from '@emotion/css';
import { FC } from 'react';

interface FooterGreetingProps {
  route?: (path?: string) => void;
  contents: string[];
}

const FooterGreeting: FC<FooterGreetingProps> = ({ contents }) => {
  const {
    sm: { className },
  } = useFont();

  return (
    <div>
      {contents.map((content, i) => (
        <div
          key={i}
          className={cx(
            className,
            i === contents.length - 1 ? 'font-bold' : '',
            'text-right',
          )}
        >
          {content}
        </div>
      ))}
    </div>
  );
};

export default FooterGreeting;
