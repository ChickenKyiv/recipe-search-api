'use strict';

const raven   = require('raven');
const _       = require('underscore');

raven.config('https://c1e3b55e6a1a4723b9cae2eb9ce56f2e:57e853a74f0e4db98e69a9cf034edcdd@sentry.io/265540').install();


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



    Recipe.biggestSearchMethodEver = function(a,b, cb){

    console.log(a);
console.log(b);

    var Ingredient = Recipe.app.models.Ingredient;
     // raven.captureException(e);
    // we assume that we're have departmentId array. maybe we need to have 1-to-1 relation
    // departmentId: { inq:departmentId } //we assume that we're have departmentId array. maybe we need to have 1-to-1 relation

    Ingredient.find({
        // where:{
        //   departmentId: departmentId 
    
        // },
        // fields: [
        //   // 'img', 'url',

        //   ]       
      }, cb);
    };


    Recipe.remoteMethod('biggestSearchMethodEver', {
        accepts: [
            {
              arg: 'inginc',
              type: 'string',
              required: false
            },
            {
              arg: 'ingex',
              type: 'string',
              required: false
            }
           // ,
            // {
            //   arg: 'inginc',
            //   type: 'string',
            //   required: false
            // },
            // {
            //   arg: 'inginc',
            //   type: 'string',
            //   required: false
            // },
            // {
            //   arg: 'inginc',
            //   type: 'string',
            //   required: false
            // },
            // {
            //   arg: 'inginc',
            //   type: 'string',
            //   required: false
            // },
            // {
            //   arg: 'inginc',
            //   type: 'string',
            //   required: false
            // },
            // {
            //   arg: 'inginc',
            //   type: 'string',
            //   required: false
            // },
            // {
            //   arg: 'inginc',
            //   type: 'string',
            //   required: false
            // }


        ]
        ,
        returns: {
          arg: 'information',
          type: 'array'
        },
        http: {
          path: '/search/',
          verb: 'get'
        }
      });





};
