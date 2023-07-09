import React from 'react'
import '../src/index.css'
import Home from './Components/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navb from './Pages/Home/Navb'
import About from './Components/About'
import Helmet from './Pages/Categories/Helmet'
import Ridinggears from './Pages/Categories/Ridinggears'
import Jackets from './Pages/Categories/Jacket'
import Automotive from './Pages/Categories/Automotive'
import Seats from './Pages/Categories/Seats'
import Wheels from './Pages/Categories/Wheels'
import ContactUs from './Components/Contactus'
import FooterNav from './Pages/Home/MobileView/FooterNav'
import Footer from './Components/Footer/Footer'





function App() {
  return (
    <div className='body'>
        <BrowserRouter>
                 <Navb></Navb>
                  
          
          <Routes>
             <Route exact path   = "/" Component={Home}/>
               <Route  path   = "/about" Component={About}/>
               <Route  path   = "/helmet" Component={Helmet}/>
               <Route  path   = "/ridinggears" Component={Ridinggears}/>
               <Route  path   = "/jacket" Component={Jackets}/>
               <Route  path   = "/automotive" Component={Automotive}/>
               <Route  path   = "/wheels" Component={Wheels}/>
               <Route  path   = "/seats" Component={Seats}/>
               <Route  path   = "/contact" Component={ContactUs}/>
              
             </Routes>
          
            
        </BrowserRouter>
     
        <FooterNav/>
        </div>
  )
}

export default App