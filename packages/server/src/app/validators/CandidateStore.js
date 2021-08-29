import * as Yup from 'yup';

export default async (req, res, next) => {
    try {
        const schema = Yup.object().shape({
            name: Yup.string().required('Nome é obrigatório'),
            dtBorn: Yup.date().required('Data de Nascimento é obrigatório'),
            street: Yup.string().required('Rua é obrigatório'),
            number: Yup.int().required('Numero é obrigatório'),
            district: Yup.string().required('Bairro é obrigatório'),
            city: Yup.string().required('Cidade é obrigatório'),
            state: Yup.string(),
            postalCode: Yup.string().required('CEP é obrigatório'),
            phone: Yup.string().required('Telefone é obrigatório'),
            email: Yup.string().required('E-mail é obrigatório').email("Não é um e-mail válido"),
            role: Yup.string().required('Profissão é obrigatório'),
            rg: Yup.string(),
            cpf: Yup.string().required('CPF é obrigatório'),
            gender: Yup.string(),
            civilStatus: Yup.string(),
            hasCar: Yup.boolean(),
            driveLicense: Yup.boolean(),
        });

        await schema.validate(req.body, { abortEarly: false });
        
        return next();
    } catch (error) {
        return res
        .status(400)
        .json({ error: 'Validation Failed', messages: error.inner });       
    }
}