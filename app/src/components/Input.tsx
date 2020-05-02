import * as React from "react";
import { InputRef } from "declarations";
import { CustomElement } from "react-hook-form";

interface Props {
	error?: boolean;
	errorMessage?: React.ReactNode;
	labelText?: string;
	id?: string;
	type?: string;
	name?: string;
	placeholder?: string;
}

type ref = (
	ref:
		| HTMLInputElement
		| HTMLSelectElement
		| HTMLTextAreaElement
		| CustomElement<Record<string, any>>
		| null
) => void;

export const Input = React.forwardRef(
	({ error, errorMessage, id, labelText, type, placeholder, name }: Props, ref: InputRef | ref) => (
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
				type={type}
				placeholder={placeholder || ""}
				name={name}
			/>

			{error && <p className="text-red-500 text-xs italic">{errorMessage}</p>}
		</>
	)
);
