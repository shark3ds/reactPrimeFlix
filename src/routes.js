import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Films from './pages/Films'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Favorites from './pages/Favorites'

import Header from './components/Header'

function RoutesApp() {
    return (

        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/Films/:id' element={<Films />} />
                <Route path='/Favorites' element={<Favorites />}/> 
                <Route path='*' element={<NotFound />} />

            </Routes>
        </BrowserRouter>

    )
}

export default RoutesApp;