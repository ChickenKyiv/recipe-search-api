
const path    = require('path');
const async   = require('async');
const raven   = require('raven');
const _       = require('underscore');

raven.config('https://c1e3b55e6a1a4723b9cae2eb9ce56f2e:57e853a74f0e4db98e69a9cf034edcdd@sentry.io/265540').install();
// console.log(raven)

let server     = require(path.resolve(__dirname, '../server/server'));
// @TODO update this, cause each time i need to pass a different sources.
let database   = server.datasources.searchDS;

let helper     = require(path.resolve(__dirname, '003-helper'));


let Ingredient   = require(path.resolve(__dirname, 'ingredients'));
// console.log(  )


let Departments  = require(path.resolve(__dirname, 'departments'));

// // @todo make it auto-icludable from folder
// let Attribute = require(path.resolve(__dirname, 'attributes'));

// //@TODO move that to attribute wrapper
// let Allergy    = require(path.resolve(__dirname, 'allergy'));
// let Course     = require(path.resolve(__dirname, 'courses'));
// let Cuisine    = require(path.resolve(__dirname, 'cuisines'));
// let Diet       = require(path.resolve(__dirname, 'diets'));
// let Holiday    = require(path.resolve(__dirname, 'holidays'));




// console.log(options.raven)
// departments : async.apply(helper.create, options, Departments),

// let idi = results.departments[0].id.toString();
// let ingredeieienetsData = Ingredient.get(idi);


// helper.create_with_relations(options, ingredeieienetsData, Ingredient, ( err, data ) => {
// 	// console.log(data)//
// 	Recipe.relate2( options, data, helper );

// });

// _.union(
// 		Allergy.get(),
// 		Course.get(),
// 		Cuisine.get(),
// 		Diet.get(),
// 		Holiday.get(),
// 		// Nutritions.get()
// 	)
	let options = {
		server: server,
		database: database,
		raven: raven
	}

// const create_ingredients = async() => {
// 	let departo = await helper.create(options, Departments, true);

// 	console.log(departo);
// 	return 'pidor';
// };

const create_departments = async(options) => {
	// console.log(options)
	return await helper.create(options, Departments);

	// console.log(departo);
	// return 'pidor2';
};

// const create_recipes = async() => {

// 	let recipes = await helper.create(options, true, Recipe);

// };

// const create_attributes = async() => {
// 	let attributes = await helper.create(options, true, Recipe);
// };
// create_ingredients()
// 	.then( result => {
// 		console.log(result)

// 	})
// 	.catch(err => {
//         raven.captureException(err);
//     })



// const departments = () => {
// 	const data = await DePARAAA();
// 	return _.map(data, dsdsdasdas);

// 	//@TODO add try catch later, why not???
// };
options => async
async () run_this_import_please = async(options) => {


	// await departments().then( ingredients() )
	// console.log('13')
	await create_departments(options).then( result => console.log(result) )
	// await attributes()
	// await recipes().then( attach attributes && attach ingredients )

}; 



run_this_import_please(options)

// async function startApp() {
//   try {
//     await oracledb.createPool(dbConfig);
//     let emp = await employees.getEmployee(101);
//     console.log(emp);
//   } catch (err) {
//     console.log('Opps, an error occurred', err);
//   }
// }
// startApp();