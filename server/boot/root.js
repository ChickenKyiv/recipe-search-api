'use strict';

module.exports = function(server) {
  // Install a `/` route that returns server status
  var router = server.loopback.Router();
  router.get('/', server.loopback.status());

  router.get('/ziza', function(req, res, next){

		// var ingredientId = req.params.id;
		// var groceryId = req.params.groceryId;
		
		var Ing   = app.models.Ingredient;
		Ing.find({
			where: 
				{
					or: [
						"name": {
							"like": "oil"
						},
						"name": {
							"like": "apple"
						}
					]
				}
			}
			// {
			// 		and: [
			// 			"name": {
			// 				"like": "oil"
			// 			},
			// 			"name": {
			// 				"like": "apple"
			// 			}
			// 		]
			// 	}
			// }
		});
		


		// .findById(departmentId, {}, function(err, model){
		//   model.updateAttribute('visible', false);
		// });
	});


  server.use(router);
};
