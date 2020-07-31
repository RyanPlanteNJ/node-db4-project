
exports.seed = async function (knex) {
await knex('ingredients').insert([
  { name: "Lobster" },
  { name: "Wagyu Beef" },
  { name: "POE-TAY-TOES" }
])
}
