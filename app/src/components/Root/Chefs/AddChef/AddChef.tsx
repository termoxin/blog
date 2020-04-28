import * as React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";

interface AddRestaurantProps {
	onAddChef: ({ name }: { name: string }) => Promise<void>;
}

const AddChef = ({ onAddChef: pushChef }: AddRestaurantProps) => {
	const [isAdding, setIsAdding] = useState(false);
	const {
		formState: { isSubmitting, isValid },
		reset,
		handleSubmit,
		register
	} = useForm({ mode: "onChange" });

	if (!isAdding) {
		return (
			<div className="self-end">
				<button className="btn-blue hover:bg-blue-700 mt-2" onClick={() => setIsAdding(true)}>
					+ Add Chef
				</button>
			</div>
		);
	}

	const onSubmit = handleSubmit(async ({ name }) => {
		await pushChef({ name });
		reset();
		setIsAdding(false);
	});

	return (
		<div className="mt-2">
			<form onSubmit={onSubmit}>
				<input
					name="name"
					className="input mr-2"
					type="text"
					ref={register({ required: true })}
					disabled={isSubmitting}
				/>
				<button
					className="btn-blue hover:bg-blue-700"
					disabled={isSubmitting || !isValid}
					type="submit"
				>
					Add
				</button>
			</form>
		</div>
	);
};

export default AddChef;
