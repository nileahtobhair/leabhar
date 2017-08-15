import React, { Component } from 'react';
import './scss/_main.scss';
import logo from './logo.png'
import search from './search_icon.svg'
import close from './search_icon.svg'

class Header extends Component {

   /* Set intial  */
  constructor(){
    super();
    this.state = {
      show_search : false
    }
  }

  toggle_search_bar(){
    var visible = this.state.show_search ? false: true;
    this.setState({show_search : visible})
  }
  update_search_value(){

  }

  render() {
    var main = this;
    return (
      <div className="header-menu">
        <ul className='links'>
          <li><a href='/'><img className='logo' src={logo} alt='site-logo'/></a></li>
          <li><a href='/booker'>Booker</a></li>
          <li><a href='/booker'>Putlizer</a></li>
        </ul>
        <form className='search'>
          {main.state.show_search ? 
          <div className='search-container'>
            <img onClick={ (e) => main.toggle_search_bar()} src={search} alt="search icon - show input"/>
            <input type="text" className='search-input'/>
          </div>
          : 
          <div className='search-container'>
            <img onClick={ (e) => main.toggle_search_bar()} src={search} alt="close icon - close input"/>
          </div>
          }
        </form>
      </div>
    )
  }
}



export default Header;
