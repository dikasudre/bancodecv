import { cpf as checkCPF } from 'cpf-cnpj-validator';
import Candidate from '../schemas/Candidate';

export default async (req, res, next) => {
    const { cpf } = req.body;

    if (!checkCPF.isValid(cpf)) {
        return res
        .status(400)
        .json({ error: 'CPF inválido!' }); 
    }

    const candidate = await Candidate.findOne({ cpf });

    if (candidate) {
        return res
        .status(400)
        .json({ error: 'CPF já cadastrado!' });         
    }

    return next();
}