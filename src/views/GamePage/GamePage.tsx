import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '../../components/Typography/Typography';
import Header from '../../components/Header/Header';
import CustomizedTables from '../../components/Table/CustomizedTables';
import CustomButton from '../../components/Button/CustomButton';
import OutlinedCard from '../../components/Card/OutlinedCard'

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
                <Box sx={{ ml: 10, mr: 10 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={8}>
                            <Typography variant="h4" gutterBottom marked="left" align="left">
                                RANK
                            </Typography>
                            <CustomizedTables />
                        </Grid>
                        <Grid item xs>
                            <Grid item xs>
                            <CustomButton
                                sx={{ mt: 3, mb: 2 }}
                                type="submit"
                                variant="contained"
                                size="large"
                                color="secondary"
                                fullWidth
                            >
                                Game Start
                            </CustomButton>
                            </Grid>
                            <Grid item xs>
                                <OutlinedCard />
                                <OutlinedCard />
                                <OutlinedCard />
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </React.Fragment>
    );
};

export default GamePage;