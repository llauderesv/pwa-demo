import React from 'react';

import './index.scss';

const TextField = React.forwardRef(({ className = '', ...props }, ref) => {
  const classNames = ['form-control', className].join(' ');

  return <input ref={ref} type="text" className={classNames} {...props} />;
});

export default TextField;
