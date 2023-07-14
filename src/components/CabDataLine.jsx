import React from "react";
import DeleteIcon from "../assets/delete.svg";
import EditProfileIcon from "../assets/editprofile.svg";
import "./CabDatabase.css";

function CabDataLine(props) {
  return (
    // <div className="rowProperties">
    <tr className="datarowoutlines">
      <td className="tablerows ID">{props.id}</td>
      <td className="tablerows Model">{props.Model}</td>
      <td className="tablerows Colour">{props.Colour}</td>
      <td className="tablerows LisencePlate">{props.LisencePlate}</td>
      {/* <td className="tablerows status">{props.status}</td> */}
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

export default CabDataLine;
