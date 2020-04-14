import React from 'react';
import { render } from '../utils/test-utils';
import '@testing-library/jest-dom/extend-expect';
import { useAuth0 } from '../react-auth0-spa';
import App from '../App';

jest.mock('../react-auth0-spa');


test('Navbar drawer working', () => {

  const { loading } = useAuth0.mockReturnValue({
    isAuthenticated: true,
    loading: false,
    logout: jest.fn(),
    loginWithRedirect: jest.fn(),
  });

  const { getByText } = render(<App />);

  const linkElement = getByText(/the things/i);
  expect(linkElement).toBeInTheDocument();
});