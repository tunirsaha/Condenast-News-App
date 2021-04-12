import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './reset.css';
import './index.css';
import TodaysNews from './pages/todaysNews';
import TodaysHeadlines from './pages/todaysHeadlines';
import Sources from './pages/sources';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path='/' exact component={TodaysHeadlines}></Route>
        <Route exact path='/headlines' component={TodaysHeadlines}></Route>
        <Route exact path='/today' component={TodaysNews}></Route>
        <Route exact path='/sources' component={Sources}></Route>
        <Route exact path='*' component={TodaysHeadlines}></Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
