import * as React from "react";
import { ButtonRef } from "declarations";

interface Props {
	loading?: boolean;
	type?: "button" | "submit" | "reset";
	children: React.ReactNode;
}

export const Button = React.forwardRef(
	({ loading, children, type = "button" }: Props, ref: ButtonRef) => {
		return (
			<button
				className={`button focus:outline-none hover:bg-blue-700 focus:shadow-outline ${
					loading ? "spinner" : ""
				}`}
				type={type}
				ref={ref}
			>
				{children}
			</button>
		);
	}
);
