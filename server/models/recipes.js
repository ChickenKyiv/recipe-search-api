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



    Recipe.biggestSearchMethodEver = function(a,b,c,d,e,f,g,h,i, cb){

    console.log(a);
console.log(b);
 console.log(c);
console.log(d);

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
              arg: 'ingredient-inc',
              type: 'string',
              required: false
            },
            {
              arg: 'ingredient-ex',
              type: 'string',
              required: false
            },
            {
              arg: 'allergies-inc',
              type: 'string',
              required: false
            },
            {
              arg: 'cuisines-inc',
              type: 'string',
              required: false
            },
            {
              arg: 'cuisines-ex',
              type: 'string',
              required: false
            },
            {
              arg: 'courses-inc',
              type: 'string',
              required: false
            },
            {
              arg: 'courses-ex',
              type: 'string',
              required: false
            },
            {
              arg: 'holidays-inc',
              type: 'string',
              required: false
            },
            {
              arg: 'holidays-ex',
              type: 'string',
              required: false
            }


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
