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
			<div>
				<button onClick={() => setIsAdding(true)}>+ Add Chef</button>
			</div>
		);
	}

	const onSubmit = handleSubmit(async ({ name }) => {
		await pushChef({ name });
		reset();
		setIsAdding(false);
	});

	return (
		<div>
			<form onSubmit={onSubmit}>
				<input name="name" type="text" ref={register({ required: true })} disabled={isSubmitting} />
				<button disabled={isSubmitting || !isValid} type="submit">
					Add
				</button>
			</form>
		</div>
	);
};

export default AddChef;
