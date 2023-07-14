import React from "react";
import Sidebar from "./Sidebar.jsx";
import CabDataLine from "./CabDataLine.jsx";
import CabData from "../assets/samplecabdata.json";
import "./CabDatabase.css";
import { Link } from "react-router-dom";

function CabDatabase() {
  const cabdetails = CabData["cab"];

  function CreateCabFile(cablist, index) {
    return (
      <CabDataLine
        key={index}
        id={cablist[0]}
        Model={cablist[1]}
        Colour={cablist[2]}
        LisencePlate={cablist[3]}
        // emailid={cablist[4]}
        status={cablist[5]}
      />
    );
  }

  return (
    <div>
      <Sidebar /> 
    <div className="page">
      
      <div>
        <div className="heading">CAB DATABASE</div>
        <div className="addDriver">
          <Link to="/registerCab"><button>Add Cab</button>{" "}</Link>
        </div>
      </div>
      <div className="databasetable">
        <table className="rowProperties">
          <thead>
            <tr>
              <th className="tableheader ID">Cab ID </th>
              <th className="tableheader Model">Model</th>
              <th className="tableheader Colour">Colour</th>
              <th className="tableheader LisencePlate">Lisence Plate</th>
              {/* <th className="tableheader emailid">Email ID</th> */}
              <th className="tableheader status">Status</th>
              <th className="tableheader op">Operation</th>
            </tr>
          </thead>
          <tbody>{cabdetails.map(CreateCabFile)}</tbody>
        </table>
      </div>
    </div>
    </div>
    
  );
}

export default CabDatabase;
