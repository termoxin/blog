import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { setContext } from "apollo-link-context";
import { InMemoryCache } from "apollo-cache-inmemory";

export const cache = new InMemoryCache();

const authLink = setContext((_, { headers }: any) => {
	const token = localStorage.getItem("token");

	return {
		headers: {
			...headers,
			authorization: token ? `Bearer ${token}` : ""
		}
	};
});

const httpLink = new HttpLink({ uri: process.env.SERVICES_URI + "/graphql" });

const client = new ApolloClient({
	link: authLink.concat(httpLink),
	cache
});

export default client;
