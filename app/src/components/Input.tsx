import * as React from "react";
import { InputRef } from "declarations";

interface Props extends React.HTMLAttributes<HTMLInputElement> {
	error?: boolean;
	errorMessage?: React.ReactNode;
	labelText?: string;
	id?: string;
}

export const Input = React.forwardRef(
	({ error, errorMessage, id, labelText, ...props }: Props, ref: InputRef) => (
		<>
			<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={id}>
				{labelText}
			</label>
			<input
				className={`input border ${
					error ? "border-red-500" : ""
				} w-full py-2 px-3 mb-3 focus:outline-none focus:shadow-outline`}
				ref={ref}
				id={id}
				name={name}
				{...props}
			/>

			{error && <p className="text-red-500 text-xs italic">{errorMessage}</p>}
		</>
	)
);
