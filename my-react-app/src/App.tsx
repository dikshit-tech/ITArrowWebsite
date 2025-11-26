import './App.css'
import Header from './Header/Header'
import Custom_Footer from './Custom_Footer/Custom_Footer'
import { Route, Routes } from 'react-router-dom'
import Homepage from './pages/homepage'
import AboutUs from './pages/AboutUs'
import Service from './pages/Service'
import Portfolio from './pages/Portfolio'
import ContactUs from './pages/ContactUs'
function App() {

  return (
    <>
 
        <Header/>
       <Routes>
        <Route path='/' element={<Homepage />}/>
        <Route path='/about-us' element={<AboutUs />}/>
        <Route path='/service' element={<Service />}/>
        <Route path='/portfolio' element={<Portfolio />}/>
        <Route path='/contact-us' element={<ContactUs />}/>
       </Routes>
        <Custom_Footer />
    </>
  )
}

export default App
