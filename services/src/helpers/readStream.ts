import * as fs from "fs";

export const readStream = (stream: fs.ReadStream): Promise<string> => {
	const chunks: (Buffer | string)[] = [];

	return new Promise((resolve, reject) =>
		stream
			.on("data", (chunk) => chunks.push(chunk))
			.on("end", () => resolve(chunks.join("")))
			.on("error", reject)
	);
};
