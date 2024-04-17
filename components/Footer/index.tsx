import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="container">
      <p>&copy; {new Date().getFullYear()} Artis Webshop</p>
    </footer>
  );
};

export default Footer;