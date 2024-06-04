import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="header">
      <h1>Todo List</h1>
      <Link style={{color:'white',margin:'20px'}} to={'/'}>Home</Link> 
      <Link style={{color:'white',margin:'20px'}} to={'/profile'}>Profile</Link>
      <Link style={{color:'white',margin:'20px'}} to={'/contact'}>Contact</Link>
    </header>
  );
};

export default Header;
