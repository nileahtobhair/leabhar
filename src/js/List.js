import React, { Component } from 'react';
import '../main.scss';
import books from '../books.json';
import Header from './Header';
import Footer from './Footer';

class PrizeList extends Component {
  
  /* Load jacket images dynamically */
  get_jackets(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); return 0; });
    return images;
  }
  /* Set intial state and load the images needed . */
  constructor(){
    super();
    var images = this.get_jackets(require.context('../jackets', false, /\.(png|jpe?g|svg)$/));
     this.state = {
      jackets : images
    }
  }
  /* List all books in prize */
  render() {
    var main = this;
    return (
      <div>
        <Header/>
        <div className="prize">
        <h2 className='prize-title'>The Man Booker Prize for Fiction </h2>
        <div className='explanation'>The Booker Prize is a literary award , awarded each year for best original novel written in the English language and published in the United Kingdom. The Man Booker Prize was established in 1969. The winner receives £50,000 as well as the £2,500 awarded to each of the shortlisted authors.
        Listed below are all the winners of the award since its inception in 1969.</div>
          <div>
              {books.books.map((book,index) => { 
                var jacket = book.jacket_name ? main.state.jackets[book.jacket_name] : undefined;
                return (
                  <div key={'booker'+index} className='entry'>
                    { jacket !== undefined ?
                      <img src={jacket} alt={"Book Jacket for "+book.name} />
                    : null }
                    <div className='information'>
                      <h3 className='title'>{book.name}</h3>
                      <div>{book.author}</div>
                      <div className='year'>{book.year_won}</div>
                      <div>{book.blurb}</div>
                      <Footer/>
                    </div>  
                  </div>
                )
              })}
          </div>
        </div>
      </div>
    );
  }
}

export default PrizeList;
