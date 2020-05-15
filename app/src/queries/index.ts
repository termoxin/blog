import gql from "graphql-tag";

const GET_CURRENT_USER = gql`
	{
		currentUser {
			username
		}
	}
`;

const LOGIN_USER = gql`
	query loginUser($username: String!, $password: String!) {
		loginUser(username: $username, password: $password) {
			token
		}
	}
`;

const CREATE_USER = gql`
	mutation($username: String!, $password: String!) {
		createUser(username: $username, password: $password) {
			username
			password
		}
	}
`;

const GET_ARTICLES = gql`
	{
		articles {
			id
			title
			text
			tags {
				id
				tagName
			}
		}
	}
`;

const GET_ARTICLE = gql`
	query getArticle($id: String!) {
		article(id: $id) {
			id
			title
			text
			tags {
				id
				tagName
			}
		}
	}
`;

const UPLOAD_ARTICLE = gql`
	mutation uploadArticle($file: Upload!) {
		uploadArticle(file: $file) {
			filename
		}
	}
`;

const ATTACH_TAG = gql`
	mutation attachTag($articleId: ID!, $tagName: String!) {
		attachTag(articleId: $articleId, tagName: $tagName) {
			id
			tagName
		}
	}
`;

export {
	GET_CURRENT_USER,
	LOGIN_USER,
	CREATE_USER,
	GET_ARTICLES,
	GET_ARTICLE,
	UPLOAD_ARTICLE,
	ATTACH_TAG
};
