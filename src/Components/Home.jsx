import React from 'react'
import Banner from '../Pages/Home/Banner'
import Categories from './Categories'
import Spcard from '../Spcard'
import Featurespro from '../Featurespro';
import Autologo from '../Autologo';
import Footer from '../Components/Footer/Footer'
 

export default function Home() {
  return (
    <div>
      
      <Banner/>
      <Categories  />
      <Spcard />
      <Featurespro />
      <Autologo />
      <Footer />
      

    </div>
  )
}



