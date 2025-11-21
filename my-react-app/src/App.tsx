import './App.css'
import Header from './Header/Header'
import Herobanner from './Component/Main Hero banner/herobanner'
import About from './Component/About/About'
import Services from './Component/Services/services'
import WhyChooseUs from './Component/Why chooseus/wcu'
import Testimonials from './Component/testimonials/testimonials'
import Blog from './Component/Blog/blog'
import Custom_Footer from './Custom_Footer/Custom_Footer'

function App() {

  return (
    <>

        <Header/>
        <Herobanner/>
        <About/>
        <Services/>
        <WhyChooseUs/>
        <Testimonials/>
        <Blog/>
        <Custom_Footer />
    </>
  )
}

export default App
