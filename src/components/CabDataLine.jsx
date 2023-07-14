import React from "react";
import DeleteIcon from "../assets/delete.svg";
import EditProfileIcon from "../assets/editprofile.svg";
import "./CabDatabase.css";

function CabDataLine(props) {
  return (
    <tr className="datarowoutlines">
      <td className="tablerows ID">{props.carId}</td>
      <td className="tablerows carBrand">{props.carBrand}</td>
      <td className="tablerows carCapacity">{props.carCapacity}</td>
      <td className="tablerows carModel">{props.carModel}</td>
      <td className="tablerows registrationNumber">{props.registrationNumber}</td>
      {/* <td className="tablerows status">{props.registerationDate}</td> {/* Update the prop name here */} */}
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
            <img src={EditProfileIcon} className="icons2" alt="Edit" />
          </div>
          <div className="icons">
            <img src={DeleteIcon} className="icons2" alt="Delete" />
          </div>
        </div>
      </td>
    </tr>
  );
}

export default CabDataLine;
