// @flow
import React, { useState } from 'react';

type Props = {
  onEnter: Function,
};

// Update input on change and add a task if user hit's enter
function UseSetTaskName(initialValue: string = '', callback: Function) {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e: Object) => setValue(e.target.value);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      if (value) {
        callback(value);
        setValue('');
      }
    }
  };

  return {
    value,
    onChange: handleChange,
    onKeyDown: handleKeyDown,
  };
}

function Input({ onEnter }: Props) {
  const taskName = UseSetTaskName('', onEnter);

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <input type="text" placeholder="Add Tasks" {...taskName} />;
}

export default Input;
