import { Joi, celebrate, Segments } from 'celebrate';

export default {
  store: celebrate({
    [Segments.BODY]: Joi.object().keys({
      barcode: Joi.string().required(),
      classification: Joi.string().required(),
      description: Joi.string().required().min(10),
      provider: Joi.string().required(),
      observation: Joi.string().required(),
      emission_at: Joi.date().required(),
      expire_at: Joi.date().required(),
      value: Joi.number().required(),
    }),
  }),
};
