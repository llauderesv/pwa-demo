import React, { useState } from 'react';
import TextField from '../TextField';

const ControlledInput = ({ onChange }) => {
  const [value, setValue] = useState(null);

  return <TextField onChange={onChange} value={value} />;
};

export default ControlledInput;
