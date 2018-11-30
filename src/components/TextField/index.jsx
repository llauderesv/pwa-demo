import React from 'react';

const TextField = React.forwardRef((props, ref) => (
  <input ref={ref} {...props} className="form-control" />
));

export default TextField;
