import { FC, useMemo, useState } from 'react';
import { Formable } from '@/components/Pages/types';
import { Button, Textarea } from '@chakra-ui/react';

interface FormDataDisplayProps {
  FormComponent: FC<Formable>;
}

const FormDataDisplay: FC<FormDataDisplayProps> = ({ FormComponent }) => {
  const [result, setResult] = useState<any>({});
  const update = (v: any) => setResult((prev: any) => ({ ...prev, ...v }));

  const resultString = useMemo(() => JSON.stringify(result, null, 2), [result]);

  const [isCopied, setIsCopied] = useState(false);
  const copy = () => {
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 1000);
  };

  const handleClickCopy = () => {
    navigator.clipboard.writeText(resultString).then(() => copy());
  };

  return (
    <div className="flex flex-col gap-3">
      <FormComponent onChange={update} />
      <div>
        <Textarea
          value={resultString}
          readOnly
          rows={10}
          className="rounded-lg"
        />
        <div className="flex justify-end">
          <Button
            width={140}
            onClick={handleClickCopy}
            className="transition-all"
          >
            {isCopied ? 'Copied!' : 'Copy'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FormDataDisplay;
