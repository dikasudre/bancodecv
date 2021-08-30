import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Text, Th, Thead, Tr, useBreakpointValue } from '@chakra-ui/react';
import Link from 'next/link';
import { RiAddLine, RiPencilLine } from 'react-icons/ri';
import { Header } from '../../components/Header';
import { Sidebar } from '../../components/Sidebar';

export default function CandidateList() {
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    })

    return (
        <Box>
            <Header />

            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <Sidebar />

                <Box flex="1" borderRadius={8} bg="gray.800" p="8">
                    <Flex mb="8" justify="space-between" align="center">
                        <Heading size="lg" fontWeight="normal">Candidatos</Heading>

                        <Link href="/candidates/create" passHref>
                            <Button as="a" 
                                    size="sm" 
                                    colorScheme="pink" 
                                    leftIcon={<Icon as={RiAddLine} />}>
                                Criar novo
                            </Button>
                        </Link>
                    </Flex>

                    <Table colorScheme="whiteAlpha">
                        <Thead>
                            <Tr>
                                <Th px={["4","4","6"]} color="gray.300" width="8">
                                    <Checkbox colorScheme="pink" />
                                </Th>
                                <Th>Candidato</Th>
                                { isWideVersion && <Th>Data de Nascimento</Th> }
                                { isWideVersion && <Th w="8"></Th>}
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td px={["4","4","6"]}>
                                    <Checkbox colorScheme="pink" />
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight="bold">Wescley Sudré</Text>
                                        <Text fontSize="sm" color="gray.300">wescleysudre@gmail.com</Text>
                                    </Box>
                                </Td>
                                { isWideVersion && <Td>23 de Agosto, 2021</Td> }
                                { isWideVersion && (
                                    <Td>
                                        <Button as="a" 
                                                size="sm" 
                                                colorScheme="purple" 
                                                leftIcon={<Icon as={RiPencilLine} 
                                                fontSize="16" />}>
                                            Editar
                                        </Button>                                    
                                    </Td>
                                ) }
                            </Tr>
                        </Tbody>
                    </Table>
                </Box>
            </Flex>
        </Box>
    )
}