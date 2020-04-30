import * as jwt from "jsonwebtoken";
import { AuthenticationError } from "apollo-server";

const context = ({ req }: any) => {
	let token = req.headers.authorization ? req.headers.authorization.split(" ")[1] : null;

	if (token) {
		try {
			token = jwt.verify(token, process.env.JWT_SECRET ?? "secret");
		} catch (error) {
			throw new AuthenticationError("Authentication token is invalid, please log in.");
		}
	}

	return {
		username: token ? token.username : null,
	};
};

export default context;
