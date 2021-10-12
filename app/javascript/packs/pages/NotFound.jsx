import React from 'react';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const NotFound = () => {
  const history = useHistory();
  const handleClick = () => {
    history.replace('/');
  };

  return (
    <>
      <h2>Oops...Looks like nothing is here</h2>
      <Button onClick={handleClick}>Go Back</Button>
    </>
  );
};

export default NotFound;
