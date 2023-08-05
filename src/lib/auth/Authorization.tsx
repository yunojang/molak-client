import { ReactNode } from 'react';

import { useAuth } from '@/features/auth/api/useAuth';
import { Idable } from '@/types';

import { _go, _map, _reduce, _some, _filter } from '@/utils/fn/_';

export type ROLE = 'ADMIN' | 'USER' | 'GUEST';

const ROLE_LEVEL = {
  ADMIN: 0,
  USER: 1,
  GUEST: 2,
};

export const useAuthorization = () => {
  const { user } = useAuth();
  return {
    isLogin: !!user,
  };
};

export type Creatorable =
  | {
      user: Idable;
    }
  | {
      createUser: Idable;
    };

export const POLICES = {
  allowRoles: (user: any | null, role?: ROLE) => {
    if (!role) return true;
    const userRole = (user?.role ?? 'GUEST') as ROLE;
    return ROLE_LEVEL[userRole] <= ROLE_LEVEL[role];
  },
  isLogin: (user?: any | null) => Boolean(user),
  isAdmin: (user?: any | null) => user?.userRole === 'ADMIN',
  own: (user: any | null, domain: Creatorable) => {
    let owner: Idable;

    if ('createUser' in domain) {
      owner = domain.createUser;
    } else {
      owner = domain.user;
    }

    return user && user?.id === owner?.id;
  },
};

export interface AuthrizationProps {
  children: ReactNode;
  policyCheck?: boolean;
  forbiddenFallback?: ReactNode;
}

export const Authorization = ({
  children,
  policyCheck,
  forbiddenFallback,
}: AuthrizationProps) => {
  const { isLogin } = useAuthorization();
  let isAccess = isLogin;

  if (typeof policyCheck !== 'undefined') {
    isAccess = policyCheck as boolean;
  }

  return <>{isAccess ? children : forbiddenFallback}</>;
};
