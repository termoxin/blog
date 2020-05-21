import { User } from "#root/db/models";
import { JwtData } from "types";

const currentUserResolver = async (_parent: any, _args: any, { username }: JwtData) => {
	const user = User.findOne({ where: { username } });

	return user;
};

export default currentUserResolver;
