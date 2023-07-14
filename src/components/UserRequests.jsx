import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar.jsx";
import UserReqLine from "./UserReqLine.jsx";
import "./UserRequests.css";
import UserReqData from "../assets/sampleUserReqData.json";

function UserRequests() {
  const userinfo = UserReqData["userinfo"];
  function CreateInfoFile(userinfo, index) {
    const { tripid, cname, driverid, cabid } = userinfo;

    return (
      <UserReqLine
        key={index}
        tripid={tripid}
        cname={cname}
        driverid={driverid}
        cabid={cabid}
      />
    );
  }

  return (
    <div>
      <Sidebar />
      <div className="page">
        <div>
          <div className="heading">USER REQUESTS</div>
          <div className="addDriver">
            <a href="/registerDriver">
              <button>Add Request</button>{" "}
            </a>
          </div>
        </div>
        <div className="databasetable datarows">
          <table className="rowProperties">
            <thead>
              <tr>
                <th className="tableheader tripid">Trip ID</th>
                <th className="tableheader cname">Customer Name</th>
                <th className="tableheader driverid">Driver ID</th>
                <th className="tableheader cabid">Cab ID</th>
                <th className="tableheader op">Operation</th>
              </tr>
            </thead>
            <tbody>
              {userinfo.map(CreateInfoFile)}
              {userinfo.map(CreateInfoFile)}
              {userinfo.map(CreateInfoFile)}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default UserRequests;
