import { Request, Response } from "express";

type Token = string | JwtData | null;

interface JwtData {
	username: string;
}

interface Context {
	req: Request;
	res: Response;
}
