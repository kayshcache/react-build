import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Redux Imports
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { Provider } from 'react-redux';
import { configureStore } from './store';

// Material UI Imports
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';

// Auth0 Imports
import { Auth0Provider } from './react-auth0-spa';
import config from './auth_config.json';
import history from './history';

// Material UI ThemeProvider Setup
const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#03DAC6',
    },
    secondary: {
      main: '#b388ff',
    },
    background: {
      default: "#121212"
    },
  },
  status: {
    danger: red,
  },
});

// Redux Setup
const store = configureStore();
const persistor = persistStore(store);

// Auth0 Setup
// if the user tries to access a page that requires them to be authenticated, they will be asked to log in. When they return to the application, they will be forwarded to the page they were originally trying to access thanks to this function.
const onRedirectCallback = appState => {
  history.push(
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  );
};

ReactDOM.render(
  <Auth0Provider
    domain={config.domain}
    client_id={config.clientId}
    redirect_uri={window.location.origin}
    onRedirectCallback={onRedirectCallback}
  >
    <Provider store={store} >
      <PersistGate
	loading={<div>Loading</div>}
	persistor={persistor}>
	<ThemeProvider theme={darkTheme}>
	  <App />
	</ThemeProvider>
      </PersistGate>
    </Provider>
  </Auth0Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
