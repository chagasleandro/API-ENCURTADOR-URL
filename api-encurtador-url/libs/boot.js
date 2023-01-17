module.exports = app => {
	app.db.sequelize.sync().done(() => {
		app.listen(app.get("port"), () => {
			console.log('API - Encurtador de Urls - porta ' + app.get("port"));
		});
	});
}