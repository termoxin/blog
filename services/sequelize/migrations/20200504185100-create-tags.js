module.exports.up = (queryInterface, DataTypes) =>
	queryInterface.createTable(
		"tags",
		{
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: DataTypes.INTEGER.UNSIGNED,
			},
			tagName: {
				allowNull: false,
				type: DataTypes.STRING,
				unique: true,
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

module.exports.down = (queryInterface) => queryInterface.dropTable("tags");
