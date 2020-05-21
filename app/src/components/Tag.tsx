import React from "react";

interface Props {
	name: string;
}

export const Tag: React.FC<Props> = ({ name }) => (
	<span className="cursor-pointer hover:text-white hover:bg-blue-500 inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 ">
		#{name}
	</span>
);
