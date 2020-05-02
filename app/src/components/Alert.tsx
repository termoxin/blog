import * as React from "react";

interface Props {
	message?: string;
}

export const Alert = ({ message }: Props) => (
	<div
		className="flex-col flex text-center bg-red-100 border border-red-400 text-red-700 px-4 py-3 mb-10 rounded relative"
		role="alert"
	>
		<strong className="font-bold">Holy smokes!</strong>
		<span className="block sm:inline">{message || `Something seriously bad happened.`}</span>
	</div>
);
