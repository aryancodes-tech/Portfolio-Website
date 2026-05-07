import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import { Analytics } from "@vercel/analytics/react"
import { useEffect } from 'react'
import { DSA_EXTERNAL_URL } from './constants/urls'

/** Sends the browser to the public resume PDF on Google Drive. */
function RedirectToResume() {
  useEffect(() => {
    window.location.href = "https://drive.google.com/file/d/1fxvjQcduLKS4ewpOm_j__fUBywM902mD/view?usp=sharing";
  }, []);
  return null;
}

/** Sends the browser to the DSA site (dsa.aryancodes.tech). */
function RedirectToDsa() {
  useEffect(() => {
    if (DSA_EXTERNAL_URL.length > 0) {
      window.location.replace(DSA_EXTERNAL_URL)
    }
  }, []);
  return null;
}

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route 
          path="/resume" 
          element={
            <RedirectToResume />
          } 
        />
        <Route path="/dsa" element={<RedirectToDsa />} />
      </Routes>
    </BrowserRouter>
    <Analytics />
    </>
  )
}

export default App
