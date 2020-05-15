import {
	Model,
	Table,
	Column,
	DataType,
	HasMany,
	ForeignKey,
	BelongsTo,
	BelongsToMany,
} from "sequelize-typescript";

@Table({
	defaultScope: {
		attributes: { exclude: ["deletedAt"] },
	},
	paranoid: true,
	tableName: "chefs",
})
export class Chef extends Model<Chef> {
	@Column({
		allowNull: false,
		autoIncrement: true,
		primaryKey: true,
		type: DataType.INTEGER.UNSIGNED,
	})
	id!: string;

	@Column({
		allowNull: false,
		type: DataType.STRING,
	})
	name!: string;

	@HasMany(() => Restaurant)
	restaurants!: Restaurant[];
}

@Table({
	defaultScope: {
		attributes: { exclude: ["deletedAt"] },
	},
	paranoid: true,
	tableName: "restaurants",
})
export class Restaurant extends Model<Restaurant> {
	@Column({
		allowNull: false,
		autoIncrement: true,
		primaryKey: true,
		type: DataType.INTEGER.UNSIGNED,
	})
	id!: string;

	@Column({
		allowNull: false,
		type: DataType.STRING,
	})
	@ForeignKey(() => Chef)
	chefId!: string;

	@Column({
		allowNull: false,
		type: DataType.STRING,
	})
	name!: string;

	@BelongsTo(() => Chef)
	chef!: Chef;
}

@Table({
	defaultScope: {
		attributes: { exclude: ["deletedAt"] },
	},
	paranoid: true,
	tableName: "users",
})
export class User extends Model<User> {
	@Column({
		allowNull: false,
		autoIncrement: true,
		primaryKey: true,
		type: DataType.INTEGER.UNSIGNED,
	})
	id!: string;

	@Column({
		allowNull: false,
		type: DataType.STRING,
	})
	username!: string;

	@Column({
		allowNull: false,
		type: DataType.STRING,
	})
	password!: string;
}

@Table({
	defaultScope: {
		attributes: { exclude: ["deletedAt"] },
	},
	paranoid: true,
	tableName: "articles",
})
export class Article extends Model<Article> {
	@Column
	title!: string;

	@Column
	text!: string;

	@BelongsToMany(() => Tag, () => ArticleTag)
	tags!: Tag[];
}

@Table({
	defaultScope: {
		attributes: { exclude: ["deletedAt"] },
	},
	paranoid: true,
	tableName: "tags",
})
export class Tag extends Model<Tag> {
	@Column
	tagName!: string;

	@BelongsToMany(() => Article, () => ArticleTag)
	articles!: Article[];
}

@Table({
	tableName: "articleTags",
})
export class ArticleTag extends Model<ArticleTag> {
	@ForeignKey(() => Article)
	@Column
	articleId!: number;

	@ForeignKey(() => Tag)
	@Column
	tagId!: number;
}

export default [Chef, Restaurant, User, Article, Tag, ArticleTag];
