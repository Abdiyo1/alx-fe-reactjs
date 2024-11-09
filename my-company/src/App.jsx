import './App.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Services from './Services'
import Contact from './Contact'


function App() {
  

  return (
    <>
    <BrowserRouter>
      <Navbar/>
      
          <Routes>
              <Route path='/' Component={Home}/>
              <Route path='/about' Component={About}/>
              <Route path='/services' Component={Services}/>
              <Route path='/contact' Component={Contact}/>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
