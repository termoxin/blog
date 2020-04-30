module.exports.up = (queryInterface, DataTypes) =>
	queryInterface.createTable(
		"users",
		{
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: DataTypes.INTEGER.UNSIGNED,
			},
			username: {
				allowNull: false,
				type: DataTypes.STRING,
			},
			password: {
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
			deletedAt: {
				allowNull: true,
				type: DataTypes.DATE,
			},
		},
		{
			charset: "utf8",
		}
	);

module.exports.down = (queryInterface) => queryInterface.dropTable("users");
