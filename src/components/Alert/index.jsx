import React from 'react';

const Alert = ({ message, alertType, onClick, ...props }) => {
  return (
    <div className={`alert alert-${alertType}`} {...props}>
      <button onClick={onClick} type="button" className="close">
        &times;
      </button>
      <p className="mb-0">{message}</p>
    </div>
  );
};

export default Alert;
