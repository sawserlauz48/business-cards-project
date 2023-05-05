import Joi from "joi";

import validation from "./validation";

const profileSchema = Joi.object({
  firstName: Joi.string().min(2).max(100).label("First name").required(),
  lastName: Joi.string().min(2).max(100).label("Last name").required(),
  phone: Joi.string().min(9).max(100).label("Phone").required(),
  country: Joi.string().min(2).max(100).label("Country").required(),
  city: Joi.string().min(2).max(100).label("City").required(),
  houseNumber: Joi.string().min(1).max(100).label("House number").required(),
  street: Joi.string().min(2).max(100).label("Street").required(),
  middleName: Joi.string().min(2).max(100).label("Middle name").allow(""),
  imageUrl: Joi.string().min(2).max(100).label("Image Url").allow(""),
  imageAlt: Joi.string().min(2).max(100).label("Image Alt").allow(""),
  state: Joi.string().min(2).max(100).label("State").allow(""),
  zipCode: Joi.number().min(2).max(99999).label("Zip code").allow(""),
  biz: Joi.bool(),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .label("E-mail")
    .required(),
});

const validateProfileSchema = (userInput) =>
  validation(profileSchema, userInput);

export default validateProfileSchema;
