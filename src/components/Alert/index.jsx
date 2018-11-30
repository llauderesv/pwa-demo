import React from 'react';

const Alert = ({ children }) => {
  return (
    <div className="alert alert-dismissible alert-danger">
      <button type="button" className="close" data-dismiss="alert">
        &times;
      </button>
      {children}
    </div>
  );
};

export default Alert;
