const db = require('../../data/db.config');

exports.find = async function find() {
    const guitars = await db('guitars as g')
        .select('guitar_id', 'model_name', 'brand_name', 'guitar_color')
        .join('models as m', 'm.model_id', 'g.model_id')
        .join('brands as b', 'b.brand_id', 'm.brand_id')
        .orderBy('guitar_id')
        return guitars
}

exports.post = async function post( guitar ) {
    let guitar_to_add = { guitar_color: guitar.guitar_color }
    

    const [model] = await db('models').where('model_name', guitar.model_name)

    const model_id = model.model_id

    guitar_to_add.model_id = model_id;

    const [guitar_id] = await db('guitars').insert(guitar_to_add)

    return await db('guitars').where('guitar_id', guitar_id).first();

}