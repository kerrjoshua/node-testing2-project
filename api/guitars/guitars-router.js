const router = require("express").Router();
const Guitar = require('./guitars-model');
const { validateGuitar } = require('./guitars-middleware');

router.get('/', (req, res, next) => {
    Guitar.find()
        .then( guitars => {
            res.json(guitars)
        })
        .catch(next)
})

router.post('/', validateGuitar, (req, res, next) => {
    const guitar = req.guitar
    Guitar.post(guitar)
        .then( addedGuitar => {
            res.json(addedGuitar)
        })
        .catch(next)
})
module.exports = router