console.log('models/customer is loaded');
module.exports = function(sequelize, DataTypes){
	var Customer = sequelize.define("Customer", {
		customer_name: {
			type: DataTypes.STRING
		}
	});

	return Customer;
};