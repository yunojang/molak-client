import { LoginDTO } from '@/features/auth/types';

export const createLoginDto = ({
  email = 'abc123@wizcore.co.kr',
  password = 'qwerty1234',
}: Partial<LoginDTO> = {}): LoginDTO => {
  return {
    email,
    password,
  };
};

export * from '@testing-library/react';
export { default as userEvent } from '@testing-library/user-event';
