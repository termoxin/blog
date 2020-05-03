import * as React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import Chefs from "../../pages/Chefs";
import Auth from "../../pages/Auth";
import { PrivateRoute } from "../PrivateRoute";

const Root = () => {
	return (
		<Router>
			<Switch>
				<PrivateRoute path="/chefs">
					<Chefs />
				</PrivateRoute>
				<Route path="/auth" component={Auth} />
				<Route>
					<h1>Not found</h1>
				</Route>
			</Switch>
		</Router>
	);
};

export default Root;
