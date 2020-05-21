import { ForbiddenError } from "apollo-server";
import * as bcrypt from "bcrypt";

import { Context } from "types";
import { User, Article } from "#root/db/models";

const BCRYPT_ROUNDS = 12;

interface CreateUserArguments {
	username: string;
	password: string;
}

const createUserResolver = async (
	context: Context,
	{ username, password }: CreateUserArguments
) => {
	const user = await User.findOne({ where: { username } });
	if (user) {
		throw new ForbiddenError("User already exists.");
	}
	const hashedPassword = await bcrypt.hash(password, BCRYPT_ROUNDS);
	const newUser = await User.create({ username, password: hashedPassword });
	return newUser;
};

export default createUserResolver;
