import React from 'react'
import { Footer, Header } from './components'
import { Home } from './pages'

const App = () => {

  return (
    <div className='max-w-7xl mx-auto max-sm:px-3 px-5 min-h-screen'>
      <div className='font-Montserrat'>
       
        <Header />
        <Home />
        <Footer/>
       
      </div>

    </div>
  )
}

export default App