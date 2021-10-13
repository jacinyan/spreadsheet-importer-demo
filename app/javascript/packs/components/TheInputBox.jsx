import React, { forwardRef } from 'react';

const TheInputBox = forwardRef(({ onChange }, ref) => {
  return <input type={'file'} onChange={onChange} ref={ref} />;
});

export default React.memo(TheInputBox);
