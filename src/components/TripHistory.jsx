import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar.jsx";
import TripLine from "./TripLines.jsx";
import TripsInfo from "../assets/sampletripdata.json";
import "./TripHistory.css";

function TripHistory() {
  const trips = TripsInfo["trips"];
  function CreateTripFile(trip, index) {
    const { tripid, cname, driverid, cabid } = trip;

    return (
      <TripLine
        key={index}
        tripid={tripid}
        cname={cname}
        driverid={driverid}
        cabid={cabid}
      />
    );
  }

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
            <tbody>{trips.map(CreateTripFile)}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
export default TripHistory;
