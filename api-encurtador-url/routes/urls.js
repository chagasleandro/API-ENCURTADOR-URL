module.exports = app => {
	const Urls = app.db.models.Urls;
	app.route("/urls")
		.get((req, res) => {
		// "/urls": Lista urls
			Urls.findAll({})
				.then(result => res.json(result))
				.catch(error => {
				res.status(412).json({msg: error.message});
			});
		})
		.post((req, res) => {
		// "/urls": Cadastra uma nova url
			Urls.create(req.body)
				.then(result => res.json(result))
				.catch(error => {
				res.status(412).json({msg: error.message});
			});
		});

	app.route("/urls/:id")
		.get((req, res) => {
		// "/urls/1": Consulta uma url
		Urls.findOne({where: req.params})
			.then(result => {
				if (result) {
					res.json(result);
				} else {
					res.sendStatus(404);
				}
			})
			.catch(error => {
				res.status(412).json({msg: error.message});
				});
			})
		.put((req, res) => {
		// "/urls/1": Atualiza uma url
		Urls.update(req.body, {where: req.params})
			.then(result => res.sendStatus(204))
			.catch(error => {
				res.status(412).json({msg: error.message});
			});
		})
		.delete((req, res) => {
		// "/urls/1": Exclui uma url
		Urls.destroy({where: req.params})
			.then(result => res.sendStatus(204))
			.catch(error => {
				res.status(412).json({msg: error.message});
			});
		});
};