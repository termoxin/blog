import { parseMetadata } from "../metaDataParser/metaDataParser";

const metaDataRequest = `

# The best Article in the world

1. Item 1
2. Item 2
3. Item 3


{{
	cover /cover1.jpg
	tags (tag1 tag2 tag3)
	location Ukraine
}}

The end of the article
`;

const metaDataResponse = {
	cover: "/cover1.jpg",
	tags: ["tag1", "tag2", "tag3"],
	location: "Ukraine",
};

const emptyMetaDataRequest = `
# The best Article in the world
`;

const emptyMetaDataResponse = undefined;

describe("helpers", () => {
	test("should return metadata object with metadata", () => {
		const metaData = parseMetadata(metaDataRequest);

		expect(metaData).toEqual(metaDataResponse);
	});

	test("should return undefined", () => {
		const metaData = parseMetadata(emptyMetaDataRequest);

		expect(metaData).toEqual(emptyMetaDataResponse);
	});
});
