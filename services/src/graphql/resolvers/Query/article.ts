import { Article, Tag } from "#root/db/models";

interface GetArticleArguments {
	id: string;
}

const articleResolver = (context: any, { id }: GetArticleArguments) =>
	Article.findByPk(id, {
		include: [{ model: Tag }],
	});

export default articleResolver;
