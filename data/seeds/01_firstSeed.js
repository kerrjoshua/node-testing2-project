
exports.seed = async function (knex) {
  await knex('guitars').truncate()
  await knex('models').truncate()
  await knex('brands').truncate()
  await knex('brands').insert([
    { brand_name: 'Gibson' },
    { brand_name: 'Fender' },
  ])
  await knex('models').insert([
    {
      model_name: 'Les Paul',
      brand_id: 1
    },
    {
      model_name: 'SG',
      brand_id: 1,
    },
    {
      model_name: 'Telecaster',
      brand_id: 2,
    },
    {
      model_name: 'Stratocaster',
      brand_id: 2,
    }
  ])
  await knex('guitars').insert([
    {
      model_id: 1,
      guitar_color: 'black'
    },
    {
      model_id: 3,
      guitar_color: 'cherry-burst'
    }
  ])
};
