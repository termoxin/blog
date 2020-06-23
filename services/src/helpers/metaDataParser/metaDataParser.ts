import {
	compose,
	isEmpty,
	filter,
	split,
	map,
	trim,
	complement,
	equals,
	or,
	replace,
	slice,
} from "ramda";

interface FindMedataDataOutput {
	start?: number;
	end?: number;
	text: string;
}

interface Metadata {
	cover?: string;
	tags?: string[];
	location?: string;
}

enum METADATA {
	COVER = "cover",
	TAGS = "tags",
	LOCATION = "location",
}

const isOpenedCurlyBracket = (character: string) => character == "{";
const isClosedCurlyBracket = (character: string) => character == "}";

const METADATA_NOTATION_LENGTH = 2;
const WHITE_SPACE = " ";

export const findMetaData = (text: string): FindMedataDataOutput => {
	let start, end;
	let cursor = 0;

	while (cursor < text.length) {
		const character = text[cursor];
		const nextCharacter = text[cursor + 1];

		if (isOpenedCurlyBracket(character) && isOpenedCurlyBracket(nextCharacter)) {
			start = cursor + METADATA_NOTATION_LENGTH;
			cursor++;
			continue;
		}

		if (isClosedCurlyBracket(character) && isClosedCurlyBracket(nextCharacter)) {
			end = cursor;
			cursor++;
			continue;
		}

		cursor++;
	}

	return { text, start, end };
};

const parseTags = map(replace(/[()]/, ""));

const getParsedMetadataObject = (metaDataArray: ReturnType<typeof getUnparsedMetadataArray>) => {
	const object: Record<string, any> = {};

	metaDataArray.forEach(([name, value, ...other]) => {
		if (or(equals(METADATA.COVER, name), equals(METADATA.LOCATION, name))) {
			object[name] = value;
		}

		if (equals(METADATA.TAGS, name)) {
			object[name] = parseTags([value, ...other]);
		}
	});

	return object;
};

const getUnparsedMetadataArray = compose(
	map(compose(split(WHITE_SPACE), trim)),
	filter(complement(isEmpty)),
	split("\n")
);

const getMetadata = compose(getParsedMetadataObject, getUnparsedMetadataArray);

export const extractMetadata = ({
	text,
	start,
	end,
}: FindMedataDataOutput): Metadata | undefined => {
	if (start && end) {
		const metaDataString = slice(start, end, text);

		return getMetadata(metaDataString);
	}

	return undefined;
};

export const parseMetadata = compose(extractMetadata, findMetaData);
