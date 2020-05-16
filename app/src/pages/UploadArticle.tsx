import * as React from "react";
import { useMutation } from "react-apollo";

import { UPLOAD_ARTICLE } from "../queries";
import { Button } from "../components/Button";
import { Link } from "react-router-dom";

export const UploadArticle = () => {
	const [uploadArticle] = useMutation(UPLOAD_ARTICLE);

	const onChange = ({ target: { files, validity } }: React.ChangeEvent<HTMLInputElement>) => {
		const file = files && files[0];

		if (file && validity.valid) {
			uploadArticle({ variables: { file } });
		}
	};

	return (
		<div className="container p-16">
			<h1>Upload article</h1>
			<input required type="file" className="input" onChange={onChange} />
			<Button className="button ml-2">
				<Link to="/" className="no-underline">
					Go back
				</Link>
			</Button>
		</div>
	);
};
