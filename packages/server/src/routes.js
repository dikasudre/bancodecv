import { Router } from 'express';
import CandidateController from './app/controller/CandidateController';
import validateValidaCpf from './app/validators/ValidaCpf';

const routes = new Router();

routes.post('/candidates', validateValidaCpf, CandidateController.store);

routes.get('/candidates', CandidateController.list);

export default routes;
