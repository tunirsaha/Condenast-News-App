import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './reset.css';
import './index.css';
import TodaysNews from './pages/todaysNews';
import TodaysHeadlines from './pages/todaysHeadlines';
import Business from './pages/business';
import Entertainment from './pages/entertainment';
import Technology from './pages/technology';
import Sports from './pages/sports';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path='/' component={TodaysHeadlines}></Route>
        <Route exact path='/today' component={TodaysNews}></Route>
        <Route exact path='/headlines' component={TodaysHeadlines}></Route>
        <Route exact path='/business' component={Business}></Route>
        <Route exact path='/entertainment' component={Entertainment}></Route>
        <Route exact path='/sports' component={Sports}></Route>
        <Route exact path='/technology' component={Technology}></Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
