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

interface Tag {
	id: string;
	tagName: string;
}

interface Article {
	id: string;
	text: string;
	title: string;
	tags: Tag[];
	createdAt: string;
}

declare module "*.md";
