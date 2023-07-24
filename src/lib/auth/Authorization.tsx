import { ReactNode } from 'react';

import { useAuth } from '@/features/auth/api/useAuth';
import { Idable } from '@/types';
import { UserDto } from '@/model';
import { _go, _map, _reduce, _some, _filter } from '@/utils/fn/_';

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
  isAdmin: (user?: UserDto | null) => user?.userRole === 'ADMIN',
  own: (user: UserDto | null, domain: Creatorable) => {
    let owner: Idable;

    if ('createUser' in domain) {
      owner = domain.createUser;
    } else {
      owner = domain.user;
    }

    return Boolean(user && user?.id === owner?.id);
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
