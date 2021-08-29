import { Router } from 'express';

const routes = new Router();

routes.post('/candidates', (req, res) => {
   res.json({message: 'Registrar Candidato'});
});

routes.get('/candidates', (req, res) => {
    res.json({message: 'Listar candidatos'});
});

routes.get('/candidates/:id', (req, res) => {
    res.json({message: 'Busca candidato'});
});

export default routes;