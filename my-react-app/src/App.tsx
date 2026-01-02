import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import Homepage from './pages/homepage'
import AboutUs from './pages/AboutUs'
import Service from './pages/Service'
import Portfolio from './pages/Portfolio'
import ContactUs from './pages/ContactUs'
import Admin from './pages/Admin'
import Website from './pages/Website'
import Dashboard from './Admin Components/dashboard'
import Blog from './Admin Components/Blog'
import Testimonials from './Admin Components/Testimonials'
import Projects from './Admin Components/Projects'
import Setting from './Admin Components/Setting'
import "react-quill/dist/quill.snow.css";

function App() {

  return (
    <>


      <Routes>
        <Route path='/itarrowpanel/*' element={<Admin />} >
          <Route path='' element={<Dashboard />}/>
          <Route path="blog" element={<Blog/>}/>
          <Route path="testimonials" element={<Testimonials/>}/>
          <Route path="projects" element={<Projects/>}/>
          <Route path="Settings" element={<Setting/>}/>
          <Route path="*" element={<Navigate to="/itarrowpanel/"/>} />
        </Route>
        <Route path='/' element={<Website />}>
          <Route path='/' element={<Homepage />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/service' element={<Service />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/contact-us' element={<ContactUs />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>

    </>
  )
}

export default App
