import * as React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import { PrivateRoute } from "../PrivateRoute";
import Chefs from "../../pages/Chefs";
import Auth from "../../pages/Auth";
import Profile from "../../pages/Profile";
import { BlogPost } from "../../pages/BlogPost";
import { UploadArticle } from "../../pages/UploadArticle";

const Root = () => (
	<Router>
		<Switch>
			<PrivateRoute path="/chefs">
				<Chefs />
			</PrivateRoute>
			<Route path="/auth" component={Auth} />
			<Route path="/article/:id" component={BlogPost} />
			<PrivateRoute exact path="/">
				<Profile />
			</PrivateRoute>
			<PrivateRoute path="/upload">
				<UploadArticle />
			</PrivateRoute>
			<Route>
				<h1>Not found</h1>
			</Route>
		</Switch>
	</Router>
);

export default Root;
