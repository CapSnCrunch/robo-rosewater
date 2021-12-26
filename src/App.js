import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar"
import Footer from "./components/layout/Footer"
import Home from './pages/Home'
import About from './pages/About'
import { MagicProvider } from "./context/MagicContext"

function App() {
  return (
    <MagicProvider>
      <Router>
          <div className='flex flex-col h-screen justify-between'>
            <Navbar />
            <main className='container mx-auto mb-auto px-3 pb-12'>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
              </Routes>
            </main>
            <div className="position-fixed mb-0">
              <Footer />
            </div>
          </div>
      </Router>
    </MagicProvider>
  )
}

export default App;
