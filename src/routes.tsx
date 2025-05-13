import {BrowserRouter, Routes, Route,Navigate} from 'react-router';
// import {} from 'react-dom';
import {Home} from './pages/Home.tsx';
import {Contact} from './pages/Contact.tsx';
import {Projects} from './pages/Projects.tsx';
import {Navbar} from './components/Navbar.tsx';
import { Box, Grid } from '@mui/material';
import { Animated_background } from './components/Animated_background.tsx';



export const AppRoutes = () => {

    return(
        <>
        
        <BrowserRouter>

            <Grid >

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

                <Navbar></Navbar>

                <Box >


                    <Routes>

                        <Route path= '/home' element= {<Home/>}/>
                        <Route path= '/contacts' element= {<Contact/>}/>
                        <Route path= '/projects' element= {<Projects/>}/>
                        <Route path= '*' element= {<Navigate to = '/home'/>}/>

                    </Routes>



                </Box>

                
            </Grid>
        
        </BrowserRouter>
        
        </>
    )   
}