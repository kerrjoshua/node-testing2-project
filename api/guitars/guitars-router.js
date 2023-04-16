const router = require("express").Router();
const Guitar = require('./guitars-model');

router.get('/', (req, res, next) => {
    Guitar.find()
        .then( guitars => {
            res.json(guitars)
        })
        .catch(next)
})

module.exports = router