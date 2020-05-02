import { Chef } from "#root/db/models";

interface CreateChefArguments {
	name: string;
}

const createChefResolver = (context: any, { name }: CreateChefArguments) => Chef.create({ name });

export default createChefResolver;
