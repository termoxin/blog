import * as React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";

interface AddRestaurantProps {
  onAddRestaurant: ({ name }: { name: string }) => Promise<void>;
}

const AddRestaurant = ({
  onAddRestaurant: pushAddRestaurant,
}: AddRestaurantProps) => {
  const [isAdding, setIsAdding] = useState(false);
  const {
    formState: { isSubmitting, isValid },
    reset,
    handleSubmit,
    register,
  } = useForm({ mode: "onChange" });

  if (!isAdding) {
    return (
      <div>
        <button onClick={() => setIsAdding(true)}>+ Add Restaurant</button>
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
          autoFocus
          name="name"
          type="text"
          ref={register({ required: true })}
          disabled={isSubmitting}
        />
        <button disabled={isSubmitting || !isValid} type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddRestaurant;
