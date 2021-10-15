import axios from 'axios';
import { useMemo } from 'react';
import { useQuery } from 'react-query';

export const useLocations = () => {
  const { data, isError, isLoading } = useQuery('locations', () =>
    axios.get('/api/v1/locations')
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
