// import background from "./gridbackground.svg";
import { db } from "../Firebase.js";
import { collection, addDoc } from "firebase/firestore";
import "./driverRegistration.css";
import { useState, useEffect } from "react";

/*
************TODO************
1. Check if user is already registered through registered phone number.
2. Add registration confirmation page.
3. Form validation of input (need to find appropriate library).
4. Add error messages for form validations and server side errors in firebase functions
5. Transfer this code to the dashboard section.
****************************
*/




const DriverRegistration = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [emailId, setEmailId] = useState("");
  const [driverId, setDriverId] = useState("");
  const [registered, setRegistered] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(firstName !== "" && lastName !== "" && phoneNumber !== "" && emailId !== "" && driverId !== "") {
      let currentdate = new Date();
      await addDoc(collection(db, "todos"), {
        firstName,
        lastName,
        phoneNumber,
        emailId,
        driverId,
        registerationDate: currentdate.getDate() + "/" + (currentdate.getMonth()+1)  + "/" + currentdate.getFullYear() + ", " + currentdate.getHours() + ":" + currentdate.getMinutes() + ":" + currentdate.getSeconds(),
      });
      setFirstName("");
      setLastName("");
      setPhoneNumber("");
      setEmailId("");
      setDriverId("");
    }
  };
  return (
    <div className="driver-registration-container">
      <form onSubmit={handleSubmit}>
        <div className="driver-details-form">
          <h1>DRIVER INFORMATION</h1>
          <label>First Name</label>
          <input
            type="text"
            className=""
            placeholder="First Name"
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
          <label>Last Name</label>
          <input
            type="text"
            className=""
            placeholder="Last Name"
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
          <label>Phone Number</label>
          <input
            type="text"
            className=""
            placeholder="Phone Number"
            onChange={(e) => {
              setPhoneNumber(e.target.value);
            }}
          />
          <label>EmailID</label>
          <input
            type="email"
            className=""
            placeholder="Driver's valid email address"
            onChange={(e) => {
              setEmailId(e.target.value);
            }}
          />
          <label>DriverID</label>
          <input
            type="text"
            className=""
            placeholder="Driver's valid ID Number"
            onChange={(e) => {
              setDriverId(e.target.value);
            }}
          />
          <button>SUBMIT</button>
        </div>
      </form>
    </div>
  );
};

export default DriverRegistration;
