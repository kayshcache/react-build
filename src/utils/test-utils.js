import React from 'react'
import { render } from '@testing-library/react'

// Redux Imports
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { Provider } from 'react-redux';
import { configureStore } from '../store';

// Material UI Imports
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';

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


// ***** React Testing Library Utilities

const AllTheProviders = ({ children }) => {
  return (
	    <Provider store={store} >
	      <PersistGate
		loading={<div>Loading</div>}
		persistor={persistor}>
		<ThemeProvider theme={darkTheme}>

	  {children}

		</ThemeProvider>
	      </PersistGate>
	    </Provider>
  )
}

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options })

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }
