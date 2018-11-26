import React from 'react';

export default function Incrementor({ value, onIncrement, onDecrement }) {
  return (
    <React.Fragment>
      <p>Current value: {value}</p>
      <button onClick={() => onIncrement()}>+</button>
      <button onClick={() => onDecrement()}>-</button>
    </React.Fragment>
  );
}
