import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    </Route>
);

// You could add in more pages here as the app grows
// currently configures to always have the App component displaying no matter
// what the URL.
