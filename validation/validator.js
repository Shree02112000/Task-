const Joi = require("joi")
const bodyParamValidation = (req, res, next, schama) => {
    let schema = schama;
    let option = options.basic;
    let { error } = schema.validate(req.body, option);
    if (error && Object.keys(error).length > 0) {
        joierrors(
            req,
            res,
            statusCodes.HTTP_BAD_REQUEST,
            statusMessage[400],
            error
        );
    } else {
        next();
    }
};
const queryParamValidation = (req, res, next, schama) => {
    let schema = schama;
    let option = options.basic;
    let { error} = schema.validate(req.query, option);
    if (error && Object.keys(error).length > 0) {
        joierrors(
            req,
            res,
            statusCodes.HTTP_BAD_REQUEST,
            statusMessage[400],
            error
        );
    } else {
        if (req.bodyParam) return;
        else next();
    }
};
module.exports = {
    bodyParamValidation,
    queryParamValidation
};