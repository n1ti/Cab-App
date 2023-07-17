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

  const handleStartTrip = async (tripId) => {
    try {
      const db = getFirestore();
      const tripRef = collection(db, "trips");
      const snapshot = await getDocs(tripRef);
      const trips = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      const tripData = trips.find((trip) => trip.id === tripId);

      if (tripData) {
        // Add trip to ongoingTrips collection
        const ongoingTripsRef = collection(db, "ongoingTrips");
        await addDoc(ongoingTripsRef, tripData);

        // Delete trip from trips collection
        const tripDocRef = doc(db, "trips", tripId);
        await deleteDoc(tripDocRef);

        // Update the userRequests state to reflect the changes
        const updatedRequests = userRequests.filter((request) => request.id !== tripId);
        setUserRequests(updatedRequests);
      }
    } catch (error) {
      console.log("Error starting trip: ", error);
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
                <th className="tableheader op1">Operation</th>
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
