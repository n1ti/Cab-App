import { BrowserRouter } from "react-router-dom";
//import { Navbar } from "./components/Navbar.jsx";
import './App.css';
import Landing from './components/Landing.jsx';



const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Landing />
      </div>
    </BrowserRouter>
  )
}

export default App
