import React from 'react';
import { render, fireEvent } from './utils/test-utils';
import '@testing-library/jest-dom/extend-expect';
import { useAuth0 } from './react-auth0-spa';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './NavBar';

jest.mock('./react-auth0-spa');

test('Renders Navbar with login or logout', async () => {

  let { isAuthenticated } = useAuth0.mockReturnValue({
    isAuthenticated: false,
    loading: false,
    logout: jest.fn(),
    loginWithRedirect: jest.fn(),
  });

  const { container, getByText } = render(
    <BrowserRouter>
      <NavBar />
    </BrowserRouter>
  );

  getByText(/login/i).focus();
  fireEvent.keyDown(document.activeElement || document.body);
  expect(getByText(/login/i));
});

