import { FC, HtmlHTMLAttributes, ReactNode } from 'react';
import { AiOutlineUnorderedList } from 'react-icons/ai';
import { IoClose } from 'react-icons/io5';
import { useCoverNavigate } from '../hooks/useCoverNavigate';
import ShowOnHover from './Elements/ShowOnHover';

interface ContentToolBarProps {
  isEpisodePage?: boolean;
}

const ContentToolBar: FC<ContentToolBarProps> = ({ isEpisodePage }) => {
  const { coverClose, toContentList } = useCoverNavigate();

  return (
    <ShowOnHover initShow={false}>
      <div className="flex justify-between backdrop-blur-sm bg-white py-2.5 px-5 fixed top-0 left-0 w-full z-50 items-center">
        <div className="flex gap-2">
          {isEpisodePage ? (
            <GoListButton onClick={toContentList} />
          ) : (
            <GoCloseButton onClick={coverClose} />
          )}
        </div>

        <div className="flex gap-1 items-center">
          <>
            <button className="p-2 px-5 cursor-pointer text-black font-bold">
              이전화
            </button>
            <button className="p-2 px-5 cursor-pointer text-black font-bold">
              다음화
            </button>
          </>
        </div>
      </div>
    </ShowOnHover>
  );
};

export default ContentToolBar;

type BtnComp = FC<{ icon?: ReactNode } & HtmlHTMLAttributes<HTMLButtonElement>>;
const ActionButton: BtnComp = ({ icon, ...props }) => (
  <button {...props} className="cursor-pointer px-3">
    {icon}
  </button>
);
const GoListButton: BtnComp = props => (
  <ActionButton
    {...props}
    icon={<AiOutlineUnorderedList size={30} color="#000" />}
  />
);
const GoCloseButton: BtnComp = props => (
  <ActionButton {...props} icon={<IoClose size={30} color="#000" />} />
);
