
import Homepage from "./pages/Homepage";
import SignUpPage from "./pages/SIgnUpPage";
import { LoginPage } from "./pages/Loginpage";
import { TestPage } from "./pages/TestPage";
import {Routes, Route} from 'react-router-dom';
import { useState } from 'react';
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";

function App() {

  const [darkMode, setDarkMode] = useState(false)
  const handleDarkModeChange = () => {
      setDarkMode(!darkMode)

  };

  return (
    <>
    <div className={` ${darkMode ? 'bg-black text-white ': 'bg-white text-black'}`}>
          <button className="hover:bg-yellow-400" onClick={handleDarkModeChange}>
            {`${darkMode ? <MdOutlineDarkMode /> : <MdOutlineLightMode />}`}</button>
      <Routes>
        <Route index element={<Homepage/>}/>
        <Route path="/jubril" element={<SignUpPage/>}  />
        <Route path="/Login" element={<LoginPage/>} />
        <Route path="/TestPage" element={<TestPage/>}/>
      </Routes>
    </div>
      

    </>
  )
}

export default App
