import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Landing from './components/Landing.jsx';
import './App.css'


const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Landing />
      </div>
    </BrowserRouter>
  )
}

export default App
