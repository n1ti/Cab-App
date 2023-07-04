import background from './gridbackground.svg'
import './driverRegistration.css'

const DriverRegistration = () => {
  return (
    <div className="driver-registration-container">
      <div className="driver-details-form">
        <h1>DRIVER INFORMATION</h1>
        <label>First Name</label>
        <input type="text" className='' placeholder='First Name'/>
        <label>Last Name</label>
        <input type="text" className='' placeholder='Last Name'/>
        <label>Phone Number</label>
        <input type="text" className='' placeholder='Phone Number'/>
        <label>EmailID</label>
        <input type="text" className='' placeholder="Driver's valid email address"/>
        <label>DriverID</label>
        <input type="text" className='' placeholder="Driver's valid ID Number"/>
        <button>SUBMIT</button>
      </div>
      
    </div>
  )
}

export default DriverRegistration