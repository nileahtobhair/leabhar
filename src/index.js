import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PrizeList from './js/List';
import Gallery from './js/Gallery';
import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter , Route } from 'react-router-dom'

ReactDOM.render (
	<BrowserRouter >		
    	<div>
    		<Route exact path="/" component={Gallery}/>
		   	<Route path="/booker" component={PrizeList}/>
		</div> 
  	</BrowserRouter>,	
  	document.getElementById('root')
);

//registerServiceWorker();
