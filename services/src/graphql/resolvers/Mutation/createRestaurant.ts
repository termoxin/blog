import { Context } from "types";
import { Restaurant } from "#root/db/models";

interface CreateRestaurantArguments {
	chefId: string;
	name: string;
}

const createRestaurantResolver = (
	context: Context,
	{ chefId, name }: CreateRestaurantArguments
) => {
	return Restaurant.create({ chefId, name });
};
export default createRestaurantResolver;
