import React, { Component } from 'react';
import './scss/_main.scss';
import books from './books.json';

class PrizeList extends Component {
  render() {
   
    return (
      <div className="prize-list">
      <h3>The Man Booker Prize for Fiction </h3>
      <div> The Booker Prize is a literary award , awarded each year for best original novel published in the United Kingdom</div>
        <div>
            {books.books.map((book,index) =>{
                return (
                  <div key={'booker'+index} className='prize-entry'>
                    <h3>{book.name}</h3>
                    <div>{book.author}</div>
                    <div>{book.blurb}</div>
                  </div>
                )
            })}
        </div>
      </div>
    );
  }
}

export default PrizeList;
