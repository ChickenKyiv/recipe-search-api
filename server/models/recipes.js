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



    Recipe.biggestSearchMethodEver = (
        ingInc,
        ingEx,
        allergiesInc,
        cuisinesInc, 
        cuisinesEx, 
        coursesInc, 
        coursesEx, holidaysInc, holidaysEx, cb ) => {

    console.log(ingInc);
    console.log(ingEx);
    console.log(allergiesInc);
    console.log(cuisinesInc);
    console.log(cuisinesEx);
    console.log(coursesInc);
    console.log(coursesEx);
    console.log(holidaysInc);
    console.log(holidaysEx);

ingInc = JSON.parse("[" + ingInc + "]");
ingEx  = JSON.parse("[" + ingEx + "]");

allergiesInc = JSON.parse("[" + allergiesInc + "]");

cuisinesInc  = JSON.parse("[" + cuisinesInc + "]");
cuisinesEx   = JSON.parse("[" + cuisinesEx + "]");

coursesInc   = JSON.parse("[" + coursesInc + "]");
coursesEx    = JSON.parse("[" + coursesEx + "]");

holidaysInc  = JSON.parse("[" + holidaysInc + "]");
holidaysEx   = JSON.parse("[" + holidaysEx + "]");

 console.log(ingInc);
console.log(ingEx);
 console.log(allergiesInc);
console.log(cuisinesInc);
console.log(cuisinesEx);
console.log(coursesInc);
console.log(coursesEx);
console.log(holidaysInc);
console.log(holidaysEx);

var whereObject = {

};

let ingInc_query, 
    ingEx_query, 
    allergiesInc_query, 
    cuisinesInc_query, 
    cuisinesEx_query,  
    coursesInc_query, 
    coursesEx_query, 
    holidaysInc_query, 
    holidaysEx_query;

    // @TODO test if we pass 0 as id.
    if ( ingInc ) {
        
    }
    if ( ingEx ) {
        
    }
    if ( allergiesInc ) {
        
    }
    if ( cuisinesInc ) {
        
    }
    if ( cuisinesEx ) {
        
    }
    if ( coursesInc ) {
        
    }
    if ( coursesEx ) {
        
    }
    if ( holidaysInc ) {
        
    }
    if ( holidaysEx ) {
        
    }

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
