import { FC, useState } from 'react';

import CTPPage from '../CTPPage';
import { PagesName } from '../pages';
import { create_titles } from '../titles';
import { create_actions } from '../actions';

interface Formable {
  itmesFilter?(key: string): boolean;
  onChange?(v: any): void;
}

interface CreatePageProps {
  name: PagesName;
  FormComponent: FC<Formable>;
}

const ignore_keys = ['id'];

const CreatePage: FC<CreatePageProps> = ({ name, FormComponent }) => {
  const [values, setValues] = useState<any>();
  const actions = create_actions[name] ?? [];

  return (
    <CTPPage
      title={create_titles[name]}
      titleExtra={
        <div className="flex items-center gap-2">
          {actions.map((Action, i) => (
            <Action.Component key={i} data={values} />
          ))}
        </div>
      }
    >
      <FormComponent
        onChange={setValues}
        itmesFilter={id => !ignore_keys.includes(id)}
      />
    </CTPPage>
  );
};

export default CreatePage;
