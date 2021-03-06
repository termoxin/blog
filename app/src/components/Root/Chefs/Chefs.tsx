import * as React from "react";
import { useQuery, useMutation } from "react-apollo";
import gql from "graphql-tag";

import AddRestaurant from "./AddRestaurant";
import AddChef from "./AddChef";

interface Chef {
	id: string;
	name: string;
	restaurants: Restaurant[];
}

interface QueryData {
	chefs: Chef[];
}

type MutationCreateRestaurantData = [
	{
		createRestaurant: Restaurant;
	},
	{
		chefId: string;
		name: string;
	}
];

type MutationCreateChefData = [
	{
		createChef: Chef;
	},
	{
		name: string;
	}
];

interface Restaurant {
	id: string;
	name: string;
}

const query = gql`
	{
		chefs {
			id
			name
			restaurants {
				id
				name
			}
		}
	}
`;

const createRestaurantMutation = gql`
	mutation($chefId: ID!, $name: String!) {
		createRestaurant(chefId: $chefId, name: $name) {
			id
			name
		}
	}
`;

const createChefMutation = gql`
	mutation($name: String!) {
		createChef(name: $name) {
			id
			name
		}
	}
`;

const Chefs = () => {
	const { data, loading, refetch } = useQuery<QueryData>(query);

	const [createRestaurant] = useMutation<MutationCreateRestaurantData>(createRestaurantMutation);

	const [createChef] = useMutation<MutationCreateChefData>(createChefMutation);

	if (loading) return <h1>Loading...</h1>;

	return (
		<div className="flex flex-col items-stretch">
			{data &&
				data.chefs.map(chef => {
					return (
						<div key={chef.id} className="mt-5 mb-5 flex flex-col items-stretch">
							<strong className="border border-pink-900 p-1">{chef.name}</strong>
							<ul className="list-decimal ml-8 mt-4">
								{chef.restaurants.map(({ id, name }) => {
									return <li key={id}>{name}</li>;
								})}
							</ul>
							<AddRestaurant
								onAddRestaurant={async ({ name }) => {
									await createRestaurant({
										variables: { chefId: chef.id, name }
									});
									refetch();
								}}
							/>
						</div>
					);
				})}
			<AddChef
				onAddChef={async ({ name }) => {
					await createChef({
						variables: { name }
					});
					refetch();
				}}
			/>
		</div>
	);
};

export default Chefs;
