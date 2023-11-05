import { FC, useMemo, useState, version } from 'react';

import { EpisoceCreateDto } from '../../types/dto';
import { Formable } from '@/components/Pages/types';

import ObjectForm, { ObjectFormItem } from '@/components/Table/ObjectForm';
import { Button, Input } from '@chakra-ui/react';
import { extractYoutubeURLId, responseToEpisode } from '@/lib/youtube/format';
import { useLoadYoutubeVideo } from '@/Admin/features/content/api/loadYoutubeVideo';
import { isUrl } from '@/utils/format/url';
import { Spinner } from '@/components/Elements/Spinner';

interface EpisodeFormProps extends Formable<EpisoceCreateDto> {
  defaultValues?: EpisoceCreateDto;
}

const EpisodeForm: FC<EpisodeFormProps> = ({
  onChange,
  itmesFilter = () => true,
  defaultValues,
}) => {
  const [url, setUrl] = useState<string>(defaultValues?.videoUrl ?? '');
  const [values, setValues] = useState<Partial<EpisoceCreateDto>>(
    defaultValues ?? {},
  );

  const { mutateAsync, isLoading } = useLoadYoutubeVideo();

  const dv = useMemo<Partial<EpisoceCreateDto>>(
    () => ({ ...values, videoUrl: url, uploadType: 'YOUTUBE' }),
    [values, url],
  );

  const handleChangeForm = (v: Partial<EpisoceCreateDto>) => {
    setValues(v);
    onChange?.(v);
  };

  const handleLoadFromYoutube = () => {
    if (!isUrl(url)) return;
    const id = extractYoutubeURLId(url);
    if (id)
      mutateAsync(id)
        .then(res => responseToEpisode(res))
        .then(loaded => handleChangeForm({ ...dv, ...loaded }));
  };

  const items = useMemo<ObjectFormItem<EpisoceCreateDto>[]>(() => {
    return [
      {
        key: 'title',
        Header: '제목',
        el: <Input />,
      },
      {
        key: 'description',
        Header: '설명',
        el: <Input />,
      },
      {
        key: 'thumbnailUrl',
        Header: '썸네일',
        el: <Input />,
      },
      {
        key: 'uploadType',
        Header: '업로드 타입',
        el: <Input defaultValue="YOUTUBE" />,
      },
      { key: 'order', Header: '순서', el: <Input type="number" min={0} /> },
    ];
  }, []);

  return (
    <>
      <div className="flex items-center gap-1">
        <div className="px-5">URL: </div>
        <Input name="url" value={url} onChange={e => setUrl(e.target.value)} />
        <Button onClick={handleLoadFromYoutube} isLoading={isLoading}>
          불러오기
        </Button>
      </div>

      {!isLoading ? (
        <ObjectForm
          columnCount={1}
          items={
            items.filter(({ key }) =>
              itmesFilter(key as string),
            ) as ObjectFormItem<any>[]
          }
          defaultValues={dv}
          onChange={handleChangeForm}
        />
      ) : (
        <div className="flex flex-col gap-1 justify-center items-center">
          <Spinner pad={24} />
          <div>불러오는중</div>
        </div>
      )}
    </>
  );
};

export default EpisodeForm;
