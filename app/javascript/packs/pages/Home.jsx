import React, { useRef, useCallback } from 'react';
import TheInputBox from '../components/TheInputBox';
import TheTable from '../components/TheTable';
import XLSX from 'xlsx';

const Home = () => {
  const inputRef = useRef();

  const handleImport = useCallback((e) => {
    const file = e.target.files[0];

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
      console.log(fileData);

      const headers = fileData[0];
      fileData.splice(0, 1);
      console.log(fileData);
    };

    reader.readAsBinaryString(file);
  }, []);

  return (
    <>
      <TheInputBox onChange={handleImport} ref={inputRef} />
      <TheTable />
    </>
  );
};

export default Home;
