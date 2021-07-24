import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import HomeCard from './components/HomeCard';
import AboutCard from './components/AboutCard';
import CuisineCard from './components/CuisineCard';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <nav className="App-header">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Cuisine</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/cuisine">
            <Cuisine />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </nav>
    </div>
    </Router>
  );
}

function Home() {
  return <HomeCard />
}

function About() {
  return <AboutCard />
}

function Cuisine() {
  return <CuisineCard />
}

export default App;