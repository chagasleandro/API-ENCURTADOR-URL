var crypto = require('crypto');

module.exports = app => {
	const Users = app.db.models.Users;
	app.get("/users/:id/stats", (req, res) => {
		Users.findById(req.params.id, {
			attributes: ["id"]
		})
		.then(result => res.json(result))
		.catch(error => {
			res.status(412).json({msg: error.message});
		});
	});

	app.delete("/users/:userId", (req, res) => {
	Users.destroy({where: {userId: req.params.userId} })
		.then(result => res.sendStatus(204))
		.catch(error => {
			res.status(412).json({msg: error.message});
		});
	});

	app.post("/users", (req, res) => {
		Users.create(req.body)
			.then(result => res.json(result))
			.catch(error => {
				res.status(412).json({msg: error.message});
			})
	});

	app.post("/users/:userId/urls", (req, res) => {
		req.body.url;//url
		req.originalUrl.split("/")[2];//userId
		console.log(req.body.url);

	/*	Users.create(req.body)
			.then(result => res.json(result))
			.catch(error => {
				res.status(412).json({msg: error.message});
			})
			*/	
		});
};