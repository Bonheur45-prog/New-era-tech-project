import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar.jsx';
import { ScrollToTop } from './components/ScrollToTop.jsx';
import { HomePage } from './pages/HomePage.jsx';
import { AboutPage } from './pages/AboutPage.jsx';
import { ContactPage } from './pages/ContactPage.jsx';
import './App.css'

function App() {

  return (
    <>
      <Navbar />
      <ScrollToTop />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/About' element={<AboutPage />} />
        <Route path='/Contact' element={<ContactPage />} />
      </Routes>
    </> 
  )
}

export default App
