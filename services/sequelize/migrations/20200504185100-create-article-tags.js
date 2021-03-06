module.exports.up = (queryInterface, DataTypes) =>
	queryInterface.createTable(
		"articleTags",
		{
			articleId: {
				allowNull: false,
				type: DataTypes.STRING,
			},
			tagId: {
				allowNull: false,
				type: DataTypes.STRING,
			},
			createdAt: {
				allowNull: false,
				type: DataTypes.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: DataTypes.DATE,
			},
		},
		{
			charset: "utf8",
		}
	);

module.exports.down = (queryInterface) => queryInterface.dropTable("articleTags");
