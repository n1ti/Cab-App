import React from "react";
import "./TripHistory.css";

function TripLine({ tripid, cname, driverid, cabid }) {
  return (
    <tr className="datarowoutlines">
      <td className="tablerows tripid">{tripid}</td>
      <td className="tablerows cname">{cname}</td>
      <td className="tablerows driverid">{driverid}</td>
      <td className="tablerows cabid">{cabid}</td>
    </tr>
  );
}

export default TripLine;
