import React from 'react';
import SearchBar from './components/SearchBar';

import './App.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';


class App extends React.Component {
  render() {
    return (
      <div id="mainContent">
        <div id="searchContainer">
          <SearchBar searchId="homePageSearch" searchLabel="What do you feel like making today?"></SearchBar>
        </div>
         
        <Link to="/recipe/45">Recipe 45</Link>
      </div>
    )
  }
}
export default App
