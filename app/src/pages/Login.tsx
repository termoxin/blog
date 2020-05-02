import * as React from "react";
import { useForm } from "react-hook-form";
import { useLazyQuery } from "react-apollo";
import { Redirect } from "react-router-dom";

import { LOGIN_USER } from "../queries";
import { Alert } from "../components/Alert";

interface OnSubmitData {
	username: string;
	password: string;
}

const LoginPage = () => {
	const { register, handleSubmit, errors, getValues } = useForm();

	const [loginUser, { called, loading, data, error }] = useLazyQuery(LOGIN_USER);

	const onSubmit = () => {
		loginUser({
			variables: getValues()
		});
	};

	if (data) {
		localStorage.setItem("token", data.loginUser.token);

		return <Redirect to="/chefs" />;
	}

	return (
		<div className="flex flex-col justify-center items-center h-screen">
			{error && <Alert message={error?.graphQLErrors[0].message} />}
			<div className="w-full max-w-xs">
				<form
					onSubmit={handleSubmit(onSubmit)}
					className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
				>
					<div className="mb-4">
						<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
							Username
						</label>
						<input
							ref={register({ required: true })}
							className={`input border ${
								errors.username ? "border-red-500" : ""
							} w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline`}
							id="username"
							type="text"
							name="username"
							placeholder="Username"
						/>
						{errors.username && (
							<p className="text-red-500 text-xs italic">Please enter a username.</p>
						)}
					</div>
					<div className="mb-6">
						<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
							Password
						</label>
						<input
							ref={register({ required: true })}
							className={`input border ${
								errors.password ? "border-red-500" : ""
							} w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline`}
							id="password"
							type="password"
							name="password"
							placeholder="******************"
						/>

						{errors.password && (
							<p className="text-red-500 text-xs italic">Please enter a password.</p>
						)}
					</div>
					<div className="flex items-center justify-between">
						<button
							className={`button focus:outline-none hover:bg-blue-700 focus:shadow-outline ${
								called && loading ? "spinner" : ""
							}`}
							type="submit"
						>
							Sign In
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default LoginPage;
