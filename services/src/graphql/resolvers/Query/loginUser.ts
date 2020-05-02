import * as jwt from "jsonwebtoken";
import * as bcrypt from "bcrypt";
import { AuthenticationError } from "apollo-server";

import { User } from "#root/db/models";
import accessEnv from "#root/helpers/accessEnv";
import { Context, JwtData } from "types";

const loginUserResolver = async (
	context: Context,
	{ username, password }: { username: string; password: string }
) => {
	const user = await User.findOne({ where: { username } });
	const jwtData: JwtData = { username };

	if (user && (await bcrypt.compare(password, user.password))) {
		const secret = accessEnv("JWT_SECRET");

		if (secret) {
			const token = jwt.sign(jwtData, secret);
			return { token };
		}

		throw Error("You should provide JWT_TOKEN as environment variable");
	} else {
		throw new AuthenticationError("Login failed: user does not exist");
	}
};

export default loginUserResolver;
