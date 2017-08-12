import React, { Component } from 'react';
import './scss/_main.scss';


class Header extends Component {


  render() {
    return (
      <div className="header-menu">
        <ul className='links'>
          <li><a href='/'>Home</a></li>
          <li><a href='/booker'>Booker</a></li>
           <li><a href='/booker'>Putlizer</a></li>
        </ul>
      </div>
    )
  }
}



export default Header;
