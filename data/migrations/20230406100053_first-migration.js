
exports.up = function(knex) {
    return knex.schema
    .createTable('brands', brands => {
        brands.increments('brand_id')
        brands.string('brand_name').notNullable().unique()
    })
    .createTable('models', models => {
        models.increments('model_id')
        models.string('model_name')
        models.integer('brand_id')
            .notNullable()
            .unsigned()
            .references('brand_id')
            .inTable('brands')
    })
    .createTable('guitars', guitars => {
        guitars.increments('guitar_id')
        guitars.integer('model_id')
            .notNullable()
            .unsigned()
            .references('model_id')
            .inTable('models')
        guitars.string('guitar_color')
            .notNullable()
            
        
    })
  
};

exports.down = function(knex) {
  
};
