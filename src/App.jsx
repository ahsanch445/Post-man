import { useState } from 'react'

import Home from './Pages/Home/Home'
import ContextProvider from './Context/Context-api'

function App() {


  return (
    <>
    <ContextProvider>
    <Home/>
    </ContextProvider>
  
    </>
  )
}

export default App
