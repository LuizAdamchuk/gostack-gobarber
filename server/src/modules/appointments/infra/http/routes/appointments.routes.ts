import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import { ensureAuthenticated } from '@shared/infra/http/middlewares/ensurenceAuthenticated';
import { AppointmentsController } from '@modules/appointments/infra/http/controllers/AppointmentsController';
import { ProviderAppointmentsController } from '@modules/appointments/infra/http/controllers/ProviderAppointmentsController';

export const appointmentsRoutes = Router();
const appointmentsController = new AppointmentsController();
const providerAppointmentsController = new ProviderAppointmentsController();

appointmentsRoutes.use(ensureAuthenticated);

appointmentsRoutes.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      provider_id: Joi.string().uuid().required(),
      date: Joi.date(),
    },
  }),
  appointmentsController.create,
);

appointmentsRoutes.get('/me', providerAppointmentsController.index);
