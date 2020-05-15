import React, { useState } from "react";
import { useForm } from "react-hook-form";

import { PlusIcon } from "../../icons/Plus";

interface Props {
	onAdd: (tagName: string) => void;
}

interface SubmitData {
	name: string;
}

export const AddTag = ({ onAdd }: Props) => {
	const { register, handleSubmit } = useForm<SubmitData>();
	const [isAdding, setIsAdding] = useState(false);

	const onSubmit = ({ name }: SubmitData) => {
		setIsAdding(false);

		if (name) {
			onAdd(name);
		}
	};

	return (
		<div className="flex items-center">
			<form onSubmit={handleSubmit(onSubmit)}>
				{isAdding && (
					<input type="text" name="name" className="input h-6 w-32 p-2" ref={register} autoFocus />
				)}
			</form>
			<div onClick={() => setIsAdding(true)}>
				<PlusIcon className="ml-2" />
			</div>
		</div>
	);
};
