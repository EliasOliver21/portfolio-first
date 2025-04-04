import {BrowserRouter, Routes, Route,Navigate} from 'react-router'
import {} from 'react-dom'
import { Home } from './pages/Home'
import { Contact } from './pages/Contact'
import {ButtonAppBar} from './components/Top-Bar.tsx';

export const AppRoutes = () => {

    return(
        <BrowserRouter>

            <ButtonAppBar></ButtonAppBar>

            <Routes>

                <Route path= '/home' element= {<Home/>}/>
                <Route path= '/contact' element= {<Contact/>}/>
                <Route path= '*' element= {<Navigate to = '/home'/>}/>

            </Routes>
        
        </BrowserRouter>
    )   
}