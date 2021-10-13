import React, { forwardRef } from 'react';

const TheInput = forwardRef(({ onChange }, ref) => {
  return <input type={'file'} onChange={onChange} ref={ref} />;
});

export default React.memo(TheInput);
