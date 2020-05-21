import * as React from "react";
import { useQuery } from "react-apollo";

import { GET_ARTICLES } from "../queries";
import { Navigation } from "../components/Navigation";
import { Article as BlogPost } from "../components/Article";
import { Article } from "declarations";

interface QueryData {
	articles: Article[];
}

const Profile = () => {
	const { data, loading, refetch } = useQuery<QueryData>(GET_ARTICLES);

	React.useEffect(() => {
		refetch();
	}, []);

	if (loading) {
		return <h1>Loading...</h1>;
	}

	return (
		<div className="h-screen">
			<Navigation />
			<div className="flex flex-wrap pt-4">
				{data &&
					data.articles.map(({ id, tags, title }) => (
						<BlogPost id={id} key={id} title={title} tags={tags} />
					))}
			</div>
		</div>
	);
};

export default Profile;
