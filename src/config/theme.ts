// eslint-disable-next-line no-unused-vars
import { createMuiTheme, Theme } from '@material-ui/core/styles';
import {
  orange,
  // grey,
  red,
  // blueGrey,
} from '@material-ui/core/colors';

/**
 * 此配置文件 material-ui 定制系统
 * 官网定制教学网址 https://material-ui.com/customization/
 * 本人查找方式: Ctrl + 左鼠标 点击 createMuiTheme 查看类型定义, 如果看不懂就配合官网一起
 */

const rootTheme = createMuiTheme({
  palette: {
    primary: {
      50: '#ebf0f8',
      100: '#cfdae6',
      200: '#b4c0d0',
      300: '#97a7bb',
      400: '#8193aa',
      500: '#6b809a',
      600: '#5d7188',
      700: '#4d5e71',
      800: '#3e4b5b',
      900: '#2b3643',
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#242d39',
      contrastText: '#fff',
    },
    error: red,
    // text: grey,
    secondary: orange,
  },
  // spacing: 8, // (spacing -> 官网教学地址) https://material-ui.com/zh/customization/spacing/
  typography: {
    htmlFontSize: 10,
    fontFamily: '\'Mukta Vaani\',sans-serif',
    button: {
      textTransform: 'capitalize',
    },
    overline: {
      textTransform: 'capitalize',
    },
  },
  // (该配置为全局配置, 在组件中使用props的方式覆盖优先级高于统一配置)
  // 其他的覆盖 参照官网与 下面 MuiButton 的配置例子
  props: { // (教学地址) https://material-ui.com/customization/density/
    MuiButton: { // Button 组件
      // size 可选配置 'small' | 'medium' | 'large' 默认 => 'medium'
      size: 'small',
      // variant 可选配置 'text' | 'outlined' | 'contained' 默认 => 'text'
      variant: 'outlined',
      // color 可选配置 'default' | 'inherit' | 'primary' | 'secondary' 默认 => 'default'
      // color: 'secondary',
    },
  },
  overrides: {
    // Style sheet name ⚛️
    MuiButton: {
      // Name of the rule
      // text: {
      //   background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      //   borderRadius: 3,
      //   border: 0,
      //   color: 'white',
      //   height: 48,
      //   padding: '0 30px',
      //   boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      // },
    },
    MuiInput: {
      root: {
        color: 'blue',
      },
      underline: {
        '&:before': {
          borderBottomColor: '#ddd',
        },
        '&:after': {
          borderBottomColor: 'green',
        },
        '&:hover:not(.Mui-disabled):before': {
          borderBottomColor: 'red',
        },
      },
    },
  },
});

declare global {
  interface Window {
    theme: Theme
  }
}

window.theme = rootTheme;

export default rootTheme;
