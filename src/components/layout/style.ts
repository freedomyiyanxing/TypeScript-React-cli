// eslint-disable-next-line no-unused-vars
import { createStyles, Theme } from '@material-ui/core';

const layoutStyle = (theme: Theme) => {
  console.log(theme.palette);
  return createStyles({
    root: {
      height: '100vh',
    },
  });
};

export default layoutStyle;
