
exports.up = function(knex) {
    return knex.schema
    .createTable('brands', brands => {
        brands.increments('brand_id')
        brands.string('brand_name').notNullable().unique()
    })
    .createTable('models', models => {
        models.increments('model_id')
        models.string('model_name')
    })
    .createTable('guitars', guitars => {
        guitars.increments('guitar_id')
        guitars.string('guitar_name').notNullable().unique()
        guitars.integer('make_id')
            .notNullable()
            .unsigned()
            .references('make_id')
            .inTable('makes')
        guitars.string('guitar_model').notNullable()
    })
  
};

exports.down = function(knex) {
  
};
