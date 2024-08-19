import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header-container">
      <h1 className="header-title">Welcome to the Blog App</h1>
      <p className="header-subtitle">
        If you want to add a blog and see it, you should <a href="/login">log in</a>.
        <br />
        If you don't have an account, <a href="/signup">create one</a>.
      </p>
    </header>
  );
};

export default Header;
