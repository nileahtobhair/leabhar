import React, { Component } from 'react';
import '../scss/_main.scss';
import books from '../books.json';

class Search extends Component {

  constructor(props){
    super();
   
  }

  /* 
   * Search the list of books in the imported json file using filter function.
   * Compare against search term entered by the user and passed to component through props.
   * Map the results into readable format.
   */
  search_books(){
  	let search_term = this.props.term.toLowerCase();
  	let filter_function = (book) =>  {
      	return book.name.toLowerCase().includes(search_term) || book.author.toLowerCase().includes(search_term) || book.blurb.toLowerCase().includes(search_term);
    }
	let results = books.books.filter(filter_function);
	return (
		<div>
		{results!==undefined && results.length>0 ?
			<span>
				{ results.map((book) => {
					return(
						<span>
							<div>{book.name}</div>
							<div>{book.author}</div>
							<div>{book.blurb}</div>
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
      <div className="search-results">
        <h1>{main.props.term}</h1>
        { main.props.term !== undefined && main.props.term !== '' ?
        	<span> {main.search_books()} </span>
        	: null
    	}
      </div>
    )
  }
}

export default Search;
