import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '../../components/Typography/Typography';
import Header from '../../components/Header/Header';

const GamePage = () => {
    return (
        <React.Fragment>
            <Header />
            <Container>
                <Box sx={{ mt: 7, mb: 12 }}>
                    <Typography variant="h3" gutterBottom marked="center" align="center">
                        Game
                    </Typography>
                </Box>
            </Container>
        </React.Fragment>
    );
};

export default GamePage;