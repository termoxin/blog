import { SchemaDirectiveVisitor, ForbiddenError } from "apollo-server";
import { defaultFieldResolver, GraphQLField } from "graphql";

class isAuthenticated extends SchemaDirectiveVisitor {
	visitFieldDefinition(field: GraphQLField<any, any>) {
		const { resolve = defaultFieldResolver } = field;

		field.resolve = async (...args) => {
			if (!args[2].username) {
				throw new ForbiddenError("You are not authorized for this resource.");
			}

			return resolve.apply(this, args);
		};
	}
}

export default { isAuthenticated };
