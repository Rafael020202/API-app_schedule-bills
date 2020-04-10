import { Router } from 'express';
import multer from 'multer';
import { errors } from 'celebrate';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import BillController from './app/controllers/BillController';
import FileController from './app/controllers/FileController';
import multerConfig from './config/multer';
import authMiddleware from './app/middlewares/auth';
import BillValidation from './app/validations/Bill';
import UserValidation from './app/validations/User';
import SessionValidation from './app/validations/Session';

const routes = Router();
const update = multer(multerConfig);

routes.post('/users', UserValidation.store, UserController.store);
routes.post('/session', SessionValidation.store, SessionController.store);

routes.use(authMiddleware);

routes.get('/users', UserController.find);
routes.put('/users', UserValidation.update, UserController.update);

routes.post('/bills', BillValidation.store, BillController.store);
routes.put('/bills/:id', BillValidation.store, BillController.update);
routes.get('/bills', BillController.index);
routes.get('/bills/:id', BillController.find);
routes.delete('/bills/:id', BillController.delete);

routes.post('/files', update.single('file'), FileController.store);

routes.use(errors());

export default routes;
