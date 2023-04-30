import Joi from "joi";

import validation from "./validation";

const creatCardSchema = Joi.object({
  title: Joi.string().min(2).max(100).label("Title").required(),
  subTitle: Joi.string().min(2).max(100).label("Subtitle").required(),
  description: Joi.string().min(2).max(255).label("Description").required(),
  phone: Joi.string().min(2).max(100).label("Phone").required(),
  country: Joi.string().min(2).max(100).label("Country").required(),
  city: Joi.string().min(2).max(100).label("City").required(),
  houseNumber: Joi.string().min(1).max(100).label("House number").required(),
  street: Joi.string().min(2).max(100).label("Street").required(),
  imageUrl: Joi.string().min(2).max(500).label("Image Url").allow(""),
  imageAlt: Joi.string().min(2).max(100).label("Image Alt").allow(""),
  state: Joi.string().min(2).max(100).label("State").allow(""),
  zipCode: Joi.number().min(2).max(99999).label("Zip code").allow(""),
  web: Joi.number().min(2).max(99999).label("Web").allow(""),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .label("E-mail")
    .required(),
});

const validateCreatCardSchema = (userInput) =>
  validation(creatCardSchema, userInput);

export default validateCreatCardSchema;
