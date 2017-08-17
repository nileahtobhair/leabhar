import React, { Component } from 'react';
import '../main.scss';
import books from '../books.json';
import Header from './Header';
import Footer from './Footer';

class Gallery extends Component {

  /* Load book jacket images dynamically */
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
      jackets : images,
      extended : false,
      extended_book : undefined
    }
  }

  /* Trigger on book jacket click from gallery.
   * Set the click book information to state variable to be used in modal. 
   */
  extend_book(book){
    this.setState({
      extended : true,
      extended_book : book
    })
  }

  /* Render a gallery of images imported from json file. */
  render() {
    var main = this;
    var extended_book = this.state.extended_book !== undefined ? this.state.extended_book : undefined;
    var extended_jacket = this.state.extended_book !== undefined && extended_book.jacket_name ? main.state.jackets[extended_book.jacket_name] : undefined;
             
    return (
      <span>
        <Header/>
        <div className="gallery">
          {books.books.map((book,index) => { 
              var jacket = book.jacket_name ? main.state.jackets[book.jacket_name] : undefined;
              return (
                <article key={'gallery'+index} className="demo-modal-mixin">
                  <a onClick={ (e) => main.extend_book(book)} href={"#fade"} className="entry demo-link">
                    { jacket !== undefined ?
                      <img src={jacket} alt={"Book Jacket for "+book.name} />
                    : null }
                  </a>
                </article>
              )
            })}
        </div>
        <dialog className="modal-overlay fade" id={"fade"}>
          <a href="#" className="demo-btn-close">Close</a>
          {main.state.extended_book !== undefined ?
            <div className='book-overlay'>
              <div className='cover'>
                <img src={extended_jacket} alt={"Book Jacket for "+extended_book.name} />
            </div>
            <div className='information'>
              <div className='high'>
                <div className='header'>
                  <div className='name'>{extended_book.name}</div>
                  <div className='author'>{extended_book.author}</div>
                </div>
                <div className='blurb'>{extended_book.blurb}</div>
              </div>
              <Footer/>
            </div>
              </div>
            : null }
          </dialog>
        </span>
    );
  }
}



export default Gallery;
