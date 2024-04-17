import React from 'react';

const Header: React.FC = () => {
  return (
    <footer className="container">
      <p>&copy; {new Date().getFullYear()} Artis Webshop</p>
    </footer>
  );
};

export default Header;