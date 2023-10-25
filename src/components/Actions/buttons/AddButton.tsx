import { Button } from '@chakra-ui/react';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

interface CreateButtonProps {
  onAdd?(): void;
}

const AddButton: FC<CreateButtonProps> = ({ onAdd: _onAdd }) => {
  const navigate = useNavigate();
  const onAdd = _onAdd ?? (() => navigate('create'));

  return (
    <Button size="md" variant="contained" width={100} onClick={onAdd}>
      추가
    </Button>
  );
};

export default AddButton;
