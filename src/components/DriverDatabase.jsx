import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar.jsx";
import DriverDataLine from "./DriverDataLine.jsx";
import "./DriverDatabase.css";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { firebaseConfig } from "../firebase.js";

function DriverDatabase() {
  const [driverdetails, setDriverDetails] = useState([]);

  useEffect(() => {
    initializeApp(firebaseConfig);

    const fetchData = async () => {
      const db = getFirestore();
      const colRef = collection(db, "drivers");
      try {
        const snapshot = await getDocs(colRef);
        const drivers = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setDriverDetails(drivers);
      } catch (error) {
        console.log("Error getting documents: ", error);
      }
    };

    fetchData();
  }, []);

  function CreateDriverFile(driver, index) {
    const {
      firstName,
      lastName,
      phoneNumber,
      emailId,
      registerationDate,
      driverId,
    } = driver;

    return (
      <DriverDataLine
        key={index}
        id={driverId}
        firstname={firstName}
        lastname={lastName}
        phonenumber={phoneNumber}
        emailid={emailId}
        status={registerationDate}
      />
    );
  }

  return (
    <div>
      <Sidebar />
      <div className="page">
        <div>
          <div className="heading">DRIVER DATABASE</div>
          <div className="addDriver">
            <a href="/registerDriver">
              <button>Add Driver</button>{" "}
            </a>
          </div>
        </div>
        <div className="databasetable datarows">
          <table className="rowProperties">
            <thead>
              <tr>
                <th className="tableheader ID">Driver ID</th>
                <th className="tableheader fname">First Name</th>
                <th className="tableheader lname">Last Name</th>
                <th className="tableheader phn">Phone Number</th>
                <th className="tableheader emailid">Email ID</th>
                <th
                  className="tableheader status"
                  style={{ textAlign: "center" }}
                >
                  Status
                </th>
                <th className="tableheader op">Operation</th>
              </tr>
            </thead>
            <tbody>{driverdetails.map(CreateDriverFile)}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DriverDatabase;
