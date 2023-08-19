import { cx } from '@emotion/css';
import React, { FC, ReactNode, HTMLAttributes } from 'react';

interface SocialButtonProps extends HTMLAttributes<HTMLButtonElement> {
  social: 'kakao' | 'naver' | 'google';
  logo?: ReactNode;
  text?: string;
  fullWidth?: boolean;
}

const KOR = {
  kakao: '카카오',
  naver: '네이버',
  google: '구글',
};

const SocialButton: FC<SocialButtonProps> = ({
  social,
  text,
  logo,
  fullWidth,
}) => {
  const text_kor = KOR[social];

  return (
    <div
      className={cx(
        fullWidth ? 'w-full' : '',
        'px-5 py-3 bg-white rounded-full  text-black cursor-pointer',
      )}
    >
      <div className="flex items-center gap-3">
        {logo && <div className="w-6 h-6">{logo}</div>}
        <div className="font-bold text-center flex-1">
          {text ? text : `${text_kor} 계정으로 이용하기`}
        </div>
      </div>
    </div>
  );
};

export default SocialButton;
