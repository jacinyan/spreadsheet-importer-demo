import axios from 'axios';
import { useMemo } from 'react';
import { useQuery } from 'react-query';

export const useAffiliations = () => {
  const { data, isError, isLoading } = useQuery('affiliations', () =>
    axios.get('/api/v1/affiliations')
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
