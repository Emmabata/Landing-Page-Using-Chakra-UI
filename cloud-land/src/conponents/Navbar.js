import React from 'react';
import { Box, Flex, Text, IconButton } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

const Navbar = () => {
    return (
    <Box bg="blue.500" py={4} px={8}>
        <Flex justify="space-between" align="center">
        <Text color="white" fontWeight="bold" fontSize="lg">
            My Website
        </Text>
        <IconButton
            display={{ base: 'block', md: 'none' }}
            icon={<HamburgerIcon />}
            variant="ghost"
            color="white"
            aria-label="Toggle navigation"
        />
        <Flex display={{ base: 'none', md: 'flex' }} alignItems="center">
            <Text color="white" mx={4}>
            Home
            </Text>
            <Text color="white" mx={4}>
            About
            </Text>
            <Text color="white" mx={4}>
            Services
            </Text>
            <Text color="white" mx={4}>
            Contact
            </Text>
        </Flex>
        </Flex>
    </Box>
    );
};

export default Navbar;
