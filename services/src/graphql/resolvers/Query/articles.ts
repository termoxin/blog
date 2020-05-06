import { Article } from "#root/db/models";

const articlesResolver = () => Article.findAll();

export default articlesResolver;
