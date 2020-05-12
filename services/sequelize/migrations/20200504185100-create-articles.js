module.exports.up = (queryInterface, DataTypes) =>
	queryInterface.createTable(
		"articles",
		{
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: DataTypes.INTEGER.UNSIGNED,
			},
			title: {
				allowNull: false,
				type: DataTypes.STRING,
			},
			text: {
				allowNull: false,
				type: DataTypes.TEXT,
			},
			createdAt: {
				allowNull: false,
				type: DataTypes.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: DataTypes.DATE,
			},
			deletedAt: {
				allowNull: true,
				type: DataTypes.DATE,
			},
		},
		{
			charset: "utf8",
		}
	);

module.exports.down = (queryInterface) => queryInterface.dropTable("articles");
