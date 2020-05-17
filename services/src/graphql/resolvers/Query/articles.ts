import { Article, Tag } from "#root/db/models";

const articlesResolver = () =>
	Article.findAll({
		include: [{ model: Tag }],
	});

export default articlesResolver;
