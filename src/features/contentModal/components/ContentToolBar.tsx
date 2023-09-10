import { FC, HtmlHTMLAttributes, ReactNode } from 'react';
import { AiOutlineUnorderedList } from 'react-icons/ai';
import { FiChevronLeft } from 'react-icons/fi';
import { useCoverNavigate } from '../hooks/useCoverNavigate';
import ShowOnHover from './Elements/ShowOnHover';

interface ContentToolBarProps {
  isEpisodePage?: boolean;
}

const ContentToolBar: FC<ContentToolBarProps> = ({ isEpisodePage }) => {
  const { coverClose, toBack } = useCoverNavigate();

  return (
    <ShowOnHover initShow={false} closeDelay={2000}>
      <div className="flex justify-between bg-white py-2.5 px-4 fixed top-0 left-0 w-full  items-center shadow-md">
        <div className="flex gap-2">
          <GoBackButton onClick={isEpisodePage ? toBack : coverClose} />
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
  // <IconButton color="#000" background="#fff" size={12}>
  //   <AiOutlineUnorderedList size={30} />
  // </IconButton>
  <ActionButton
    {...props}
    icon={<AiOutlineUnorderedList size={30} color="#000" />}
  />
);
const GoBackButton: BtnComp = props => (
  // <IconButton color="#000" background="#fff" size={12}>
  //   <FiChevronLeft size={30} color="#000" />
  // </IconButton>
  <ActionButton {...props} icon={<FiChevronLeft size={30} color="#000" />} />
);
