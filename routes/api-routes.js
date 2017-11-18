var burgers_controllers = require("../controllers/burgers_controllers")();

module.exports = function(app){

	app.get('/', burgers_controllers.getAllBurgers);

	app.post('/api/burgers', burgers_controllers.createBurger);

	app.put('/api/burgers/:id', burgers_controllers.devourBurger);

}