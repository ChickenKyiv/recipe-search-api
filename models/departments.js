'use strict';

module.exports = function(Department) {
	// Department.validatesPresenceOf(
  //   'name'
	// 	//, 'items'
  // );

	Department.observe('update', function(ctx, next){
		ctx.instance.updated_at = new Date();
		next();
	});

    Department.observe("before save", function updateTimestamp(ctx, next) {

    if( ctx.isNewInstance ){
      ctx.instance.created_at = new Date();
      ctx.instance.updated_at = new Date();
    }



    next();
  });










};
