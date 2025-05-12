import {Box, Container, Grid, styled, Typography } from "@mui/material";
import { Animated_background } from "../components/Animated_background";

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

               <Grid color="primary.contrastText" container direction="column" sx={{alignItems: "center"}}>

                    <Animated_background></Animated_background>
                    
                    <Box
                        sx={{
                        position: 'absolute',
                        top: 65,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)', // 0.5 = 50% escuro
                        zIndex: 1,
                        }}
                        
                    />
                    
                    <Box >

                        <Typography variant="h5" sx={{position:"relative", zIndex:2}}>Em Construção...</Typography>

                    </Box>
                    
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