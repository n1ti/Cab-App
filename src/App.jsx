import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar.jsx";
import Landing from './components/Landing.jsx';
import Footer from "./components/Footer.jsx";
import './App.css'
import Login from "./components/login.jsx";


const App = () => {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
      <Footer />
    </>
  )
}

export default App
