import { useQuery } from '@tanstack/react-query';
import { Match } from '../api/types';
import { getMatches } from '../api/getMatches';
import { setMatches } from '../app/matchesSlice';
import { useAppDispatch } from './useAppDispatch';
import { useEffect } from 'react';

export function useMatches() {
  const dispatch = useAppDispatch();

  const {
    data,
    isSuccess,
    isError,
    error,
    isFetching,
    refetch
  } = useQuery<Match[], Error>({
    queryKey: ['matches'],
    queryFn: getMatches
  });

  useEffect(() => {
    if (isSuccess && data) {
      dispatch(setMatches(data));
    }
  }, [isSuccess, data, dispatch]);

  return {
    data,
    isSuccess,
    isError,
    error,
    isFetching,
    refetch
  };
}
