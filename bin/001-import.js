'use strict';

const path    = require('path');
const async   = require('async');
// const debug   = require('debug');
const raven   = require('raven');
const _       = require('underscore');

raven.config('https://c1e3b55e6a1a4723b9cae2eb9ce56f2e:57e853a74f0e4db98e69a9cf034edcdd@sentry.io/265540').install();

let server     = require(path.resolve(__dirname, '../server/server'));
// @TODO update this, cause each time i need to pass a different sources.
let database   = server.datasources.searchDS;

let helper     = require(path.resolve(__dirname, '003-helper'));

// include middleware
// @todo make it auto-icludable from folder
let Attribute = require(path.resolve(__dirname, 'attributes'));

let Allergy    = require(path.resolve(__dirname, 'allergy'));
let Course     = require(path.resolve(__dirname, 'courses'));
let Cuisine    = require(path.resolve(__dirname, 'cuisines'));
let Diet       = require(path.resolve(__dirname, 'diets'));
let Holiday    = require(path.resolve(__dirname, 'holidays'));
// let Nutritions = require(path.resolve(__dirname, 'nutritions'));
// console.log(Holiday);

// @TODO remove this include and just find all recipes, stored at database.
let Recipe    = require(path.resolve(__dirname, 'recipes'));
let Ingredient= require(path.resolve(__dirname, 'ingredients'));
// console.log(  )


let Departments  = require(path.resolve(__dirname, 'departments'));

let options = {
	server: server,
	database: database,
	raven: raven,
  predata: _.union(
		Allergy.get(),
		Course.get(),
		Cuisine.get(),
		Diet.get(),
		Holiday.get(),
		// Nutritions.get()
	)
}

//@TODO think about separating predata and options array
async.parallel({

		recipes     : async.apply(helper.create, options, Recipe),
    attributes  : async.apply(helper.create, options, Attribute),
		departments : async.apply(helper.create, options, Departments),

	}, function(err, results){
		if( err ) {
			raven.captureException(err);
			throw err;

		}

		if( !results
			// || !results.allergies || !results.courses
			// 	|| !results.cuisines || !results.diets
			// 	|| !results.holidays || !results.nutritions
			// 	|| !results.recipes
			 ) {
					raven.captureException("not imported well");
		}


		// @TODO make this call less shitty
		// console.log('123');
		// console.log(results.departments[0].id.toString())
				// options.predata =
				let idi = results.departments[0].id.toString();
				// // console.log('qwe')
				// helper.create(options, Ingredient, (err, data) => {
				// 	// console.log(data);
				// });

				let ingredeieienetsData = Ingredient.get(idi);
				// console.log(ingredeieienetsData)
				// let ing

				helper.create_with_relations(options, ingredeieienetsData, Ingredient, ( err, data )=>{
					// console.log(data)//
					Recipe.relate2( options, data, helper );

				});

				// ing[1] = await helper.create(options, ingredeieienetsData[1]);
				// ing[2] = await helper.create(options, ingredeieienetsData[2]);
				// ing[3] = await helper.create(options, ingredeieienetsData[3]);
				// console.log(ing);
		// Recipe.relate( options, results, helper );


		// console.log(err);
		// console.log(results);
//
		// console.log(results.allergies);
		// console.log(results.courses);
    // console.log(results.cuisines);
    // console.log(results.diets);
    // console.log(results.holidays);
    // console.log(results.nutritions);





		console.log('import finished');
    //
		// process.on('exit', function(code) {
    // 	return console.log(`About to exit with code ${code}`);
		// });
		// process.exit(22);

	}

);
