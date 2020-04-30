import { ApolloServer } from "apollo-server-express";
import * as cors from "cors";
import * as express from "express";
import accessEnv from "#root/helpers/accessEnv";
import resolvers from "#root/graphql/resolvers";
import typeDefs from "#root/graphql/typeDefs";
import context from "#root/graphql/context";
import directives from "#root/graphql/directives";

const PORT = accessEnv("PORT", 7000);

const apolloServer = new ApolloServer({
	resolvers,
	typeDefs,
	context,
	schemaDirectives: directives,
});

const app = express();

app.use(
	cors({
		origin: (origin, cb) => cb(null, true),
		credentials: true,
		preflightContinue: true,
		exposedHeaders: [
			"Access-Control-Allow-Headers",
			"Access-Control-Allow-Origin, Origin, X-Requested-With, Content-Type, Accept",
			"X-Password-Expired",
		],
		optionsSuccessStatus: 200,
	})
);

apolloServer.applyMiddleware({ app, path: "/graphql" });

app.listen(PORT, "0.0.0.0", () => {
	console.info(`GSP service listening on ${PORT}`);
});
