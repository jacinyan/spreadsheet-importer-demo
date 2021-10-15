import axios from 'axios';
import { useMemo, useState } from 'react';
import { useQuery } from 'react-query';

export const usePeople = () => {
  const [pageSize, setPageSize] = useState(10);
  const [page, setPage] = useState(0);

  const { data, isError, isLoading } = useQuery(
    ['people', page, pageSize],
    () =>
      axios.get(
        `/api/v1/people?page[number]=${page + 1}&page[size]=${pageSize}`
      )
  );
  const totalCount = data?.data?.meta?.['total-count'];

  return useMemo(
    () => ({
      page,
      pageSize,
      setPage,
      totalCount,
      data: data?.data?.data || [],
      isError,
      isLoading,
    }),
    [data, isError, isLoading, page, pageSize, totalCount, setPage]
  );
};
