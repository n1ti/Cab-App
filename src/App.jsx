import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Landing from './components/Landing.jsx';
import Footer from "./components/Footer.jsx";
import './App.css'


const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Landing />
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
