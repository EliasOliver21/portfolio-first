import { Box, Container, Grid, styled, Typography } from "@mui/material";

export const Projects = () => {

    const StyledHome = styled("div")(({theme}) => ({

        backgroundColor: theme.palette.primary.main,
        height: '100vh',
        display:'flex',
        alignItems:'center',
        [theme.breakpoints.up('xs')]: { // <= mobile
            paddingTop: "100px",

        },
        [theme.breakpoints.up('md')]: { // >=mobile
            paddingTop: "0",
        }

    }))

    return<>

        <StyledHome>
            <Container maxWidth='lg'>

                <Grid container rowSpacing={2}  sx={{justifyItems:'center',justifyContent:'center',alignContent:'center',textAlign:'center'}}>
                        
                        <Grid size={6}>

                            
                            <Typography color="primary.contrastText">Github</Typography>

                        </Grid>

                        <Grid size={6} sx={{justifyItems:'center',justifyContent:'center',alignContent:'center',textAlign:'center'}}>
                         
                            <Typography color="primary.contrastText">Github</Typography>

                        </Grid>

                        <Grid size={6} sx={{textAlign:'center',justifyItems:'center',justifyContent:'center',alignContent:'center',alignItems:"center"}}>
                            
                            <Typography color="primary.contrastText">Github</Typography>

                        </Grid>

                        <Grid size={6} sx={{textAlign:'center',justifyItems:'center',justifyContent:'center',alignContent:'center'}}>
                          
                            
                            <Typography color="primary.contrastText">Github</Typography>

                             
                        </Grid>
                        
                </Grid>

                
                
            </Container>
        </StyledHome>
    </>
}