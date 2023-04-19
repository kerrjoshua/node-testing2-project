

function validateGuitar(req, res, next) {
    const { guitar_color,
        model_name,
        brand_name }
        = req.body;
    if (
        !guitar_color ||
        typeof (guitar_color) != 'string' ||
        guitar_color.trim().length < 3
    ) {
        next({
            status: 400,
            message: 'Guitar color must be 3 or more chars.'
        })
    }
    else if (
        !model_name ||
        typeof (model_name) != 'string' ||
        model_name.trim().length < 1
    ) {
        next({
            status: 400,
            message: 'Guitar must have a model name.'
        })
    }
    else if (
        !brand_name ||
        typeof (brand_name) != 'string' ||
        brand_name.trim().length < 1
    ) {
        next({
            status: 400,
            message: 'Guitar must have a brand name.'
        })
    }
    else {
        req.guitar = { guitar_color, model_name, brand_name }
        next()
    }
}

module.exports = {
    validateGuitar,
}