import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
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
                <Box sx={{ ml: 20, mr: 20 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={8}>
                            랭킹 리스트
                        </Grid>
                        <Grid item xs={4}>
                            <Grid item xs={4}>
                                게임 시작 버튼
                            </Grid>
                            <Grid item xs={4}>
                                관련 포스트들
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </React.Fragment>
    );
};

export default GamePage;