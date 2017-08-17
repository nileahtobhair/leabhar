import React, { Component } from 'react';
import '../main.scss';
import books from '../books.json';
import star from '../star.svg';
import amazon from '../amazon.svg';
import toRead from '../toread.svg';
import read from '../haveread.svg';

class Footer extends Component {

  constructor(){
    super();
   
  }

  /* 
   *  Render book footer container user actions 
   * (add to already read list, add to to read list, buy on amazon , rate)
   */
  render() {
    var main = this;
    return (
    	<div className='footer'>
        <div className='read'><img src={toRead} alt='add to to read'/></div>
        <div className='read'><img src={read} alt='add to have read'/></div>
        <div className='amazon'><img src={amazon} alt='buy on amazon'/></div>
        <ul className='rate' >
          <li><img src={star} alt='one rating star'/></li>
          <li><img src={star} alt='two rating star'/></li>
          <li><img src={star} alt='three rating star'/></li>
          <li><img src={star} alt='four rating star'/></li>
          <li><img src={star} alt='five rating star'/></li>
        </ul>
      </div>
    )
  }
}

export default Footer;
