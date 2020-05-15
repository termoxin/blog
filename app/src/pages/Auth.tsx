import * as React from "react";
import { useForm } from "react-hook-form";
import { useLazyQuery, useMutation } from "react-apollo";
import { Redirect } from "react-router-dom";

import { LOGIN_USER, CREATE_USER } from "../queries";
import { Alert } from "../components/Alert";
import { Button } from "../components/Button";
import { Input } from "../components/Input";

const LoginPage = () => {
	const { register, handleSubmit, errors, getValues, reset } = useForm();
	const [isCreateUser, setCreateUser] = React.useState(false);

	const [
		loginUser,
		{ called: calledLogin, loading: loadingLogin, error: loginError, data: loginData }
	] = useLazyQuery(LOGIN_USER);

	const [
		createUser,
		{ called: calledCreateUser, loading: loadingCreateUser, error: createUserError }
	] = useMutation(CREATE_USER);

	const onSubmit = () => {
		const variables = { variables: getValues() };

		if (isCreateUser) {
			createUser(variables);
			reset();
		} else {
			loginUser(variables);
		}
	};

	const toggleAutenticationMode = () => {
		reset();
		setCreateUser(state => {
			return !state;
		});
	};

	if (loginData) {
		localStorage.setItem("token", loginData.loginUser.token);

		return <Redirect to="/chefs" />;
	}

	const alertMessage =
		(loginError && loginError.graphQLErrors[0].message) ||
		(createUserError && createUserError.graphQLErrors[0].message);

	const isLoading = (calledLogin && loadingLogin) || (calledCreateUser && loadingCreateUser);

	const switchButtonText = isCreateUser ? "Switch to sign in" : "Switch to sign up";
	const submitButtonText = isCreateUser ? "Sign up" : "Sign in";

	return (
		<div className="flex flex-col justify-center items-center h-screen">
			<h1 className="heading font-bold">{isCreateUser ? "Sign up" : "Sign in"}</h1>
			{alertMessage && <Alert message={alertMessage} />}
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
						<Button loading={isLoading} type="submit">
							{submitButtonText}
						</Button>
						<Button onClick={toggleAutenticationMode} loading={isLoading} type="button">
							{switchButtonText}
						</Button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default LoginPage;
