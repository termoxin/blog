import { RefObject } from "react";

type ButtonRef =
	| string
	| ((instance: HTMLButtonElement | null) => void)
	| RefObject<HTMLButtonElement>
	| null
	| undefined;

type InputRef =
	| string
	| ((instance: HTMLInputElement | null) => void)
	| RefObject<HTMLInputElement>
	| null
	| undefined;

interface CurrentUser {
	username: string;
}

interface AuthenticationData {
	currentUser: CurrentUser;
}
