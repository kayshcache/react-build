import React from 'react';
import { render } from './utils/test-utils';
import '@testing-library/jest-dom/extend-expect';
import { useAuth0 } from './react-auth0-spa';
import App from './App';

jest.mock('./react-auth0-spa');

test('First Loads the Auth0 and displays Loading text', async () => {

  const { loading, isAuthenitcated } = useAuth0.mockReturnValue({
    isAuthenticated: true,
    loading: true,
    logout: jest.fn(),
    loginWithRedirect: jest.fn(),
  });

  const { getByText } = render(<App />);
  const loadingText = getByText('Loading...');
  expect(loadingText).toBeInTheDocument();
});

test('Renders the App and Loads with Auth0', () => {

  const { loading, isAuthenitcated } = useAuth0.mockReturnValue({
    isAuthenticated: true,
    loading: false,
    logout: jest.fn(),
    loginWithRedirect: jest.fn(),
  });

  const { getByText, waitFor } = render(<App />);
  expect(getByText(/the things/i)).toBeInTheDocument();
});

test('Renders the App and displays Footer', () => {

  const { loading } = useAuth0.mockReturnValue({
    isAuthenticated: true,
    loading: false,
    logout: jest.fn(),
    loginWithRedirect: jest.fn(),
  });

  const { getByText } = render(<App />);

  const linkElement = getByText(/manage things/i);
  expect(linkElement).toBeInTheDocument();
});

