const router = require('express').Router()
const Recipes = require('./recipes-router')

router.get('/:id/recipes', async (req, res, next) => {
  try {
    const recipes = await Recipes.findByIngredients(req.params.id)
    res.json(recipes)
  } catch (error) {
    next(error)
  }
})

module.exports = router;
