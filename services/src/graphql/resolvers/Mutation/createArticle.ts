import { map, prop } from "ramda";
import { Article, ArticleTag, Tag } from "#root/db/models";

interface TagAsArguments {
	tagName: string;
}

interface CreateArticleArguments {
	title: string;
	text: string;
	tags?: TagAsArguments[];
}

const createArticleResolver = async (
	context: any,
	{ title, text, tags }: CreateArticleArguments
) => {
	if (tags) {
		const article = await Article.create({ title, text });

		await Tag.bulkCreate(tags, { updateOnDuplicate: ["tagName"] });

		const requestedTags = await Tag.findAll({
			where: { tagName: map(prop("tagName"))(tags) },
		});

		await article.setTags(map(prop("id"))(requestedTags));

		return article;
	}

	return Article.create({ title });
};

export default createArticleResolver;
