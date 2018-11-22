import React from 'react';

export default function Incrementor({ value, onIncrement, onDecrement }) {
  return (
    <div>
      <p>Current value: {value}</p>
      <button onClick={() => onIncrement()}>+</button>
      <button onClick={() => onDecrement()}>-</button>
    </div>
  );
}
