import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
    showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
    return (
        <Flex align="center">
            { showProfileData && (
                <Box mr="4" textAlign="right">
                    <Text>Dika Sudré</Text>
                    <Text color="gray.300" fontSize="small">
                        lucileidedacome@hotmail.com
                    </Text>
                </Box>
            )}
            <Avatar size="md" name="Dika sudré" src="https://github.com/dikasudre.png" />
        </Flex>
    );
}
