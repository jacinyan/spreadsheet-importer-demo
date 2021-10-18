import React, { useRef, useCallback } from 'react';
import TheInput from '../components/TheInput';
import TheTable from '../components/TheTable';
import XLSX from 'xlsx';
import { formatter } from '../utils/formatter';
import { useMutation, useQueryClient } from 'react-query';
import axios from 'axios';

const Home = () => {
  const queryClient = useQueryClient();

  const { mutateAsync, isLoading } = useMutation(
    (people) =>
      axios.post('/api/v1/people/all', {
        people,
      }),
    {
      onSuccess: async (res) => {
        // console.log(res);
        await queryClient.invalidateQueries(['people', 0, 10]);
        await queryClient.invalidateQueries('locations');
        await queryClient.invalidateQueries('affiliations');
        // queryCache.clear();
      },
    }
  );

  const inputRef = useRef();

  const handleImport = useCallback((e) => {
    const file = e.target.files[0];

    if (file.size > 1024 * 1024) {
      alert('No larger than 1024KB');
      return;
    }

    const type = file.name.split('.');
    if (type[type.length - 1] !== 'xlsx' && type[type.length - 1] !== 'xls') {
      alert('Only excel spreadsheets are accepted');
      return;
    }
    // TODO: implement CSV viewer

    const reader = new FileReader();
    reader.onload = (evt) => {
      // parse data
      const binStr = evt.target.result;
      const workBook = XLSX.read(binStr, { type: 'binary' });

      // get first sheet
      const workSheetName = workBook.SheetNames[0];
      const workSheet = workBook.Sheets[workSheetName];
      // convert to array
      const fileData = XLSX.utils.sheet_to_json(workSheet, { header: 1 });
      // console.log(fileData);

      // const headers = fileData[0];
      // get rid of table head
      fileData.splice(0, 1);
      // console.log(fileData);
      const people = formatter(fileData);

      mutateAsync(people);
    };

    reader.readAsBinaryString(file);
  }, []);

  return (
    <>
      <TheInput onChange={handleImport} ref={inputRef} isLoading={isLoading} />
      <TheTable />
    </>
  );
};

export default Home;
