import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

function ProgrammingSection() {
  return (
    <Box
    bg="gray.100"
    p={8}
    borderRadius="md"
    boxShadow="md"
    minWidth='min-content'
    mb="10px"
    mt="10px"
    alignItems='center'
    
    >

    <Heading as="h2" size="xl" mb={4}>
        Programming and Software Development
    </Heading>
    <Text fontSize="lg">
        Programming is the process of writing instructions (code) that computers can execute.
        It involves problem-solving, logical thinking, and creativity to develop software solutions.
        Software developers are professionals who specialize in writing and maintaining code to create applications, websites, and more.
    </Text>
    <Text mt={4}>
        Coding is a fundamental skill for software developers, as it involves translating logic and ideas into programming languages
        such as JavaScript, Python, or Java. It allows developers to build complex systems, solve problems, and bring ideas to life.
    </Text>
    <Text mt={4}>
        Software development encompasses various domains, including web development, mobile app development,
        data science, artificial intelligence, and more. It offers endless opportunities for innovation and growth,
        making it an exciting field for aspiring and experienced developers alike.
    </Text>
    </Box>
  );
}

export default ProgrammingSection;
