import * as React from "react";
import { useMutation } from "react-apollo";

import { UPLOAD_ARTICLE } from "../queries";

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
		</div>
	);
};
