import React from "react";
import "./UserRequests.css";

function UserReqLine({ tripId, cname, driverId, cabId, onStartTrip }) {
  const handleStartTripClick = () => {
    onStartTrip(tripId);
  };

  return (
    <tr className="datarowoutlines">
      <td className="tablerows tripid">{tripId}</td>
      <td className="tablerows cname">{cname}</td>
      <td className="tablerows driverid">{driverId}</td>
      <td className="tablerows cabid">{cabId}</td>
      <td className="tablerows op">
        <div>
          <button className="activeBtn" onClick={handleStartTripClick}>
            Start Trip
          </button>
        </div>
      </td>
    </tr>
  );
}

export default UserReqLine;
