import { Joi, celebrate, Segments } from 'celebrate';

export default {
  store: celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string().required().email(),
      password: Joi.string().required().min(8),
    }),
  }),

  update: celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string(),
      email: Joi.string().email(),
      password: Joi.string().min(8),
      oldPassword: Joi.string().min(8),
    }),
  }),
};
