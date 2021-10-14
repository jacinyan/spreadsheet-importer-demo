import React, { forwardRef } from 'react';
import { Box, CircularProgress, Input } from '@material-ui/core';

const TheInput = forwardRef(({ onChange, isLoading }, ref) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Input
        type={'file'}
        onChange={onChange}
        ref={ref}
        data-test={'input-test'}
      />
      {isLoading && (
        <Box sx={{ display: 'flex' }}>
          <CircularProgress />
        </Box>
      )}
    </Box>
  );
});

export default React.memo(TheInput);
