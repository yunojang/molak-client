import { FC } from 'react';

import { PagesName } from './pages';
import ToolDeleteButton from '@/features/tool/components/actions/ToolDeleteButton';
import AddButton from '../Actions/buttons/AddButton';
import ToolCreateButton from '@/features/tool/components/actions/ToolCreateButton';
import UserDeleteButton from '@/features/admin/users/components/actions/UserDeleteButton';
import { UserCreateButton } from '@/features/admin/users/components/actions/UserCreateButton';
import MachineCreateButton from '@/features/machine/components/actions/MachineCreateButton';
import MachineDeleteButton from '@/features/machine/components/actions/MachineDeleteButton';
import OperationCreateButton from '@/features/step/components/actions/OperationCreateButton';
import OperationDeleteButton from '@/features/step/components/actions/OperationDeleteButton';
import MaterialCreateButton from '@/features/material/components/actions/MaterialCreateButton';
import MaterialDeleteButton from '@/features/material/components/actions/MaterialDeleteButton';

// export interface ListActionable {
//   id?: string | string[];
// }

// export interface ListActionObject {
//   Component: FC<ListActionable>;
// }

export interface DetailActionable {
  id?: string;
}

export interface CreateActionable {
  data?: any;
}

export interface ActionObject<T> {
  Component: FC<T>;
}

export const list_actions: { [k in PagesName]?: FC<any>[] } = {
  tool_admin: [AddButton],
  machine_admin: [AddButton],
  material_admin: [AddButton],
  recommend_admin: [AddButton],
  tool_group_admin: [AddButton],
  user_admin: [AddButton],
  step_admin: [AddButton],
};

export const detail_actions: {
  [k in PagesName]?: ActionObject<DetailActionable>[];
} = {
  tool_admin: [{ Component: ToolDeleteButton }],
  machine_admin: [{ Component: MachineDeleteButton }],
  material_admin: [{ Component: MaterialDeleteButton }],
  recommend_admin: [],
  tool_group_admin: [],
  user_admin: [{ Component: UserDeleteButton }],
  step_admin: [{ Component: OperationDeleteButton }],
};

export const create_actions: {
  [k in PagesName]?: ActionObject<CreateActionable>[];
} = {
  tool_admin: [{ Component: ToolCreateButton }],
  machine_admin: [{ Component: MachineCreateButton }],
  material_admin: [{ Component: MaterialCreateButton }],
  recommend_admin: [{ Component: ToolCreateButton }],
  tool_group_admin: [{ Component: ToolCreateButton }],
  user_admin: [{ Component: UserCreateButton }],
  step_admin: [{ Component: OperationCreateButton }],
};
