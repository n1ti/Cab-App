import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar.jsx";
import TripLine from "./TripLines.jsx";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../firebase.js";
import "./TripHistory.css";

function TripHistory() {
  const [ongoingTrips, setOngoingTrips] = useState([]);

  useEffect(() => {
    initializeApp(firebaseConfig);
    const db = getFirestore();

    const fetchOngoingTrips = async () => {
      try {
        const tripRef = collection(db, "ongoingTrips");
        const snapshot = await getDocs(tripRef);
        const tripsData = snapshot.docs.map((doc) => doc.data());
        setOngoingTrips(tripsData);
      } catch (error) {
        console.log("Error fetching ongoing trips: ", error);
      }
    };

    fetchOngoingTrips();
  }, []);

  return (
    <div>
      <Sidebar />
      <div className="page">
        <div>
          <div className="heading">TRIP HISTORY</div>
        </div>
        <div className="databasetable">
          <table className="rowProperties">
            <thead>
              <tr>
                <th className="tableheader tripid">Trip ID</th>
                <th className="tableheader cname">Customer Name</th>
                <th className="tableheader driverid">Driver ID</th>
                <th className="tableheader cabid">Cab ID</th>
              </tr>
            </thead>
            <tbody>
              {ongoingTrips.map((trip, index) => (
                <TripLine
                  key={index}
                  tripid={trip.tripId}
                  cname={trip.customerName}
                  driverid={trip.driverId}
                  cabid={trip.carId}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default TripHistory;
