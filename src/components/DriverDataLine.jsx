import React from "react";
import DeleteIcon from "../assets/delete.svg";
import EditProfileIcon from "../assets/editprofile.svg";
import "./DriverDatabase.css";

function DriverDataLine(props) {
  return (
    <tr className="datarowoutlines">
      <td className="tablerows ID">{props.id}</td>
      <td className="tablerows fname">{props.firstname}</td>
      <td className="tablerows lname">{props.lastname}</td>
      <td className="tablerows phn">{props.phonenumber}</td>
      <td className="tablerows emailid">{props.emailid}</td>
      <td className="tablerows status">{props.status}</td>
      <td className="tablerows op">
        <div>
          <div className="icons">
            <img src={EditProfileIcon} alt="Edit Profile" className="icons2" />
          </div>
          <div className="icons">
            <img src={DeleteIcon} alt="Delete" className="icons2" />
          </div>
        </div>
      </td>
    </tr>
  );
}

export default DriverDataLine;
