import React from 'react'
import {Hero, Sales, FlexContent, Stories, Footer, Navbar, Cart} from './components/index'
import {heroapi, popularsales, toprateslaes, highlight, sneaker, story, footerAPI} from './constants/index'
const App = () => {
  return (
    <>
    <Navbar/>
    <Cart/>
    <main className='flex flex-col gap-16 relative'>
      <Hero heroapi={heroapi}/>
      {/* ifExist we use it to change the design for specially for popularsales in Sales page*/}
      <Sales endpoint={popularsales} ifExist/>
      <FlexContent endpoint={highlight} ifExist/>
      <Sales endpoint={toprateslaes}/>
      <FlexContent endpoint={sneaker}/>
      <Stories story={story}/>
    </main>
    <Footer footerAPI={footerAPI}/>
    </>
  )
}

export default App