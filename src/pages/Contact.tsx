import { Box, Container, Grid, IconButton, styled, Typography } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import theme from "../theme";

export const Contact = () => {

    const StyledHome = styled("div")(({theme}) => ({

        backgroundColor: theme.palette.primary.main,
        alignItems:'center',
        [theme.breakpoints.up('xs')]: { // <= mobile
            paddingTop:'5vh'

        },
        [theme.breakpoints.up('md')]: { // >=mobile
            paddingTop: "0",
        }

    }))

    return<>

        <StyledHome sx={{minHeight:"100vh"}}>

            <Container maxWidth='sm' sx={{paddingTop:'15vh',minHeight:"100vh"}}>

                <Grid color="primary.contrastText" container direction="column" sx={{alignItems: "center"}}>
                    
                    <Box >

                        <Typography variant="h4" sx={{position:"relative", zIndex:2}}>Minhas Redes</Typography>

                    </Box>
                    


                    <Grid container rowSpacing={3} position={'relative'}  paddingTop={'5vh'} columnSpacing={{ xs: 1, sm: 2, md: 0 }} sx={{justifyItems:'center',justifyContent:'center',alignContent:'center',textAlign:'center',zIndex:2}}>
                        
                        <Grid size={7} borderRadius={100} >

                            <IconButton component="a" rel="noopener noreferrer" target="_blank" href="https://www.github.com/EliasOliver21" color="inherit" sx={{gap: "10px",'&:hover': {backgroundColor: theme.palette.secondary.dark},borderRadius:"55vh"}}>
                                <GitHubIcon/>                        
                                <Typography>Github</Typography>
                           
                            </IconButton>
                            
                            

                        </Grid>

                        <Grid size={6} >

                            <IconButton  href="https://www.instagram.com/elias_bsb/" component="a" rel="noopener noreferrer" target="_blank" color="inherit" sx={{gap: "10px",'&:hover': {backgroundColor: theme.palette.secondary.dark},borderRadius:"55vh"}}>
                                
                                <InstagramIcon/>
                                <Typography>
                                
                                Instagram
                            
                                </Typography>
                            </IconButton>    
                            
                            

                        </Grid>

                        <Grid size={6} >
                            <IconButton component="a" href="mailto:eliasoliveiradapaz@gmail.com" target="_blank" color="inherit" rel="noopener noreferrer" sx={{gap: "10px",'&:hover': {backgroundColor: theme.palette.secondary.dark},borderRadius:"55vh"}}>

                                <MailOutlineIcon/>
                                <Typography>Email</Typography>
                            </IconButton>
                            
                            
                        </Grid>

                        <Grid size={6} >
                            <IconButton component="a" rel="noopener noreferrer" href="https://www.linkedin.com/in/elias-oliveira-1609a3239" target="_blank" color="inherit" sx={{gap: "10px",'&:hover': {backgroundColor: theme.palette.secondary.dark} ,borderRadius:"55vh"}}>

                                <LinkedInIcon/>

                                <Typography>LinkedIn</Typography>

                            </IconButton>
                            
                            
                        </Grid>
                        
                    </Grid>

                   

                </Grid>

                
                
            </Container>
        </StyledHome>
    </>
}