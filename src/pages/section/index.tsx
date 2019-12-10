import React from 'react';
import { Box } from '@material-ui/core';

import Common from './common';


/**
 * 布局页面
 * @constructor
 */
const ThemeSetting: React.FC = () => (
  <Box flexGrow={1}>
    <div>
      <h2>React</h2>
      <Common />
    </div>
  </Box>
);

export default ThemeSetting;
