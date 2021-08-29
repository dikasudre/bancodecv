import Candidate from '../schemas/Candidate';

class CandidateController {
    async store(request, response) {
        const candidate = await Candidate.create(request.body);

        return response.json(candidate);
    }

    async list (request, response) {
        const candidate = await Candidate.find();

        return response.json(candidate);
    }
}

export default new CandidateController();