var db = require("../models");

const controller = function() {

	this.getAllBurgers = function(req, res){
		db.Burger.findAll({

		}).then(function(data){
			var hbObj = {
				burgers: data
			};
			res.render("index", hbObj);		
		});
	};

  this.createBurger = function(req, res){
    db.Burger.create(req.body).then(function(data){
	      res.json(data);
	      console.log(data.id);
    	});
  	};

  this.devourBurger = function(req, res){
  	db.Burger.update(
  		req.body,
  		{
  			where: {
  				id: req.params.id
  			}
  		}).then(function(data){
  			res.json(data);
  		});
  	};

  	return this;
};

module.exports = controller;