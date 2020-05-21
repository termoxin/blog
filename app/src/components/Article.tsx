import React from "react";

import { Tag } from "declarations";
import { Link } from "react-router-dom";
import { Tags } from "./Tags";

interface Props {
	id: string;
	title: string;
	tags: Tag[];
}

export const Article: React.FC<Props> = ({ id, title, tags }) => (
	<div className="flex justify-center w-full sm:w-1/1 md:w-1/2 lg:w-1/2 xl:w-1/3 mb-4">
		<div className="flex flex-col max-w-sm rounded justify-between overflow-hidden shadow-lg">
			<img
				className="w-full h-56"
				src="https://images.unsplash.com/photo-1589002771256-0f0640d202de?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2775&q=80"
				alt="Sunset in the mountains"
			/>
			<div className="px-6 py-4">
				<div className="font-bold text-xl mb-2 ">
					<Link className="no-underline" to={`/article/${id}`}>
						{title}
					</Link>
				</div>
				<p className="text-gray-700 text-base">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!
					Maiores et perferendis eaque, exercitationem praesentium nihil.
				</p>
			</div>
			<div className="px-6 py-4">
				<Tags tags={tags} />
			</div>
		</div>
	</div>
);
