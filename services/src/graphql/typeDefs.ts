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

	type Tag {
		id: ID!
		tagName: String!
	}

	type Article {
		id: ID!
		title: String!
		tags: [Tag!]!
	}

	type Mutation {
		createChef(name: String!): Chef!
		createRestaurant(chefId: ID!, name: String!): Restaurant!
		createUser(username: String!, password: String!): User
		createArticle(title: String!): Article
	}

	type Query {
		chefs: [Chef!]!
		currentUser: User @isAuthenticated
		users: [User] @isAuthenticated
		articles: [Article]
		loginUser(username: String!, password: String!): Token
	}
`;

export default typeDefs;
