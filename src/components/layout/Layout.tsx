import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Box } from '@material-ui/core';

import layoutStyle from './style';

interface InterfaceLayout {
  preView: React.ReactNode,
}

const useStyle = makeStyles(layoutStyle);

const Layout: React.FC<InterfaceLayout> = (props) => {
  const { children, preView } = props;
  const classes = useStyle();
  return (
    <Box
      width="100%"
      display="flex"
      className={classes.root}
    >
      <Box
        display="flex"
        flexDirection="column"
        width={360}
        mr={1.25} // 1.25 * 8 = 10; 8 是默认的密度 单位
        bgcolor="primary.800"
        color="primary.contrastText"
      >
        {children}
      </Box>
      <Box
        flexGrow={1}
        p={3}
      >
        {preView}
      </Box>
    </Box>
  );
};

export default Layout;
