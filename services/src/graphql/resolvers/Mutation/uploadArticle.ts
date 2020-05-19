import * as fs from "fs";

import { Article } from "#root/db/models";
import { readStream } from "#root/helpers/readStream";
import { removeHashesFromFirstLine, getAllExceptFirstLine } from "#root/helpers/string";

interface UploadFile {
	filename: string;
	mimetype: string;
	encoding: string;
	createReadStream: () => fs.ReadStream;
}

interface UploadArticleArguments {
	file: UploadFile;
}

const uploadArticleResolver = async (context: any, { file }: UploadArticleArguments) => {
	const { filename, mimetype, encoding, createReadStream } = await file;

	const articleContent = await readStream(createReadStream());

	const title = removeHashesFromFirstLine(articleContent);
	const text = getAllExceptFirstLine(articleContent);

	await Article.create({
		title,
		text,
	});

	return { filename, mimetype, encoding };
};

export default uploadArticleResolver;
