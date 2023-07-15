import React, { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc, deleteDoc, doc } from "firebase/firestore";
import Sidebar from "./Sidebar.jsx";
import UserReqLine from "./UserReqLine.jsx";
import "./UserRequests.css";
import { firebaseConfig } from "../firebase.js";

function UserRequests() {
  const [userRequests, setUserRequests] = useState([]);

  useEffect(() => {
    initializeApp(firebaseConfig);

    const fetchData = async () => {
      try {
        const db = getFirestore();
        const reqRef = collection(db, "trips");
        const snapshot = await getDocs(reqRef);
        const requests = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setUserRequests(requests);
      } catch (error) {
        console.log("Error fetching user requests: ", error);
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
  
      if (tripData) {
        // Add trip to TripHistory collection
        const tripHistoryRef = collection(db, "TripHistory");
        await addDoc(tripHistoryRef, tripData);
  
        // Delete trip from ongoingTrips collection
        const tripDocRef = doc(db, "ongoingTrips", tripData.id);
        await deleteDoc(tripDocRef);
  
        // Update the ongoingTrips state to reflect the changes
        const updatedTrips = ongoingTrips.filter((trip) => trip.tripId !== tripId);
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
          <div className="heading">USER REQUESTS</div>
          <div className="addDriver">
            <a href="/registerTrip">
              <button>Add Request</button>
            </a>
          </div>
        </div>
        <div className="databasetable">
          <table className="rowProperties">
            <thead>
              <tr>
                <th className="tableheader tripid">Trip ID</th>
                <th className="tableheader cname">Customer Name</th>
                <th className="tableheader driverid">Driver ID</th>
                <th className="tableheader cabid">Cab ID</th>
                <th className="tableheader op">Operation</th>
              </tr>
            </thead>
            <tbody>
              {userRequests.map((request) => (
                <UserReqLine
                  key={request.id}
                  tripId={request.id}
                  cname={request.customerName}
                  driverId={request.driverId}
                  cabId={request.carId}
                  onStartTrip={handleStartTrip}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default UserRequests;
