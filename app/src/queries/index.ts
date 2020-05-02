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

export { GET_CURRENT_USER, LOGIN_USER };
