import React from 'react';
import { Box } from '@chakra-ui/react';
import { GoogleMap, Marker } from '@react-google-maps/api';

function Map() {
    const mapContainerStyle = {
        width: '100%',
        height: '400px',
        };

        const center = {
        lat: 37.7749, // Set the initial map center latitude
        lng: -122.4194, // Set the initial map center longitude
    };

    return (
        <Box
        bg="gray.200"
        borderRadius="md"
        p={4}
        boxShadow="md"
        >
        <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={12} // Set the initial zoom level
        >
        <Marker
            position={center}
            title="Marker" // Set an optional tooltip for the marker
        />
        </GoogleMap>
        </Box>
    );
}

export default Map;
