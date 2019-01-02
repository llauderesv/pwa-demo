import React from 'react';

const TextArea = React.forwardRef(({ className = '', ...props }, ref) => {
  const classNames = ['form-control', className].join(' ');

  return (
    <textarea rows="10" className={classNames} ref={ref} {...props}  />
  );
});

export default TextArea;
