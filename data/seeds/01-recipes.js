exports.seed = async function (knex) {
  await knex('recipes').insert([
    { name: "Steak Tartar" },
    { name: "Smash Burger w/ Garlic Aioli" },
    { name: "Lobster Tail w/ Truffle Butter" },
    { name: "Rattouille" }
  ])
}
