import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow as theme } from "react-syntax-highlighter/dist/esm/styles/prism";

export class CodeBlock extends PureComponent {
	static propTypes = {
		value: PropTypes.string.isRequired,
		language: PropTypes.string
	};

	static defaultProps = {
		language: null
	};

	render() {
		const { language, value } = this.props as any;

		return (
			<SyntaxHighlighter language={language} style={theme}>
				{value}
			</SyntaxHighlighter>
		);
	}
}
