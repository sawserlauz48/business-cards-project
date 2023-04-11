import Joi from "joi";

import validation from "./validation";

const registerSchema = Joi.object({
    firstName: Joi.string().min(2).max(100).required(),
    middleName: Joi.string().min(2).max(100).required(),
    lastName: Joi.string().min(2).max(100).required(),
    phone: Joi.string().pattern(new RegExp("^\\+?(972|0)(\\-)?0?(([23489]{1}\\d{7})|[5]{1}\\d{8})$")).min(7).max(14).required(),
    email: Joi.string().email({ tlds: { allow: false } }).required(),
    password: Joi.string()
        .pattern(new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{0,}$"))
        .min(8)
        .max(16)
        .required(),
    imageUrl: Joi.string().min(2).required(),
    imageAlt: Joi.string().min(2).required(),
    state: Joi.string().min(2).max(20).required(),
    country: Joi.string().min(2).max(20).required(),
    city: Joi.string().min(2).max(20).required(),
    street: Joi.string().min(2).max(50).required(),
    houseNumber: Joi.string().min(1).max(20).required(),
    zip: Joi.number().min(5).max(20).required(),
    biz: Joi.boolean(),
});

const validateRegisterSchema = (userInput) =>
    validation(registerSchema, userInput);

export default validateRegisterSchema;
