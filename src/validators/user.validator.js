import Joi from '@hapi/joi';

//registration validator
export const newUserValidator = (req, res, next) => {
  const schema = Joi.object({
    firstname: Joi.string().min(4).required(),
    lastname: Joi.string().min(4).required(),
    email: Joi.string().required().email(),
    password: Joi.string().required().min(5)
  });
  const { error } = schema.validate(req.body);
  if (error) {
    next(error);
  } else {
    next();
  }
};

//login validator
export const LoginValidator = (req, res, next) => {
  const schema = Joi.object({
    email: Joi.string().required().email(),
    password: Joi.string().required().min(5)
  });
  const { error } = schema.validate(req.body);
  if (error) {
    next(error);
  } else {
    next();
  }
};