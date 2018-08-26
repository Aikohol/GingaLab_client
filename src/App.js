import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';


import Users from './components/Pages/Users';
import Register from './components/Pages/Users/create';

axios.default.baseURL = 'http://localhost:8000';

class App extends Component {
	render() {
		return (
		<Router>
			<Switch>
				<Route exact path="/" component={ Users } />
				<Route exact path="/create_user" component={ Register } />
			</Switch>
		</Router>);
	}
}

export default App;
