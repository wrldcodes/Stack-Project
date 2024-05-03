// import { useState } from 'react'
import Homepage from "./pages/Homepage";
import SignUpPage from "./pages/SIgnUpPage";
import { LoginPage } from "./pages/Loginpage";
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Homepage/>}/>
        <Route path="/jubril" element={<SignUpPage/>}  />
        <Route path="/Login" element={<LoginPage/>} />
      </Routes>

    </>
  )
}

export default App
