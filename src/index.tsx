import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';

import rootTheme from './config/theme';
import Index from './pages/index/index';
import './base/css/reset.css';

const App: React.FC = () => (
  <BrowserRouter>
    <ThemeProvider theme={rootTheme}>
      <Index />
    </ThemeProvider>
  </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById('root'));

if (module.hot) {
  module.hot.accept();
}
