import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';

import rootTheme from './config/theme';
import Layout from './components/layout/Layout';
import PreView from './components/preview/index';
import renderRoutes from './router/router-config';
import routers from './router/index';
import './base/css/reset.css';

const App: React.FC = () => (
  <BrowserRouter>
    <ThemeProvider theme={rootTheme}>
      <Layout preView={PreView}>
        {
          renderRoutes(routers)
        }
      </Layout>
    </ThemeProvider>
  </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById('root'));

if (module.hot) {
  module.hot.accept();
}
