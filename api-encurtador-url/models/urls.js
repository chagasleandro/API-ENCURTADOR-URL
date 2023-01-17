module.exports = (sequelize, DataType) => {
	const Urls = sequelize.define("Urls", {
		id: {
			type: DataType.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		hits: {
			type: DataType.INTEGER,
			allowNull: false,
			defaultValue: 0
		},
		url: {
			type: DataType.STRING,
			allowNull: false,
			validate: {
				notEmpty: true
			}
		},
		shortUrl: {
			type: DataType.STRING,
			allowNull: false,
			validate: {
				notEmpty: true
			}
		},
	}, {
			classMethods: {
			associate: (models) => {
				Urls.belongsTo(models.Users);
			}
		}
	});
	return Urls;
};