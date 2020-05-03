import * as React from "react";
import { Route, Redirect } from "react-router-dom";
import { useQuery } from "react-apollo";

import { GET_CURRENT_USER } from "../queries";

interface Props {
	children: React.ReactElement;
	path: string;
}

export const PrivateRoute = ({ children, path, ...rest }: Props) => {
	const { data, loading, client } = useQuery(GET_CURRENT_USER);

	const logout = () => {
		window.localStorage.clear();
		client.resetStore();
	};

	if (loading) {
		return <h1>Loading...</h1>;
	}

	return (
		<Route
			{...rest}
			path={path}
			render={({ location }) =>
				data ? (
					React.cloneElement(children, { auth: data, logout })
				) : (
					<Redirect
						to={{
							pathname: "/auth",
							state: { from: location }
						}}
					/>
				)
			}
		/>
	);
};
