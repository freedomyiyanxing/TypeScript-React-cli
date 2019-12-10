import React from 'react';
import { Box } from '@material-ui/core';

import Header from '../../components/header/index';

/**
 * 布局页面
 * @constructor
 */
const Index: React.FC = () => (
  <>
    <Header />
    <Box flexGrow={1}>Theme Setting</Box>
  </>
);

export default Index;
