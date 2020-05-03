import * as React from "react";

import { AuthenticationData } from "declarations";
interface Props {
	auth?: AuthenticationData;
	logout?: () => void;
}

const Profile = ({ auth, logout }: Props) => {
	return (
		<div className="h-screen">
			<div className="flex justify-center items-center">
				<h1 className="heading">Profile</h1>
				<p className="ml-5">{auth?.currentUser.username}</p>
				<button className="button ml-5" onClick={logout}>
					Logout
				</button>
			</div>
		</div>
	);
};

export default Profile;
