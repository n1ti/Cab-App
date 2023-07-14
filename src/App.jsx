import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar.jsx";
import Landing from './components/Landing.jsx';
import Footer from "./components/Footer.jsx";
import './App.css'
import Login from "./components/login.jsx";
import AdminDash from './components/AdminDash.jsx';
import DriverDeets from './components/DriverDeets.jsx';
import CabDeets from './components/CabDeets.jsx'
import DriverRegistration from './components/DriverRegistration.jsx';
// import Dashboard from './components/Dashboard.jsx';
import DriverDatabase from './components/DriverDatabase.jsx';
import Sidebar from './components/Sidebar.jsx';
import CabDatabase from './components/CabDatabase.jsx';
import CabRegistration from './components/CabRegistration.jsx'
import { ToastContainer } from 'react-toastify';
import TripRegistration from './components/TripRegistration.jsx';

const App = () => {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/adminDash" element={<AdminDash />} />
          <Route path="/driverDeets" element={<DriverDeets />} />
          <Route path="/cabDeets" element={<CabDeets />} />
          <Route path="/registerDriver" element={<DriverRegistration/>} />
          <Route path="/registerCab" element={<CabRegistration />} />
          <Route path="/dashboard" element={<Sidebar />} />
          <Route path="/driver-database" element={<DriverDatabase />} />
          <Route path="/cab-database" element={<CabDatabase />} />
          <Route path="/registerTrip" element={<TripRegistration />} />
        </Routes>
      </Router>
      <ToastContainer />
      <Footer />
    </>
  )
}

export default App
