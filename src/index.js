import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PrizeList from './App';
import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter , Route } from 'react-router-dom'


ReactDOM.render (
  <BrowserRouter >
    <Route path="/booker" component={PrizeList}/>
  </BrowserRouter>,
  document.getElementById('root')
);


/*ReactDOM.render(<PrizeList />, document.getElementById('root'));*/
registerServiceWorker();
