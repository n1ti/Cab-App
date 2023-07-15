import React, { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc, deleteDoc, doc } from "firebase/firestore";
import Sidebar from "./Sidebar.jsx";
import DashboardReqLine from "./DashboardReqLine.jsx";
import "./Dashboard.css";
import { firebaseConfig } from "../firebase.js";

function Dashboard() {
  const [ongoingTrips, setOngoingTrips] = useState([]);

  useEffect(() => {
    initializeApp(firebaseConfig);

    const fetchData = async () => {
      try {
        const db = getFirestore();
        const reqRef = collection(db, "ongoingTrips");
        const snapshot = await getDocs(reqRef);
        const requests = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setOngoingTrips(requests);
      } catch (error) {
        console.log("Error fetching ongoing trips: ", error);
      }
    };

    fetchData();
  }, []);

  const handleEndTrip = async (tripId) => {
    try {
      const db = getFirestore();
      const tripRef = collection(db, "ongoingTrips");
      const snapshot = await getDocs(tripRef);
      const trips = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      const tripData = trips.find((trip) => trip.tripId === tripId);
  
      console.log("tripId:", tripId);
      console.log("tripData:", tripData);
  
      if (tripData) {
        // Add trip to TripHistory collection
        const tripHistoryRef = collection(db, "TripHistory");
        await addDoc(tripHistoryRef, tripData);
  
        // Delete trip from ongoingTrips collection
        const tripDocRef = doc(db, "ongoingTrips", tripData.id);
        console.log("tripDocRef:", tripDocRef);
        await deleteDoc(tripDocRef);
  
        // Update the ongoingTrips state to reflect the changes
        const updatedTrips = ongoingTrips.filter((trip) => trip.id !== tripData.id);
        console.log("updatedTrips:", updatedTrips);
        setOngoingTrips(updatedTrips);
      }
    } catch (error) {
      console.log("Error ending trip: ", error);
    }
  };
  
  
  
  

  

  return (
    <div>
      <Sidebar />
      <div className="page">
        <div>
          <div className="heading">Ongoing Trips</div>
        </div>
        <div className="databasetable">
          <table className="rowProperties">
            <thead>
              <tr>
                <th className="tableheader tripid">Trip ID</th>
                <th className="tableheader cname">Customer Name</th>
                <th className="tableheader driverid">Driver ID</th>
                <th className="tableheader cabid">Cab ID</th>
                <th className="tableheader op1">Operation</th>
              </tr>
            </thead>
            <tbody>
              {ongoingTrips.map((trip) => (
                <DashboardReqLine
                  key={trip.id}
                  trip={trip} // Pass the whole trip object as prop
                  onEndTrip={handleEndTrip}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
