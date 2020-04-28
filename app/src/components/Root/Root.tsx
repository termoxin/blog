import * as React from "react";

import Chefs from "./Chefs";

const Root = () => {
	return (
		<div className="container p-16">
			<strong className="text-4xl">Chefs and their Restaurants</strong>
			<Chefs />
		</div>
	);
};

export default Root;
