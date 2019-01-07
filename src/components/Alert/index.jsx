import React from 'react';

const Alert = ({ children, className, onClick, ...props }) => {
  const classNames = ['alert', className].join(' ');

  return (
    <div className={classNames} {...props}>
      <button onClick={onClick} type="button" className="close">
        &times;
      </button>
      {children}
    </div>
  );
};

export default Alert;
