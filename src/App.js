import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import ReactCSSTransitionGroup from 'react-transition-group';
import Carousel from './Carousel';
import Header from './Header';
import Pagination from './Page';

class App extends React.Component{
  render(){
    var items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  return (
    <div >
    <Header/>
    <Carousel items={items} active={0}/>
    <Pagination/>
    </div>
  );
}
}

export default App;
