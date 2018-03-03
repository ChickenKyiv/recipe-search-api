
const path    = require('path');
const async   = require('async');


let server     = require(path.resolve(__dirname, '../server/server'));
// @TODO update this, cause each time i need to pass a different sources.
let database   = server.datasources.searchDS;

let Ingredient   = require(path.resolve(__dirname, 'ingredients'));
// console.log(  )


let Departments  = require(path.resolve(__dirname, 'departments'));

let options = {
	server: server,
	database: database,
	raven: raven
}


departments : async.apply(helper.create, options, Departments),

let idi = results.departments[0].id.toString();
		let ingredeieienetsData = Ingredient.get(idi);


		helper.create_with_relations(options, ingredeieienetsData, Ingredient, ( err, data ) => {
			// console.log(data)//
			Recipe.relate2( options, data, helper );

		});


const create_ingredients = async() => {
	let departo = await helper.create(options, Departments);

	console.log(departo);
	return 'pidor'
};


create_ingredients()
	.then( result => {
		console.log(result)
	})
	.catch(err => {
        raven.captureException(err);
    })



const departments = () => {
	const data = await DePARAAA();
	return _.map(data, dsdsdasdas);

	//@TODO add try catch later, why not???
};

const run_this_import_please = () => {

	await departments().then( ingredients() )
	await attributes()
	await recipes().then( attach attributes && attach ingredients )

}; 