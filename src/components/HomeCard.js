import React from 'react';
import { Box, Card, Image, Heading, Text } from 'rebass';
import image from '../image.png'

class HomeCard extends React.Component {
    render() {
        return (
            <Box width={500}>
                <Card 
                    sx={{
                        p: 1,
                        borderRadius: 2,
                        boxShadow: '0 0 16px rgba(0, 0, 0, .25)',
                    }} >
                        <Image src={image} />
                        <Box px={2}>
                            <Heading as="h3">Horizon Travels</Heading>
                            <Text fontSize={0}>Bon Voyage!</Text>
                        </Box>
                    </Card>
            </Box>
        );
    }
}

export default HomeCard;