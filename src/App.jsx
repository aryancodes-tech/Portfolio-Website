import { lazy, Suspense, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import { DSA_EXTERNAL_URL } from './constants/urls'

const Analytics = lazy(() =>
  import('@vercel/analytics/react').then((m) => ({ default: m.Analytics }))
)

/** Sends the browser to the public resume PDF on Google Drive. */
function RedirectToResume() {
  useEffect(() => {
    window.location.href = "https://drive.google.com/file/d/153sh7wGFxuyM1DWVxYKdRMUe659IZfxm/view?usp=sharingn";
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
          <Route path="/resume" element={<RedirectToResume />} />
          <Route path="/dsa" element={<RedirectToDsa />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Suspense fallback={null}>
        <Analytics />
      </Suspense>
    </>
  )
}

export default App
