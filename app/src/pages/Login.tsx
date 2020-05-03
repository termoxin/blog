import * as React from "react";
import { useForm } from "react-hook-form";
import { useLazyQuery } from "react-apollo";
import { Redirect } from "react-router-dom";

import { LOGIN_USER } from "../queries";
import { Alert } from "../components/Alert";
import { Button } from "../components/Button";
import { Input } from "../components/Input";

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
			<h1 className="heading font-bold">Sign in</h1>
			{error && <Alert message={error && error.graphQLErrors[0].message} />}
			<div className="w-full max-w-xs">
				<form
					onSubmit={handleSubmit(onSubmit)}
					className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
				>
					<div className="mb-4">
						<Input
							ref={register({ required: true })}
							id="username"
							type="text"
							name="username"
							placeholder="Username"
							labelText="Username"
							error={errors.username}
							errorMessage="Please enter a username."
						/>
					</div>
					<div className="mb-6">
						<Input
							ref={register({ required: true })}
							id="password"
							type="password"
							name="password"
							placeholder="******************"
							labelText="Password"
							error={errors.password}
							errorMessage="Please enter a password."
						/>
					</div>
					<div className="flex items-center justify-between">
						<Button loading={called && loading} type="submit">
							Sign In
						</Button>
						<Button loading={called && loading} type="submit">
							Switch to sign up
						</Button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default LoginPage;
