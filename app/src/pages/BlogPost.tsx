import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { useQuery, useMutation } from "react-apollo";
import Markdown from "react-markdown";

import { Article } from "declarations";

import { GET_ARTICLE, ATTACH_TAG } from "../queries";
import { Tags } from "../components/Tags";
import { CodeBlock } from "../components/CodeBlock";
import { AddTag } from "./blogPost/AddTag";

interface Params {
	id: string;
}

interface QueryData {
	article: Article;
}

export const BlogPost = ({ match: { params } }: RouteComponentProps<Params>) => {
	const { data, loading, refetch } = useQuery<QueryData>(GET_ARTICLE, {
		variables: { id: params.id }
	});

	const [attachTag] = useMutation(ATTACH_TAG);

	if (loading && !data) {
		return <h1>Loading..</h1>;
	}

	const addTag = async (name: string) => {
		await attachTag({ variables: { articleId: params.id, tagName: name } });
		refetch();
	};

	if (data) {
		const {
			article: { tags, title }
		} = data;

		return (
			<div className="container w-full md:max-w-3xl mx-auto pt-20 text-lg">
				<h1>{title}</h1>
				<div className="flex my-6">
					<Tags tags={tags} />
					<AddTag onAdd={addTag} />
				</div>
				<Markdown source={data?.article.text} renderers={{ code: CodeBlock }} />
			</div>
		);
	}

	return null;
};
