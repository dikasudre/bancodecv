import { Router } from 'express';

const routes = new Router();

routes.get('/registrar', (req, res) => {
   res.json({message: 'Registrar Candidato'});
});

routes.get('/candidatos', (req, res) => {
    res.json({message: 'Listar candidatos'});
});

routes.get('/candidatos/:id', (req, res) => {
    res.json({message: 'Busca candidato'});
});

export default routes;