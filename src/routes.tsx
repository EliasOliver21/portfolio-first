import {BrowserRouter, Routes, Route,Navigate} from 'react-router';
// import {} from 'react-dom';
import {Home} from './pages/Home.tsx';
import {Contact} from './pages/Contact.tsx';
import {Projects} from './pages/Projects.tsx';
import {Navbar} from './components/Navbar.tsx';
import { Box, Grid } from '@mui/material';
import { Directions } from '@mui/icons-material';


export const AppRoutes = () => {

    return(
        <>
        
        <BrowserRouter>

            <Grid>

                <Navbar></Navbar>

                <Routes>

                    <Route path= '/home' element= {<Home/>}/>
                    <Route path= '/contacts' element= {<Contact/>}/>
                    <Route path= '/projects' element= {<Projects/>}/>
                    <Route path= '*' element= {<Navigate to = '/home'/>}/>

                </Routes>
            </Grid>
        
        </BrowserRouter>
        </>
    )   
}