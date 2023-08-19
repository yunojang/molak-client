import {
  QueryClient,
  DefaultOptions,
  useQuery as useQueryOrigin,
  QueryKey,
  UseQueryOptions,
  UseQueryResult,
} from 'react-query';

const queryConfig: DefaultOptions = {
  queries: {
    retry: false,
    useErrorBoundary: true,
    suspense: true,
    refetchOnWindowFocus: false,
  },
  mutations: {
    useErrorBoundary: true,
  },
};

export const queryClient = new QueryClient({ defaultOptions: queryConfig });

export const useQuery = <
  TQueryFnData = unknown,
  TError = unknown,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey,
>(
  options: UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>,
): UseQueryResult<TData, TError> => {
  return useQueryOrigin({
    useErrorBoundary: !options.onError,
    suspense: !options.onError,
    ...options,
  });
};

export interface QueryOptions {
  suspense?: boolean;
  useErrorBoundary?: boolean;
  onSuccess?(): void;
}
