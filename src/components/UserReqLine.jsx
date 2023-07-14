import React from "react";
import DeleteIcon from "../assets/delete.svg";
import EditProfileIcon from "../assets/editprofile.svg";
import "./UserRequests.css";

function UserReqLine(props) {
  return (
    <tr className="datarowoutlines">
      <td className="tablerows tripid">{props.tripid}</td>
      <td className="tablerows cname">{props.cname}</td>
      <td className="tablerows driverid">{props.driverid}</td>
      <td className="tablerows cabid">{props.cabid}</td>
      <td className="tablerows op">
        <div>
          <button className="activeBtn">Start Trip</button>
        </div>
      </td>
    </tr>
  );
}

export default UserReqLine;
