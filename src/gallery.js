import React, { Component } from 'react';
import './scss/_main.scss';
import books from './books.json';
import Header from './header';

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
      jackets : images,
      extended : false,
      extended_book : undefined
    }
  }
  extend_book(e,book){
    this.setState({
      extended : true,
      extended_book : book
    })
  }

  close_extension(){
    this.setState({
      extended : false,
      extended_book : undefined
    })
  }

  _render_book_overlay(){
      var main = this;
    var extended_book = this.state.extended_book;
    var jacket = extended_book.jacket_name ? main.state.jackets[extended_book.jacket_name] : undefined;
  
    return (
        <div className='book-overlay'>
          <div className='cover'>
            <img src={jacket} alt={"Book Jacket for "+extended_book.name} />
          </div>
          <div className='information'>
            <div className='header'>
              <div className='lhs'>
                <div className='name'>{extended_book.name}</div>
                <div className='author'>{extended_book.author}</div>
              </div>
              <div className='rhs'>
                <div onClick={ (e) => main.close_extension(e) } className='close'>Close</div>
              </div>
            </div>
            <div className='blurb'>{extended_book.blurb}</div>
          </div>
        </div>
      );
  }
  /* 
  Render a gallery of images imported from json.
  */
  render() {
    var main = this;
    return (
      <span>
        <Header/>
          {this.state.extended ?
            <span>
            { this._render_book_overlay() }
            </span>
          : null }
        <div className="gallery">
          
          {books.books.map((book,index) => { 
              var jacket = book.jacket_name ? main.state.jackets[book.jacket_name] : undefined;
              return (
                <div onClick={ (e) => main.extend_book(e,book) } key={'gallery'+index} className='entry'>
                  { jacket !== undefined ?
                    <img src={jacket} alt={"Book Jacket for "+book.name} />
                  : null }
                </div>
              )
            })}
        </div>
      </span>
    );
  }
}



export default Gallery;
