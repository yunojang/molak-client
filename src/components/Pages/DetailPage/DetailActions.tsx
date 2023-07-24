import { DetailActionObject } from '../actions';

// type Authable = Creatorable & { id: string };

interface ActionsProps {
  actions?: DetailActionObject[];
  id: string;
  // data?: T; // domain data
}

const DetailActions = ({ actions = [], id }: ActionsProps) => {
  return (
    <div className="flex gap-2">
      {actions.map((action, i) => (
        <action.Component key={i} id={id} />
      ))}
    </div>
  );
};

export default DetailActions;
