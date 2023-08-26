import { FC } from 'react';

import { Button } from '@chakra-ui/react';
import MolakIcon from '../Icon/MolakIcon';
import { useNavigate } from 'react-router-dom';

export interface Error {
  key?: string;
  code?: number;
  message?: string;
}

interface ErrorPageProps {
  error: Error;
}

const ErrorPage: FC<ErrorPageProps> = ({ error }) => {
  const navigate = useNavigate();

  return (
    <div className="w-screen h-ch flex justify-center items-center flex-col gap-10">
      <MolakIcon text={{ color: '#000' }} />
      <div className="text-4xl">요청하신 페이지를 찾을 수 없어요</div>
      <Button colorScheme="molak" onClick={() => navigate('/')}>
        홈으로 이동
      </Button>
    </div>
  );
};

export default ErrorPage;
