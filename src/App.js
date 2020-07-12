import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from 'react-router-dom';
import './App.css';

import Home from './views/Home'
import ProfilForm from './views/Profile'
import Converter from './views/Converter'

import { connect } from 'react-redux';

function App(props) {
	return (
		<Router>
			<div>
				<div className="navbar">
					<ul>
						<li><Link to=""><p>Home</p></Link></li>
						<li><Link to="/profil"><p>Input Profile</p></Link></li>
						<li><Link to="/converter"><p>Angle converter</p></Link></li>
					</ul>
				</div>
				<div className="content">
					<Switch>
						<Route path="/profil">
							<ProfilForm />
						</Route>
						<Route path="/converter">
							<Converter />
						</Route>
						<Route path="">
							<Home numberOfVisited="0"/>
						</Route>
					</Switch>
				</div>
			</div>
		</Router>
	);
}

const mapStateToProps = state => ({
	counters: state.counters
});

const mapDispatchToProps = dispatch => ({
	increment: counter => dispatch({ type: 'ADD'}),
	decrement: counter => dispatch({ type: 'SUBTRACT'})
});

export default connect(mapStateToProps, mapDispatchToProps)(App);