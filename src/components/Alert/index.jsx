import React from 'react';

const Alert = ({ message, type, onClick }) => {
  return (
    <div className={`alert alert-${type}`}>
      <button onClick={onClick} type="button" className="close">
        &times;
      </button>
      {message}
    </div>
  );
};

export default Alert;
