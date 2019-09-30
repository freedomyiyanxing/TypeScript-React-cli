// 无法解决这个问题, 暂时先注释掉
// eslint-disable-next-line no-unused-vars
import { createStyles, Theme } from '@material-ui/core';

const indexStyle = (theme: Theme) => {
  console.log(theme.palette);
  return createStyles({
    root: {
      height: '100vh',
    },
    name: {
      // display: 'flex',
      padding: theme.spacing(2, 1), // 16px, 8px
    },
    btn: {},
  });
};

export default indexStyle;
