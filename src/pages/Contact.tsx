import { Box, Container, Grid, IconButton, styled, Typography } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Animated_background } from "../components/Animated_background";

export const Contact = () => {

    const StyledHome = styled("div")(({theme}) => ({

        backgroundColor: theme.palette.primary.main,
        height: '100vh',
        alignItems:'center',
        [theme.breakpoints.up('xs')]: { // <= mobile
            paddingTop:'5vh'

        },
        [theme.breakpoints.up('md')]: { // >=mobile
            paddingTop: "0",
        }

    }))

    return<>

        <StyledHome>

            <Container maxWidth='sm' sx={{paddingTop:'15vh'}}>

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

                        <Typography variant="h4" sx={{position:"relative", zIndex:2}}>Minhas Redes</Typography>

                    </Box>
                    


                    <Grid container rowSpacing={3} position={'relative'}  paddingTop={'5vh'} columnSpacing={{ xs: 1, sm: 2, md: 0 }} sx={{justifyItems:'center',justifyContent:'center',alignContent:'center',textAlign:'center',zIndex:2}}>
                        
                        <Grid size={6}>

                            <IconButton component="a" rel="noopener noreferrer" href="https://www.github.com/EliasOliver21" target="_blank" color="inherit">
                                
                                <GitHubIcon/>
                            
                            </IconButton>
                            
                            <Typography>Github</Typography>

                        </Grid>

                        <Grid size={6} sx={{justifyItems:'center',justifyContent:'center',alignContent:'center',textAlign:'center'}}>

                            <IconButton href="https://www.instagram.com/elias_bsb/" component="a" rel="noopener noreferrer" target="_blank" color="inherit">
                                
                                <InstagramIcon />
                            
                            </IconButton>    
                            
                            <Typography>
                                
                                Instagram
                            
                            </Typography>
                        </Grid>

                        <Grid size={6} sx={{textAlign:'center',justifyItems:'center',justifyContent:'center',alignContent:'center',alignItems:"center"}}>
                            <IconButton component="a" rel="noopener noreferrer" href="mailto:eliasoliveiradapaz@gmail.com" target="_blank" color="inherit">

                                <MailOutlineIcon/>
                            </IconButton>
                            
                            <Typography>Email</Typography>
                        </Grid>

                        <Grid size={6} sx={{textAlign:'center',justifyItems:'center',justifyContent:'center',alignContent:'center'}}>
                            <IconButton component="a" rel="noopener noreferrer" href="https://www.linkedin.com/in/elias-oliveira-1609a3239" target="_blank" color="inherit">

                                <LinkedInIcon/>
                            </IconButton>
                            
                            <Typography>LinkedIn</Typography>
                        </Grid>
                        
                    </Grid>

                   

                </Grid>

                
                
            </Container>
        </StyledHome>
    </>
}