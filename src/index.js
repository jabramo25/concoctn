import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import RecipeBook from './RecipeBook';
import AddRecipe from './AddRecipe';
import Recipe from './Recipe';
import Notfound from './NotFound'
import { Route, Link, NavLink, BrowserRouter as Router, Switch } from 'react-router-dom';

const routing = (
	<Router>
		<div>
			<div className="topbar">
				<span className="display-flex align-items-center">
					<span className="app-title">Concotn</span>
					<span className="app-description">The Recipe Tracking App</span>
				</span>

				<ul className="navbar">
					<li>
						<NavLink exact activeClassName="active-route" to="/">Home</NavLink>
					</li>
					<li>
						<NavLink activeClassName="active-route" to="/recipeBook">Recipe Book</NavLink>
					</li>
					<li>
						<NavLink activeClassName="active-route" to="/addRecipe">Add Recipe</NavLink>
					</li>
				</ul>
			</div>
			<Switch>
				<Route exact path="/" component={App} />
				<Route path="/recipeBook" component={RecipeBook} />
				<Route path="/addRecipe" component={AddRecipe} />
				<Route path="/recipe/:id" component={Recipe} />
				<Route component={Notfound} />
			</Switch>

		</div>
	</Router>
)

ReactDOM.render(routing, document.getElementById('root'));
