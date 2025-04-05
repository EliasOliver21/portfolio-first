import { Box, Container, Grid, styled, Typography } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';

export const Contact = () => {

    const StyledHome = styled("div")(({theme}) => ({

        backgroundColor: theme.palette.primary.main,
        height: '100vh',
        alignItems:'center',
        [theme.breakpoints.up('xs')]: { // <= mobile
            paddingTop: "100px",

        },
        [theme.breakpoints.up('md')]: { // >=mobile
            paddingTop: "0",
        }

    }))

    const StyledImg = styled("img")(({ theme }) => ({
        width: "30%",
        borderRadius: "50%",
        border: `1px solid ${theme.palette.primary.contrastText}`
    }))

    return<>

        <StyledHome>
            <Container maxWidth='lg' sx={{padding:'150px'}}>

                <Grid color="primary.contrastText" direction={'column'}container rowSpacing={5} sx={{alignItems:'center', justifyContent:'center',justifyItems:'center'}}>

                    <Typography >Minhas Redes</Typography>


                    <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 4 }} sx={{justifyItems:'center',alignItems:'center'}}>
                        
                        <Grid size={6}>
                            <GitHubIcon>GitHub</GitHubIcon>
                        </Grid>
                        <Grid size={6}>
                            asd
                        </Grid>
                        <Grid size={6}>
                            asd
                        </Grid>
                        <Grid size={6}>
                            asd
                        </Grid>
                        
                    </Grid>

                   

                </Grid>

                
                
            </Container>
        </StyledHome>
    </>
}