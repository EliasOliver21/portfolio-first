import { Container, Grid, styled, Typography } from "@mui/material";

export const Home = () => {

    const StyledHome = styled("div")(() => ({

        backgroundColor: "#4c5364",
        height: '100vh'

    }))

    return<>

        <StyledHome>
            <Container >

                <Grid container spacing={2}>
                    <Grid size={6}>
                    
                        <Typography>Home</Typography>
                        
                    </Grid>
                    <Grid size={6}>
                        
                        <Typography>Home</Typography>
                        
                    </Grid>
                </Grid>
                
            </Container>
        </StyledHome>
    </>
}