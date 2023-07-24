import { Button } from '@chakra-ui/react';
import { FC } from 'react';

interface SaveButtonProps {
  onSave?(): void;
}

const SaveButton: FC<SaveButtonProps> = ({ onSave }) => {
  const ViewButton = (
    <Button
      size="md"
      color="primary"
      variant="contained"
      width={120}
      onClick={onSave}
    >
      저장
    </Button>
  );

  return ViewButton;
};

export default SaveButton;
