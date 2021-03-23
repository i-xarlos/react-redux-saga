import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from '../src/redux/store';
import TopLayout from '../src/components/toplayout/topLayout.component';

import './index.css';

import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persistor}>
        <TopLayout>
          <App />
        </TopLayout>
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
