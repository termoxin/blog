import * as React from "react";

import Chefs from "./Chefs";

import styles from "styles/Root.scss";

const Root = () => {
	return (
		<div>
			<strong className={styles.heading}>Chefs and their Restaurants</strong>
			<Chefs />
		</div>
	);
};

export default Root;
