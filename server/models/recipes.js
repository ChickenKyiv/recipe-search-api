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
        coursesEx, 
        holidaysInc, 
        holidaysEx,
        cb 
    ) => {

    // console.log(ingInc);
    // console.log(ingEx);
    // console.log(allergiesInc);
    // console.log(cuisinesInc);
    // console.log(cuisinesEx);
    // console.log(coursesInc);
    // console.log(coursesEx);
    // console.log(holidaysInc);
    // console.log(holidaysEx);




    ingInc = JSON.parse("[" + ingInc + "]");
    ingEx  = JSON.parse("[" + ingEx + "]");

    // it looks like we must exclude recipes with stated allergies.
    // so AlleriesInc must be converted into Allergiex Ex
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

    // var whereObject = {

    // };

    // let ingInc_query, 
    //     ingEx_query, 
    //     allergiesInc_query, 
    //     cuisinesInc_query, 
    //     cuisinesEx_query,  
    //     coursesInc_query, 
    //     coursesEx_query, 
    //     holidaysInc_query, 
    //     holidaysEx_query;


    let inq_array2, nin_array2;

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

    // inq_array = ingInc + cuisinesInc + coursesInc + holidaysInc ;
    
    inq_array2 = _.without( _.union(ingInc, cuisinesInc, coursesInc, holidaysInc), 0 ) ;
    console.log(inq_array2);

    // nin_array = allergiesInc + cuisinesEx + coursesEx + holidaysEx ;
    nin_array2 = _.without( _.union(allergiesInc, cuisinesEx, coursesEx, holidaysEx), 0 ) ;
    console.log(nin_array2);
    // @TODO maybe we need to check if this id's are really isset in our database.
    // raven.captureException(e);


// GroceryModel.findById(groceryId)
        // .then(function(grocery){

        //  DepartmentModel.find({
        //      where:{
        //          id: { inq:grocery.departments }
        //      },
        //      // fields: []
        //  },cb);

        // })
        // .catch(function(err){
        //  if(err){ cb(err); }
        // });

   

    // available relationships:
    // ingredientsList
    // attributesList

    Recipe.find({
        include: 'attributesList'
        // ,
        // where: {
        //     attributes: {
        //         inq: {

        //         } 

        // inq: inq_array2,
        // nin: nin_array2

        //         // ,
        //         // nin: {
                    
        //         // }
        //     }
        // }
    }, function(err, data){


        // console.log(data);
    })
    //@TODO save an URL that created at Swagger

    // Recipe.find({
    //     include: 'attributesList',
    //     where: {
    //         attributes: {
    //             inq: {

    //             } 
    //             // ,
    //             // nin: 
    //         }
    //     }
    // }, cb)


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

        ],
        returns: {
          arg: 'recipes',
          type: 'array'
        },
        http: {
          path: '/search/',
          verb: 'get'
        }
      });

    // @TODO Do we need method where we get titles, 
    // and find them at attributes, get ids and pass this ids into where statement

    Recipe.searching = (
        incuded,
        excluded,
        cb 
    ) => {


        incuded   = JSON.parse("[" + incuded + "]");
        excluded  = JSON.parse("[" + excluded + "]");

        Recipe.find({
            include: 'attributesList'
            ,
            where: {
                attributes: {

                    inq: incuded,
                    nin: excluded

                }
            }
        }, function(err, data){


            console.log(data);
        })


    };


    Recipe.remoteMethod('searching', {
        accepts: [
            {
              arg: 'attributes-included',
              type: 'string',
              required: false
            },
            {
              arg: 'attributes-excluded',
              type: 'string',
              required: false
            }
        ],
        returns: {
          arg: 'recipes',
          type: 'array'
        },
        http: {
          path: '/searching/',
          verb: 'get'
        }
      });



};
