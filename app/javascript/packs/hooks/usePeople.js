import axios from 'axios';
import { useMemo } from 'react';
import { useQuery } from 'react-query';

export const usePeople = () => {
  const { data, isError, isLoading } = useQuery('people', () =>
    axios.get('http://localhost:3000/api/v1/people')
  );

  return useMemo(
    () => ({
      data: data?.data?.data || [],
      isError,
      isLoading,
    }),
    [data, isError, isLoading]
  );
};
