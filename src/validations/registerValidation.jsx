import Joi from "joi";

import validation from "./validation";

const registerSchema = Joi.object({
  firstName: Joi.string().min(2).max(100).required(),
  lastName: Joi.string().min(2).max(100).required(),
  phone: Joi.string().min(2).max(100).required(),
  country: Joi.string().min(2).max(100).required(),
  city: Joi.string().min(2).max(100).required(),
  houseNumber: Joi.string().min(2).max(100).required(),
  street: Joi.string().min(2).max(100).required(),
  middleName: Joi.string().min(2).max(100).allow(""),
  imageUrl: Joi.string().min(2).max(100).allow(""),
  imageAlt: Joi.string().min(2).max(100).allow(""),
  state: Joi.string().min(2).max(100).allow(""),
  zipCode: Joi.number().min(2).max(99999).allow(""),
  biz: Joi.bool(),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  password: Joi.string()
    .pattern(new RegExp("^(?=.*[A-Z])(?=.*[a-z]).{0,}$"))
    .min(2)
    .max(10)
    .required(),
});

const validateRegisterSchema = (userInput) =>
  validation(registerSchema, userInput);

export default validateRegisterSchema;
