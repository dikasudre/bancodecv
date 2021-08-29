import mongoose from 'mongoose';

const CandidateSchema = new mongoose.Schema(
    {
        name: {
            type: String, 
            required: true
        },
        dtBorn: {
            type: Date,
            required: true
        },
        street: {
            type: String,
            required: true
        },
        number: {
            type: Number,
            required: true
        },
        district: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        postalCode: {
            type: String,
            required: true
        },
        phone: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        role: {
            type: String,
            required: true
        },
        rg: {
            type: String,
            required: false
        },
        cpf: {
            type: String,
            required: true
        },
        gender: {
            type: String,
            required: false
        },
        civilStatus: {
            type: String,
            required: false
        },
        hasCar: {
            type: Boolean,
            required: false
        },
        driveLicense: {
            type: Boolean,
            required: false
        },   
    }
);

export default mongoose.model('Candidate', CandidateSchema);