import Joi from "joi";

import validation from "./validation";

const registerSchema = Joi.object({
  title: Joi.string().min(2).max(256).required(),
  web: Joi.string().min(5).max(256),
  subTitle: Joi.string().min(2).max(256).required(),
  phone: Joi.string().min(7).max(14).required(),
  country: Joi.string().min(2).max(256).required(),
  city: Joi.string().min(2).max(256).required(),
  street: Joi.string().min(2).max(256).required(),
  state: Joi.string().min(2).max(256),
  imageUrl: Joi.string().min(2).max(256),
  imageAlt: Joi.string().min(2).max(256),
  houseNumber: Joi.string().min(2).max(256).required(),
  zipCode: Joi.number().min(1).max(999999),
  description: Joi.string().min(2).max(256).required(),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
});

const validateRegisterSchema = (userInput) =>
  validation(registerSchema, userInput);

export default validateRegisterSchema;
