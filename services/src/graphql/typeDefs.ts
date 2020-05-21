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
		text: String!
		tags: [Tag!]!
		createdAt: String!
	}

	type File {
		filename: String!
		mimetype: String!
		encoding: String!
	}

	input CreateArticleOptions {
		tagName: String!
	}

	type Mutation {
		createChef(name: String!): Chef!
		createRestaurant(chefId: ID!, name: String!): Restaurant!
		createUser(username: String!, password: String!): User
		createArticle(title: String!, text: String!, tags: [CreateArticleOptions]): Article
		uploadArticle(file: Upload!): File!
		attachTag(articleId: ID!, tagName: String!): Tag!
	}

	type Query {
		chefs: [Chef!]!
		currentUser: User @isAuthenticated
		users: [User] @isAuthenticated
		articles: [Article]
		article(id: String!): Article
		loginUser(username: String!, password: String!): Token
	}
`;

export default typeDefs;
