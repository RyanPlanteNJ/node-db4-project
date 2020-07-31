const router = require('express').Router()
const Recipes =  require('./recipes-model.js')

router.get('/', async (req, res, next) => {
  try{
    const recipes = await Recipes.find()
    res.json(recipes)
  } catch (error) {
    next (error)
  }
})

router.get('/:id', async (req, res, next) => {
  try{
    const recipe = await Recipes.findById(req.params.id)
    res.json(recipe)
  } catch (error) {
    next (error)
  }
})

router.get('/:id/instructions', async (req, res next) => {
  try {
    const instructions = await Recipe.findInstructions(req.params.id)
    res.json(instructions)
  } catch (error) {
    next (error)
  }
})

router.get('/:id/shoppinglist', async(req, res, next) => {
  try {
    const list = await Recipe.findShoppingList(req.params.id)
    res.json(list)
  } catch (error) {
    next (error)
  }
})

module.exports = router
