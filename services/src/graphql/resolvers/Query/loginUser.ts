import * as jwt from "jsonwebtoken";
import * as bcrypt from "bcrypt";
import { AuthenticationError } from "apollo-server";

import { User } from "#root/db/models";

const loginUserResolver = async (
	context: any,
	{ username, password }: { username: string; password: string }
) => {
	const user = await User.findOne({ where: { username } });

	if (user && (await bcrypt.compare(password, user.password))) {
		const token = jwt.sign({ username }, process.env.JWT_SECRET ?? "secret");
		return { token };
	} else {
		throw new AuthenticationError("Login failed: user does not exist");
	}
};

export default loginUserResolver;
