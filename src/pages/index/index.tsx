import React from 'react';
import { makeStyles } from '@material-ui/styles';
import {
  // Button, Link, TextField, FormControl, Input, InputLabel,
  Box,
} from '@material-ui/core';
import indexStyle from './style';

const useStyle = makeStyles(indexStyle);

const Index: React.FC = () => {
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
        color="primary.contrastText"
        bgcolor="primary.800"
      >
        <Box>1</Box>
        <Box flexGrow={1}>2</Box>
        <Box>3</Box>
      </Box>
      <Box
        flexGrow={1}
        p={3}
      >
        <span className={classes.root}>s</span>
      </Box>
    </Box>
  );
};

export default Index;
