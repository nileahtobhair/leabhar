import React, { Component } from 'react';
import '../main.scss';
import logo from '../logo.png';
import search from '../search_icon.svg';
import close from '../close_icon.svg';
import Search from '../js/Search.js';

class Header extends Component {

   /* Set intial  */
  constructor(){
    super();
    this.state = {
      show_search : false,
      search_value : ''
    }
  }

  toggle_search_bar(){
    var visible = this.state.show_search ? false: true;
    this.setState({show_search : visible})
  }

  update_search_value(event){
    this.setState({
      search_value : event.target.value
    })
  }

  render() {
    var main = this;
    return (
      <div className=''>
        <div className="header-menu">
          <ul className='links'>
            <li><a href='/'><img className='logo' src={logo} alt='site-logo'/></a></li>
            <li><a href='/booker'>Booker</a></li>
            <li><a href='/booker'>Putlizer</a></li>
          </ul>
          <span>
          { main.state.show_search ? 
            <form className='search expanded-search'>
              <div className='search-container expanded'>
                <img className='close' onClick={ (e) => main.toggle_search_bar()} src={close} alt="search icon - show input"/>
                <input value={main.state.search_value} onChange={(e)=> main.update_search_value(e)} type="text" className='search-input'/>
              </div>
            </form>
            : 
              <form className='search'>
                <div className='search-container '>
                  <img onClick={ (e) => main.toggle_search_bar()} src={search} alt="close icon - close input"/>
                </div>
             </form>
            }
          </span>
        </div>
        <Search term={main.state.search_value} visible={main.state.show_search}></Search>
      </div>
    )
  }
}



export default Header;
