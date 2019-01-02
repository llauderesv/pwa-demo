import React from 'react';

import './index.scss';

const Button = ({ children, className = '', ...props }) => {
  const classNames = ['btn', className].join(' ');

  return (
    <button type="button" className={classNames} {...props}>
      {children}
    </button>
  );
};

export default Button;
