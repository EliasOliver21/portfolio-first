import {Container, Grid, styled, Typography } from "@mui/material";

export const Projects = () => {

    const StyledHome = styled("div")(({theme}) => ({

        backgroundColor: theme.palette.primary.main,
        height: '100vh',
        display:'flex',
        alignItems:'baseline',
        [theme.breakpoints.up('xs')]: { // <= mobile
            paddingTop: "100px",

        },
        [theme.breakpoints.up('md')]: { // >=mobile
            paddingTop: "0",
        }

    }))

    return<>

        <StyledHome sx={{alignItems:'center'}}>
            <Container maxWidth='lg' sx={{paddingBottom:'20vh'}}>

                <Grid direction={'column'} container rowSpacing={5}  sx={{alignContent:'center'}}>
                        
                        <Grid >

                            
                            <Typography color="primary.contrastText">Em construção...</Typography>

                        </Grid>
{/* 
                        <Grid sx={{justifyItems:'center',justifyContent:'center',alignContent:'center',textAlign:'center'}}>
                         
                            <Typography color="primary.contrastText">Github</Typography>

                        </Grid>

                        <Grid sx={{textAlign:'center',justifyItems:'center',justifyContent:'center',alignContent:'center',alignItems:"center"}}>
                            
                            <Typography color="primary.contrastText">Github</Typography>

                        </Grid>

                        <Grid sx={{textAlign:'center',justifyItems:'center',justifyContent:'center',alignContent:'center'}}>
                          
                            
                            <Typography color="primary.contrastText">Github</Typography>

                             
                        </Grid> */}
                        
                </Grid>

                
                
            </Container>
        </StyledHome>
    </>
}