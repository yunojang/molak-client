import { FC, useMemo } from 'react';

import { Formable } from '@/components/Pages/types';
import ObjectForm, { ObjectFormItem } from '@/components/Table/ObjectForm';
import { ContentCreateDto } from '../../types/dto';
import { Input } from '@chakra-ui/react';
import Filters from '@/features/searchResult/components/filters/Filters';

interface ContentFormProps extends Formable<ContentCreateDto> {
  defaultValues?: ContentCreateDto;
}

const ContentForm: FC<ContentFormProps> = ({
  itmesFilter = () => true,
  onChange,
  defaultValues,
}) => {
  const dv = useMemo<Partial<ContentCreateDto>>(
    () => ({
      ...defaultValues,
      episodes: defaultValues?.episodes ?? [],
      uploadType: 'YOUTUBE',
    }),
    [defaultValues],
  );

  const items = useMemo<ObjectFormItem<ContentCreateDto>[]>(
    () => [
      {
        key: 'title',
        Header: '컨텐츠 타이틀',
        el: <Input />,
      },
      {
        key: 'description',
        Header: '컨텐츠 설명',
        el: <Input />,
      },
      {
        key: 'thumbnailUrl',
        Header: '썸네일 URL',
        el: <Input />,
      },
      {
        key: 'uploadType',
        Header: '업로드 타입',
        el: <Input />,
      },
      {
        key: 'channelId',
        Header: '채널아이디',
        el: <Input type="number" />,
      },
    ],
    [],
  );

  return (
    <>
      <ObjectForm
        columnCount={1}
        items={
          items.filter(({ key }) =>
            itmesFilter(key as string),
          ) as ObjectFormItem<any>[]
        }
        defaultValues={dv}
        onChange={onChange}
      />
      <Filters onChange={onChange} />
    </>
  );
};

export default ContentForm;
