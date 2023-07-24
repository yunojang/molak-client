import { Button } from '@chakra-ui/react';
import { FC } from 'react';

interface CreateButtonProps {
  onCreate?(): void;
  alert?: AlertProps;
}

const CreateButton: FC<CreateButtonProps> = ({
  onCreate = () => {},
  alert,
}) => {
  const ViewButton = (
    <Button size="md" width={100} variant="contained" onClick={onCreate}>
      생성
    </Button>
  );

  if (alert) {
    const AlertBtn = withAlert(ViewButton, alert);
    return <AlertBtn onSubmit={onCreate} />;
  } else return ViewButton;
};

export default CreateButton;
