import React from "react";
import { Tag } from "declarations";
import { Tag as PostTag } from "./Tag";

interface Props {
	tags: Tag[];
}

export const Tags = ({ tags }: Props) => (
	<div className="w-36 flex-wrap">
		{tags.map(({ id, tagName }) => (
			<PostTag key={id} name={tagName} />
		))}
	</div>
);
