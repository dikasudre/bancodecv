import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";
import { Sidebar } from "../components/Sidebar";
import { Header } from "../components/Header";

export default function Home() {
  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <SimpleGrid flex="1" gap="4" minChildWidth="320px" align="flex-start">
            <Box p={["6", "8"]}
                  bg="gray.800"
                  borderRadius={8}
                  pb="4">
                
                <Text fontSize="lg" mb="4">Bem vindo(a) a JobsNet!</Text>

                <Text>
                  Bacon ipsum dolor amet strip steak kevin turkey short ribs pancetta beef. Swine burgdoggen venison buffalo. Buffalo capicola cupim, kielbasa pastrami short loin jowl tongue. Filet mignon shoulder strip steak, landjaeger buffalo kielbasa ribeye ball tip t-bone fatback sausage.
                </Text>
            </Box>                   
        </SimpleGrid>
      </Flex>
    </Flex>
  )
}
