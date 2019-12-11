import React, { useState } from 'react';
import { Box } from '@material-ui/core';

import Common from './common';


/**
 * 布局页面
 * @constructor
 */
const ThemeSetting: React.FC = () => {
  const [value, setValue] = useState<string>('');

  const handleClick = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value);
  };

  return (
    <Box flexGrow={1}>
      <div>
        <h2>React</h2>
        <Common str="这是一个props" func={handleClick} />
        <p>{value}</p>
      </div>
    </Box>
  );
};

export default ThemeSetting;
