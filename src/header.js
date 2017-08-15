import React, { Component } from 'react';
import './scss/_main.scss';
import logo from './logo.png'

class Header extends Component {


  render() {
    return (
      <div className="header-menu">
        <ul className='links'>
          <li><a href='/'><img className='logo' src={logo} alt='site-logo'/></a></li>
          <li><a href='/booker'>Booker</a></li>
          <li><a href='/booker'>Putlizer</a></li>
        </ul>
      </div>
    )
  }
}



export default Header;
