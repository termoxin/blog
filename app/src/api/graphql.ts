import { ApolloClient } from "apollo-client";
import { createUploadLink } from "apollo-upload-client";
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

const uploadLink = createUploadLink({ uri: process.env.SERVICES_URI + "/graphql" });

const client = new ApolloClient({
	link: authLink.concat(uploadLink),
	cache
});

export default client;
