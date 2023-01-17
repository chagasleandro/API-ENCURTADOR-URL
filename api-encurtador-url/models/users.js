module.exports = (sequelize, DataType) => {
	const Users = sequelize.define("Users", {
		id: {
			type: DataType.STRING,
			primaryKey: true,
			unique: true,
			validate: {
				notEmpty: true
			}
		}
	}, {
			classMethods: {
			associate: (models) => {
				Users.hasMany(models.Urls);
			}
		}
	});
	return Users;
};