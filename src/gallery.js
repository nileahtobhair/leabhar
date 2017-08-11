import React, { Component } from 'react';
import './scss/_main.scss';
import books from './books.json';

class Gallery extends Component {

  /* Load jacket images dynamically */
  get_jackets(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); return 0; });
    return images;
  }
  /* Set intial state and load the images needed . */
  constructor(){
    super();
    var images = this.get_jackets(require.context('./jackets', false, /\.(png|jpe?g|svg)$/));
     this.state = {
      jackets : images
    }
  }

  render() {
    var main = this;
    return (
      <div className="gallery">
        {books.books.map((book,index) => { 
            var jacket = book.jacket_name ? main.state.jackets[book.jacket_name] : undefined;
            var three_row = index % 3 === 0 ? 'three-row' : '';
            var six_row = index % 6 === 0 ? 'six-row' : '';
            return (

              <div key={'gallery'+index} className='entry'>
                { jacket !== undefined ?
                  <img src={jacket} alt={"Book Jacket for "+book.name} />
                : null }
              </div>
            )
          })}
      </div>
    );
  }
}



export default Gallery;
