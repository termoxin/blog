import * as jwt from "jsonwebtoken";
import { AuthenticationError } from "apollo-server";

import { Context, JwtData } from "types";

const context = ({ req: { headers } }: Context) => {
	let token = headers.authorization ? headers.authorization.split(" ")[1] : null;

	if (token) {
		try {
			const verifiedToken = jwt.verify(token, process.env.JWT_SECRET ?? "secret") as JwtData;

			return {
				username: token ? verifiedToken.username : null,
			};
		} catch (error) {
			throw new AuthenticationError("Authentication token is invalid, please log in.");
		}
	}
};

export default context;
