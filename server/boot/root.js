'use strict';

module.exports = function(server) {
  // Install a `/` route that returns server status
  var router = server.loopback.Router();
  router.get('/', server.loopback.status());



  router.get('/ziza', function(req, res, next){

		// var ingredientId = req.params.id;
		// var groceryId = req.params.groceryId;
		console.log('222')
		var Recipe   = server.models.Recipe;
		Recipe.find({
			include: 'ingredientsList',
			scope: { // further filter the owner object
   			   fields: ['name', 'description']
  			}
		}, (err, data) => {
			console.log(data);
		})
		// Ing.find({
		// 	where: 
		// 		{
		// 			or: [
		// 				"name": {
		// 					"like": "oil"
		// 				},
		// 				"name": {
		// 					"like": "apple"
		// 				}
		// 			]
		// 		}
		// 	}
		// 	// {
		// 	// 		and: [
		// 	// 			"name": {
		// 	// 				"like": "oil"
		// 	// 			},
		// 	// 			"name": {
		// 	// 				"like": "apple"
		// 	// 			}
		// 	// 		]
		// 	// 	}
		// 	// }
		// });
		


		// .findById(departmentId, {}, function(err, model){
		//   model.updateAttribute('visible', false);
		// });
	});



  server.use(router);
};
