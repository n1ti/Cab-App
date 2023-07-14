import React from "react";
import Sidebar from "./Sidebar.jsx";
import DriverDataLine from "./DriverDataLine.jsx";
import DriverData from "../assets/sampledriverdata.json";
import "./DriverDatabase.css";

function DriverDatabase() {
  const driverdetails = DriverData["driver"];

  function CreateDriverFile(driverlist, index) {
    return (
      <DriverDataLine
        key={index}
        id={driverlist[0]}
        firstname={driverlist[1]}
        lastname={driverlist[2]}
        phonenumber={driverlist[3]}
        emailid={driverlist[4]}
        status={driverlist[5]}
      />
    );
  }

  return (
    <div>
      <Sidebar /> 
    <div className="page">
      
      <div>
        <div className="heading">DRIVER DATABASE</div>
        <div className="addDriver">
        <a href="/registerDriver"><button>Add Driver</button>{" "}</a>
        </div>
      </div>
      <div className="databasetable">
        <table className="rowProperties">
          <thead>
            <tr>
              <th className="tableheader ID">Driver ID </th>
              <th className="tableheader fname">First Name</th>
              <th className="tableheader lname">Last Name</th>
              <th className="tableheader phn">Phone Number</th>
              <th className="tableheader emailid">Email ID</th>
              <th className="tableheader status">Status</th>
              <th className="tableheader op">Operation</th>
            </tr>
          </thead>
          <tbody>{driverdetails.map(CreateDriverFile)}</tbody>
        </table>
      </div>
    </div>
    </div>
    
  );
}

export default DriverDatabase;

