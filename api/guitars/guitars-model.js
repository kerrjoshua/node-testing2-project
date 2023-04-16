const db = require('../../data/db.config');

exports.find = async function find() {
    const guitars = await db('guitars as g')
        .select('guitar_id', 'model_name', 'brand_name', 'guitar_color')
        .join('models as m', 'm.model_id', 'g.model_id')
        .join('brands as b', 'b.brand_id', 'm.brand_id')
        .orderBy('guitar_id')
        return guitars
}