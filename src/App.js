import React, { Component } from "react";
import './App.scss';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from './pages/Create';
import Home from './pages/Home';
import MostPopular from './pages/MostPopular';
import ArticleDetails from './pages/ArticleDetails';
import NotFound from './pages/NotFound';

class App extends Component {
	render() {
		return (
			<Router>
				<main>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/most-popular" component={MostPopular} />
						<Route path="/article/:id" component={ArticleDetails} />
						<Route path="/create" component={Create} />
						<Route component={NotFound} />
					</Switch>
				</main>
			</Router>
		);
	}
}

export default App;
