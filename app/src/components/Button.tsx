import * as React from "react";
import { ButtonRef } from "declarations";

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
	type: "button" | "reset" | "submit";
	loading?: boolean;
	children: React.ReactNode;
}

export const Button: React.FC<Props> = React.forwardRef(
	({ loading, children, ...props }: Props, ref: ButtonRef) => (
		<button
			className={`button focus:outline-none hover:bg-blue-700 focus:shadow-outline ${
				loading ? "spinner" : ""
			}`}
			ref={ref}
			{...props}
		>
			{children}
		</button>
	)
);
