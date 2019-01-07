import React, { useState } from 'react';
import TextField from '../TextField';

const ControlledInput = ({ onChange }) => {
  const [value, setValue] = useState('');

  return <TextField onChange={e => setValue(e.target.value)} value={value} />;
};

export default ControlledInput;
