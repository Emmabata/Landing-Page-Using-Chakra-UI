// File: src/components/LandingPage.js
import React from 'react';
import { Box, Heading, Text, Flex, Spacer } from '@chakra-ui/react';

const LandingPage = () => {
    return (
    <>
    <Flex minWidth='max-content' alignItems='center' gap='2' bgColor="GrayText" color="white">
        <Box textAlign="center" p={4}>
            <Heading>Welcome to My Landing Page</Heading>
            <Text fontSize="xl">Start building your amazing website!</Text>
        </Box>
        <Spacer/>

        <Box>
            <img
                src={require('../assets/programwitBata.avif')}
                alt="ProgramwiteBata"
                style={{width : "100%", height : "20"}}
            />
        </Box>
    </Flex>
    </>
    );
}

export default LandingPage;
