import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack } from '@chakra-ui/react';
import Link from 'next/link';
import { Input } from '../../components/Form/Input';
import { Select } from '../../components/Form/Select';
import { Header } from '../../components/Header';
import { Sidebar } from '../../components/Sidebar';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

type CreateCandidateFormData = {
    name: string;
    dtBorn: Date;
    street: string;
    number: number;
    district: string;
    city: string;
    state: string;
    postalCode: string
    phone: string;
    email: string;
    role: string;
    rg: string;
    cpf: string;
    gender: string;
    civilStatus: string;
    hasCar: boolean;
    driveLicense: boolean;
}

const CreateCandidateFormSchema = yup.object().shape({
    name: yup.string().required('Nome é obrigatório'),
    dtBorn: yup.date().required('Data de Nascimento é obrigatório'),
    street: yup.string().required('Rua é obrigatório'),
    number: yup.number().required('Número é obrigatório'),
    district: yup.string().required('Bairro é obrigatório'),
    city: yup.string().required('Cidade é obrigatório'),
    postalCode: yup.string().required('CEP é obrigatório'),
    phone: yup.string().required('Telefone é obrigatório'),
    email: yup.string().required('E-mail é obrigatório').email("Não é um e-mail válido"),
    role: yup.string().required('Profissão é obrigatório'),    
    cpf: yup.string().required('CPF é obrigatório'),
})

const civilStatus = ["Solteiro(a)", "Amasiado(a)", "Casado(a)", "Divorciado(a)", "Viúvo(a)"];
const gender = ["Masculino", "Feminino"];
const choice = ["Sim", "Não"];

export default function CreateCandidate() {
    const { register, handleSubmit, formState } = useForm({
        resolver: yupResolver(CreateCandidateFormSchema)
    });

    const { errors } = formState;

    const handleCreateCandidate: SubmitHandler<CreateCandidateFormData> = async (values) => {
        await new Promise(resolve => setTimeout(resolve, 2000));

        console.log(values);
    }

    return (
        <Box>
            <Header />

            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <Sidebar />

                <Box as="form"
                     flex="1" 
                     borderRadius={8} 
                     bg="gray.800" 
                     p={["6","8"]}
                     onSubmit={handleSubmit(handleCreateCandidate)}>
                    <Heading size="lg" fontWeight="normal">Cadastrar Candidato(a)</Heading>

                    <Divider my="6" borderColor="gray.700" />

                    <VStack>
                        <SimpleGrid minChildWidth="240px" spacing={["6","8"]} w="100%">
                            <Input name="name" label="Nome Completo" error={errors.name} {...register('name')} />
                            <Input name="role" label="Cargo Pretendido" error={errors.role} {...register('role')} />
                        </SimpleGrid>

                        <SimpleGrid minChildWidth="240px" spacing={["6","8"]} w="100%">
                            <Input name="dtBorn" type="date" label="Data de Nascimento" error={errors.dtBorn} {...register('dtBorn')} />
                            <Select name="civilStatus" label="Estado Civil" placeholder="Escolha..." items={civilStatus} error={errors.civilStatus} {...register('civilStatus')} />
                            <Select name="gender" label="Sexo" placeholder="Escolha o sexo" items={gender} error={errors.gender} {...register('gender')} />
                        </SimpleGrid>

                        <SimpleGrid minChildWidth="240px" spacing={["6","8"]} w="100%">
                            <Input name="postalCode" label="Cep" error={errors.postalCode} {...register('postalCode')} />
                            <Button colorScheme="pink" mt="8" size="lg">
                                Consultar CEP
                            </Button>                            
                        </SimpleGrid>

                        <SimpleGrid minChildWidth="240px" spacing={["6","8"]} w="100%">
                            <Input name="street" label="Logradouro" error={errors.street} {...register('street')} />   
                            <Input name="district" label="Bairro" error={errors.district} {...register('district')} />
                            <Input name="city" label="Cidade" error={errors.city} {...register('city')} />                            
                        </SimpleGrid>

                    </VStack>

                    <Heading size="lg" fontWeight="normal" mt="5">Contato</Heading>

                    <Divider my="6" borderColor="gray.700" />

                    <VStack>
                        <SimpleGrid minChildWidth="240px" spacing={["6","8"]} w="100%">
                            <Input name="email" type="email" label="E-mail" error={errors.email} {...register('email')} />
                            <Input name="phone" label="Celular" error={errors.phone} {...register('phone')} />
                        </SimpleGrid>                        
                    </VStack>                    

                    <Heading size="lg" fontWeight="normal" mt="5">Documentos</Heading>

                    <Divider my="6" borderColor="gray.700" />

                    <VStack>
                        <SimpleGrid minChildWidth="240px" spacing={["6","8"]} w="100%">
                            <Input name="rg" label="Identidade" error={errors.rg} {...register('rg')} />
                            <Input name="cpf" label="CPF" error={errors.cpf} {...register('cpf')} />
                            <Select name="hasCar" label="Possui Veículo" placeholder="Escolha" items={choice} {...register('civilStatus')} />
                            <Select name="driveLicense" label="Habilitação" placeholder="Escolha" items={choice} {...register('driveLicense')} />
                        </SimpleGrid>                        
                    </VStack>                                        

                    <Flex mt="8" justify="flex-end">
                        <HStack spacing="4">
                            <Link href="/candidates" passHref>
                                <Button colorScheme="whiteAlpha">Cancelar</Button>
                            </Link>
                            <Button type="submit" 
                                    colorScheme="pink"
                                    isLoading={formState.isSubmitting}>
                                Salvar
                            </Button>
                        </HStack>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    )
}