const joi = require('@hapi/joi');

const newBlogValidationSchema = joi.object({
    author: joi.string().required().trim(),
    title: joi.string().required().trim(),
    body: joi.string().required().trim()
})

module.exports = newBlogValidationSchema;