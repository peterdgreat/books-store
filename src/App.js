import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import BookLists from './components/BookLists';
import Categories from './components/Categories';

function App() {
  return (
    <Router className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <BookLists />
        </Route>
        <Route path="/categories">
          <Categories />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
