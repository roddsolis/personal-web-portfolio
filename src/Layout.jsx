import { BrowserRouter, Routes , Route } from "react-router-dom"
import Navbar from './components/Navbar.jsx' 
import Home from './pages/Home.jsx'
import Contacto from './pages/Contacto.jsx'

const Layout = () => {

    
  return (
    <>
        <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/contacto' element={<Contacto/>} />
        </Routes>
        </BrowserRouter>
    </>
  )
}

export default Layout
