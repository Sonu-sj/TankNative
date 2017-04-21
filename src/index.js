import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

// Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/app.css';

// Components
import Dashboard from './containers/Dashboard';
import TankDetails from './containers/TankDetails';


render(
  <Router history={browserHistory}>
  	<Route path="/" component={Dashboard} />
  	<Route path="/tank" component={TankDetails} />
  </Router>
 ,
  document.getElementById('root')
);