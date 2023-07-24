import { Button } from '@chakra-ui/react';
import { FC } from 'react';
import { withAlert } from '../withAlert';

interface DeleteButtonProps {
  onDelete?(): void;
}

const DeleteButton: FC<DeleteButtonProps> = ({ onDelete }) => {
  const ViewButton = (
    <Button size="md" color="#d82635" variant="outlined" width={120}>
      삭제
    </Button>
  );

  const Btn = withAlert(ViewButton, {
    title: '삭제하시겠습니까?',
    description: '삭제된 데이터는 복구할 수 없습니다.',
    confirmColor: '#d82635',
  });

  return <Btn onSubmit={onDelete} />;
};

export default DeleteButton;
