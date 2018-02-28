'use strict';

module.exports = function(Recipe) {

	Recipe.validatesPresenceOf(
		'img',
        // 'url',
         'title',
         // 'ingredients',
		'directions', 'prep_time', 'total_time',
		'recipe_yield'
		);

    Recipe.observe("before save", function updateTimestamp(ctx, next) {

    	if( ctx.isNewInstance ){
    		ctx.instance.created_at = new Date();
    		ctx.instance.updated_at = new Date();
    	}



    	next();
    });

    Recipe.observe('update', function(ctx, next){
        ctx.instance.updated_at = new Date();
        next();
    });



    Recipe.biggestSearchMethodEver = function(options, cb){

    console.log(options);

    var Ingredient = Recipe.app.models.Ingredient;

    // we assume that we're have departmentId array. maybe we need to have 1-to-1 relation
    // departmentId: { inq:departmentId } //we assume that we're have departmentId array. maybe we need to have 1-to-1 relation

    // Ingredient.find({
    //     where:{
    //       departmentId: departmentId 
    
    //     },
    //     fields: [
    //       // 'img', 'url',

    //       ]       
    //   },cb);

    Recipe.remoteMethod('biggestSearchMethodEver', {
        accepts: //[]
        {
          arg: 'ing',
          type: 'string',
          required: true
        },
        // returns: {
        //   arg: 'information',
        //   type: 'array'
        // },
        http: {
          path: '/inginc/',
          verb: 'get'
        }
      });


  };


};
