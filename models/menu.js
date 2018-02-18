'use strict';

module.exports = function(Menu) {
	//@TODO update this, 'cause we've updated relations
	// Menu.validatesPresenceOf(
	// 	'title', 'date', 'description'
	// 	// 'recipes'
	// 	);




	Menu.observe("before save", function updateTimestamp(ctx, next) {

		if( ctx.isNewInstance ){
			ctx.instance.created_at = new Date();
			ctx.instance.updated_at = new Date();
		}
		next();
	});

	Menu.observe('update', function(ctx, next){
		ctx.instance.updated_at = new Date();
		next();
	});



};
