import React, { Component } from 'react';
import './App.css';
import books from './books.json'

class PrizeList extends Component {
  render() {
   
    return (
      <div className="">
      <h4>The Man Booker Prize for Fiction </h4>
      <div> The Booker Prize is a literary award , awarded each year for best original novel published in the United Kingdom</div>
        <div>
            {books.books.map((book,index) =>{
                return (
                  <div key={'booker'+index} className=''>
                    <div>{book.name}</div>
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
