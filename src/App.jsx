import { BrowserRouter } from "react-router-dom";
import { Navbar } from './components/Navbar'
import './App.css';



const App = () => {
  return (
    <BrowserRouter>
    <div>
      <Navbar />
    </div>
    </BrowserRouter>
  )
}

export default App
