// import { ListActionObject } from '../Pages/actions';

import { FC } from 'react';
// import { ListActionable } from '../Pages/actions';

interface ActionsProps {
  actions?: FC<any>[];
  // data?: T; // domain data
}

const ListActions = ({ actions = [] }: ActionsProps) => {
  return (
    <div className="flex gap-2">
      {actions.map((Action, i) => (
        <Action key={i} />
      ))}
    </div>
  );
};

export default ListActions;
