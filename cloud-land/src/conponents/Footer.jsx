import React from 'react';
import { Box, Grid, Heading, Text, Link, Icon, Flex } from '@chakra-ui/react';
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

function Footer() {
  // Random address, time, email, about, and contact information
  const address = '1234 Street, City, Country';
const time = 'Mon-Fri: 9am-5pm';
const email = 'example@example.com';
const about = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
const contact = '+1 123-456-7890';

return (
    <Box bg="gray.900" color="white" py={6}>
    <Box maxW="800px" mx="auto" px={4}>
        <Grid templateColumns="repeat(3, 1fr)" gap={8}>
        <Box>
            <Heading as="h2" size="lg" mb={4}>
            Address
            </Heading>
            <Text>{address}</Text>
        </Box>
        <Box>
            <Heading as="h2" size="lg" mb={4}>
            Time
            </Heading>
            <Text>{time}</Text>
        </Box>
        <Box>
            <Heading as="h2" size="lg" mb={4}>
            Email
            </Heading>
            <Link href={`mailto:${email}`}>{email}</Link>
        </Box>
        <Box>
            <Heading as="h2" size="lg" mb={4}>
            About
            </Heading>
            <Text>{about}</Text>
        </Box>
        <Box>
            <Heading as="h2" size="lg" mb={4}>
            Contact
            </Heading>
            <Text>{contact}</Text>
        </Box>
        <Box>
            <Heading as="h2" size="lg" mb={4}>
            Social Media
            </Heading>
            <Flex>
            <Link href="https://twitter.com">
                <Icon as={FaTwitter} boxSize={6} mr={2} />
            </Link>
            <Link href="https://facebook.com">
                <Icon as={FaFacebookF} boxSize={6} mr={2} />
            </Link>
            <Link href="https://linkedin.com">
                <Icon as={FaLinkedinIn} boxSize={6} mr={2} />
            </Link>
            <Link href="https://instagram.com">
                <Icon as={FaInstagram} boxSize={6} />
            </Link>
            </Flex>
        </Box>
        </Grid>
    </Box>
    </Box>
);
}

export default Footer;
