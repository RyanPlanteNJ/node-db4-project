const db = require('..data/db-config.js')

function find() {
  return db('recipes');
}

function findByID(id){
  return db('recipes')
  .where( { id })
}

function findInstructions(id){
  return db('recipes as  r')
  .where('r.id', id)
  .join('steps as s', 's.recipes_id', 'r.id')
  .select('s.instruction as Instructions', 's.step as StepOrder')
  .orderBy('s.step', asc)
}

function findIngredients(id) {
  return db('recipe_ingredients as ri')
  .where('ri.recipe_id', id)
  .join('ingredients as i', 'i.id','ri.ingredient_id')
  .select('recipes.name as Recipe')
}

module.expors = {
  find,
  findById,
  findInstructions,
  findIngredients
}
