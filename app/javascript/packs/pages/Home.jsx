import React, { useRef, useCallback } from 'react';
import TheInput from '../components/TheInput';
import TheTable from '../components/TheTable';
import XLSX from 'xlsx';
import { formatter } from '../utils/formatter';
import { useMutation, QueryClient } from 'react-query';
import axios from 'axios';

const queryClient = new QueryClient();

const Home = () => {
  const { mutate } = useMutation(
    (people) =>
      axios.post('http://localhost:3000/api/v1/people/all', {
        people,
      }),
    {
      onSuccess: (res) => {
        // console.log(res);
        queryClient.invalidateQueries(['people', 1, 10]);
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

      mutate(people);
    };

    reader.readAsBinaryString(file);
  }, []);

  return (
    <>
      <TheInput onChange={handleImport} ref={inputRef} />
      <TheTable />
    </>
  );
};

export default Home;
