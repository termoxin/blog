import "@babel/polyfill";
import * as React from "react";
import { render } from "react-dom";

import { ApolloProvider } from "react-apollo";

import graphqlClient from "./api/graphql";
import Root from "./components/Root";

import "./styles/index.scss";

render(
	<ApolloProvider client={graphqlClient}>
		<Root />
	</ApolloProvider>,
	document.getElementById("app")
);
