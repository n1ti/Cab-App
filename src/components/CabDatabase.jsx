import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar.jsx";
import CabDataLine from "./CabDataLine.jsx";
import "./CabDatabase.css";
import { Link } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { firebaseConfig } from "../firebase.js";

function CabDatabase() {
  const [cabdetails, setCabDetails] = useState([]);

  useEffect(() => {
    initializeApp(firebaseConfig);

    const fetchData = async () => {
      const db = getFirestore();
      const colRef = collection(db, "cabs");

      try {
        const snapshot = await getDocs(colRef);
        const cabs = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setCabDetails(cabs);
      } catch (error) {
        console.log("Error getting documents: ", error);
      }
    };

    fetchData();
  }, []);

  function CreateCabFile(cab, index) {
    const {
      carId,
      carBrand,
      carCapacity,
      carModel,
      registrationNumber, // Update the prop name here
      registerationDate,
    } = cab;

    return (
      <CabDataLine
        key={index}
        carId={carId}
        carBrand={carBrand}
        carCapacity={carCapacity}
        carModel={carModel}
        registrationNumber={registrationNumber} // Update the prop name here
        status={registerationDate}
      />
    );
  }

  return (
    <div>
      <Sidebar />
      <div className="page">
        <div>
          <div className="heading">CAB DATABASE</div>
          <div className="addDriver">
            <a href="/registerCab">
              <button>Add Cab</button>{" "}
            </a>
          </div>
        </div>
        <div className="databasetable datarows">
          <table className="rowProperties">
            <thead>
              <tr>
                <th className="tableheader ID">Cab ID</th>
                <th className="tableheader carBrand">Cab Brand</th>
                <th className="tableheader carCapacity">Cab Capacity</th>
                <th className="tableheader carModel">Cab Model</th>
                <th className="tableheader registrationNumber">
                  License Plate
                </th>
                <th
                  className="tableheader status"
                  style={{ textAlign: "center" }}
                >
                  Status
                </th>
                <th className="tableheader op">Operation</th>
              </tr>
            </thead>
            <tbody>{cabdetails.map(CreateCabFile)}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default CabDatabase;
