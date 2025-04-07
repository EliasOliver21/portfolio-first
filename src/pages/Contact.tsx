import { Box, Container, Grid, IconButton, styled, Typography } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

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

            <Container maxWidth='lg' sx={{paddingTop:'20vh'}}>

                <Grid color="primary.contrastText" container direction="column" sx={{alignItems: "center"}}>
                    
                    <Box >

                        <Typography variant="h4">Minhas Redes</Typography>

                    </Box>
                    


                    <Grid container rowSpacing={3}  paddingTop={'5vh'} columnSpacing={{ xs: 1, sm: 2, md: 0 }} sx={{justifyItems:'center',justifyContent:'center',alignContent:'center',textAlign:'center'}}>
                        
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