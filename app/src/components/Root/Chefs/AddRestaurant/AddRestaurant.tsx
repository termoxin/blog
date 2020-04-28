import * as React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";

interface AddRestaurantProps {
	onAddRestaurant: ({ name }: { name: string }) => Promise<void>;
}

const AddRestaurant = ({ onAddRestaurant: pushAddRestaurant }: AddRestaurantProps) => {
	const [isAdding, setIsAdding] = useState(false);
	const {
		formState: { isSubmitting, isValid },
		reset,
		handleSubmit,
		register
	} = useForm({ mode: "onChange" });

	if (!isAdding) {
		return (
			<div className="mt-3">
				<button className="btn-blue hover:bg-blue-700" onClick={() => setIsAdding(true)}>
					+ Add Restaurant
				</button>
			</div>
		);
	}

	const onSubmit = handleSubmit(async ({ name }) => {
		await pushAddRestaurant({ name });
		reset();
		setIsAdding(false);
	});

	return (
		<div>
			<form onSubmit={onSubmit}>
				<input
					name="name"
					type="text"
					className="input mr-2"
					ref={register({ required: true })}
					disabled={isSubmitting}
				/>
				<button
					className="btn-blue hover:bg-blue-700 mr-4"
					disabled={isSubmitting || !isValid}
					type="submit"
				>
					Add
				</button>
			</form>
		</div>
	);
};

export default AddRestaurant;
