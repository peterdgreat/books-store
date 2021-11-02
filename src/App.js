import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import BooksContainer from './components/BooksContainer';
import Categories from './components/Categories';

function App() {
  return (
    <Router className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <BooksContainer />
        </Route>
        <Route path="/categories">
          <Categories />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
