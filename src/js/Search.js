import React, { Component } from 'react';
import '../main.scss';
import books from '../books.json';

class Search extends Component {

  /*constructor(props){
    super();
   
  }*/
  constructor(){
    super();
    var images = this.get_jackets(require.context('../jackets', false, /\.(png|jpe?g|svg)$/));
     this.state = {
      jackets : images
    }
  }

  get_jackets(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); return 0; });
    return images;
  }
  /* 
   * Search the list of books in the imported json file using filter function.
   * Compare against search term entered by the user and passed to component through props.
   * Map the results into readable format.
   */
  search_books(){
  	var main = this;
  	let search_term = this.props.term.toLowerCase();
  	let filter_function = (book) =>  {
      	return book.name.toLowerCase().includes(search_term) || book.author.toLowerCase().includes(search_term) || book.blurb.toLowerCase().includes(search_term);
    }
	let results = books.books.filter(filter_function);
	return (
		<div>
		{results!==undefined && results.length>0 ?
			<span>
				{ results.map((book,index) => {
					var jacket = book.jacket_name ? main.state.jackets[book.jacket_name] : undefined;
					return(
						<span className='entry' key={"search-result"+index}>
							{ jacket !== undefined ?
		                      <img src={jacket} alt={"Book Jacket for "+book.name} />
		                    : null }
		                    <div className='information'>
		                      <h3 className='title'>{book.name}</h3>
		                      <div className='author'>{book.author}</div>
		                      <div>{book.blurb}</div>
		                    </div>
						</span>
					)
				})}
			</span>
		: <p>No results found</p> }
		</div>
	)
  }

  /* Main render method  */
  render() {
    var main = this;
    return (
    	<span>
    	{ main.props.visible ?
	    	<div className="search-results">
	    		 { main.props.term !== undefined && main.props.term !== '' ?
	    		 <span>
		        	<h1><span className='results-title'>searching : </span>{main.props.term}</h1>
		        	<span> {main.search_books()} </span>
		        </span>
		        	: null
		    	}
	      </div>
      : null }
      </span>
    )
  }
}

export default Search;
