import React from "react";
import DeleteIcon from "../assets/delete.svg";
import EditProfileIcon from "../assets/editprofile.svg";
import "./DriverDatabase.css";

function DriverDataLine(props) {
  return (
    // <div className="rowProperties">
    <tr className="datarowoutlines">
      <td className="tablerows ID">{props.id}</td>
      <td className="tablerows fname">{props.firstname}</td>
      <td className="tablerows lname">{props.lastname}</td>
      <td className="tablerows phn">{props.phonenumber}</td>
      <td className="tablerows emailid">{props.emailid}</td>
      <td className="tablerows status">
        {props.status == 1 ? (
          <div className="activeBtn">Active</div>
        ) : (
          <div className="inactiveBtn">Inactive</div>
        )}
      </td>
      <td className="tablerows op">
        <div>
          <div className="icons">
            <img src={EditProfileIcon} className="icons2" />
          </div>
          <div className="icons">
            <img src={DeleteIcon} className="icons2" />
          </div>
        </div>
      </td>
    </tr>
    // </div>
  );
}

export default DriverDataLine;
