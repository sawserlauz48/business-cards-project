// import Joi from "joi";

// import validation from "./validation";

// const registerSchema = Joi.object({
//   firstName: Joi.string().min(2).max(100).required(),
//   middleName: Joi.string().min(2).max(100).allow(""),
//   lastName: Joi.string().min(2).max(100).required(),
//   imageUrl: Joi.string().min(2).allow(""),
//   imageAlt: Joi.string().min(2).allow(""),
//   state: Joi.string().min(2).max(20).allow(""),
//   country: Joi.string().min(2).max(20).required(),
//   city: Joi.string().min(2).max(20).required(),
//   street: Joi.string().min(2).max(50).required(),
//   houseNumber: Joi.string().min(1).max(20).required(),
//   zip: Joi.number().min(5).max(20).allow(""),
//   biz: Joi.boolean(),
//   phone: Joi.string()
//     .pattern(
//       new RegExp("^\\+?(972|0)(\\-)?0?(([23489]{1}\\d{7})|[5]{1}\\d{8})$")
//     )
//     .min(7)
//     .max(14)
//     .required(),
//   email: Joi.string()
//     .email({ tlds: { allow: false } })
//     .required(),
//   password: Joi.string()
//     .pattern(
//       new RegExp(
//         "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{0,}$"
//       )
//     )
//     .min(8)
//     .max(16)
//     .required(),
// });

// const validateRegisterSchema = (userInput) =>
//   validation(registerSchema, userInput);

// export default validateRegisterSchema;

import Joi from "joi";

import validation from "./validation";

const registerSchema = Joi.object({
  firstName: Joi.string().min(2).max(100).required(),
  middleName: Joi.string().min(2).max(100),
  lastName: Joi.string().min(2).max(100).required(),
  phone: Joi.string().min(2).max(100).required(),
  country: Joi.string().min(2).max(100).required(),
  city: Joi.string().min(2).max(100).required(),
  street: Joi.string().min(2).max(100).required(),
  state: Joi.string().min(2).max(100),
  imageUrl: Joi.string().min(2).max(100),
  imageAlt: Joi.string().min(2).max(100),
  houseNumber: Joi.string().min(2).max(100).required(),
  zip: Joi.number().min(2).max(999999),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  password: Joi.string()
    .pattern(
      new RegExp(
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{0,}$"
      )
    )
    .min(2)
    .max(10)
    .required(),
});

const validateRegisterSchema = (userInput) =>
  validation(registerSchema, userInput);

export default validateRegisterSchema;
