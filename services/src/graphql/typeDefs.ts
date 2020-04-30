import { gql } from "apollo-server";

const typeDefs = gql`
	directive @isAuthenticated on FIELD_DEFINITION
	scalar Date

	type User {
		id: ID!
		username: String!
		password: String!
	}

	type Token {
		token: String!
	}

	type Response {
		success: Boolean!
		message: String
	}

	type Chef {
		id: ID!
		name: String!
		restaurants: [Restaurant!]!
	}

	type Restaurant {
		id: ID!
		name: String!
	}

	type Mutation {
		createChef(name: String!): Chef!
		createRestaurant(chefId: ID!, name: String!): Restaurant!
		createUser(username: String!, password: String!): User
	}

	type Query {
		chefs: [Chef!]!
		currentUser: User @isAuthenticated
		users: [User] @isAuthenticated
		loginUser(username: String!, password: String!): Token
	}
`;

export default typeDefs;
