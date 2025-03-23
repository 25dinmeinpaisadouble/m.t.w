import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import SubjectsPricing from './components/SubjectsPricing'
import Reviews from './components/Reviews'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {

  return (
      <div>
        <Navbar />
        <Home />
        <About />
        <SubjectsPricing />
        <Reviews />
        <Contact />
        <Footer />
      </div>
  )
}

export default App
