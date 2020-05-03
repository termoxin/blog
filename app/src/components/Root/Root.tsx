import * as React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import Chefs from "../../pages/Chefs";
import Login from "../../pages/Login";

const Root = () => {
	return (
		<Router>
			<Switch>
				<Route path="/chefs" component={Chefs} />
				<Route path="/login" component={Login} />
				<Route>
					<h1>Not found</h1>
				</Route>
			</Switch>
		</Router>
	);
};

export default Root;
