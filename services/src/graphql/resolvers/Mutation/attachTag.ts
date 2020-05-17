import { Article, ArticleTag, Tag } from "#root/db/models";

interface AttachTagArguments {
	articleId: string;
	tagName: string;
}

const attachTagResolver = async (context: any, { articleId, tagName }: AttachTagArguments) => {
	const article = await Article.findByPk(articleId, { include: [Tag] });

	const [tag] = await Tag.findOrCreate({
		where: { tagName },
	});

	article.addTags([tag.id]);

	return tag;
};

export default attachTagResolver;
