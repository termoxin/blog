import "@babel/polyfill";
import * as React from "react";
import { render } from "react-dom";

import { ApolloProvider } from "react-apollo";

import "./styles/global.scss";

import graphqlClient from "./api/graphql";
import Root from "./components/Root";

render(
	<ApolloProvider client={graphqlClient}>
		<Root />
	</ApolloProvider>,
	document.getElementById("root")
);
