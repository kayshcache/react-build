import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
      <footer>
        <span>
          <Link to="/">Home</Link>&nbsp;💀&nbsp;
          <Link to="/about">About</Link>&nbsp;💀&nbsp;
	  <Link to="/things">Manage Things</Link>&nbsp;💀&nbsp;
	  <Link to="/users">Manage Users</Link>&nbsp;💀&nbsp;
          <Link to="/profile">Profile</Link>&nbsp;💀&nbsp;
        </span>
      </footer>
);

export default Footer;
