import { FC } from 'react';

interface FooterGreetingProps {
  route?: (path?: string) => void;
  contents: string[];
}

const FooterGreeting: FC<FooterGreetingProps> = ({ contents }) => {
  return (
    <div>
      {contents.map((content, i) => (
        <div key={i}></div>
      ))}
    </div>
  );
};

export default FooterGreeting;
