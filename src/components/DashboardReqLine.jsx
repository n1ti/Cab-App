import React from "react";
import "./Dashboard.css";

function DashboardReqLine({ trip, onEndTrip }) {
  const handleEndTripClick = () => {
    onEndTrip(trip.tripId); // Pass the tripId to the onEndTrip function
  };

  return (
    <tr className="datarowoutlines">
      <td className="tablerows tripid">{trip.tripId}</td>
      <td className="tablerows cname">{trip.customerName}</td>
      <td className="tablerows driverid">{trip.driverId}</td>
      <td className="tablerows cabid">{trip.carId}</td>
      <td className="tablerows op1">
        <div>
          <button className="activeBtn" onClick={handleEndTripClick}>
            End Trip
          </button>
        </div>
      </td>
    </tr>
  );
}

export default DashboardReqLine;
