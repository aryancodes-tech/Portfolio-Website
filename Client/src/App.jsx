import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import { Analytics } from "@vercel/analytics/react"
// import { RedirectToResume } from './components/RedirectToResume'
import { useEffect } from 'react'

function RedirectToResume() {
  useEffect(() => {
    window.location.href = "https://drive.google.com/file/d/1nWL9SEC0hd5jT9fvi7fEfGCM88s5AnXT/view";
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
      </Routes>
    </BrowserRouter>
    <Analytics />
    </>
  )
}

export default App
