import {BrowserRouter, Routes, Route,Navigate} from 'react-router'
import {} from 'react-dom'
import { Home } from './pages/Home'
import { Contact } from './pages/Contact'

export const AppRoutes = () => {

    return(
        <BrowserRouter>

            <Routes>

                <Route path= '/home' element= {<Home/>}/>
                <Route path= '/contact' element= {<Contact/>}/>
                <Route path= '*' element= {<Navigate to = '/home'/>}/>

            </Routes>
        
        </BrowserRouter>
    )   
}