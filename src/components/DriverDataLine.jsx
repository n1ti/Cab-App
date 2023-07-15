import React from "react";
import DeleteIcon from "../assets/delete.svg";
import EditProfileIcon from "../assets/editprofile.svg";
import "./DriverDatabase.css";
import { db } from "../Firebase.js";
import { collection, query, where, getDocs} from "firebase/firestore";
import { useEffect, useState } from "react";

function DriverDataLine(props) {
  const [status, setStatus] = useState(false)
  useEffect(() => {
    const queryStatus = async () => {
      try {
        const trips_driverId_query = query(
          collection(db, "trips"),
          where("driverId", "==", props.id)
        )
        const ongoingTrips_driverId_query = query(
          collection(db, "ongoingTrips"),
          where("driverId", "==", props.id)
        )
        const trips_driverId_query_snapshot = await getDocs(trips_driverId_query)
        const ongoingTrips_driverId_query_snapsnot = await getDocs(ongoingTrips_driverId_query)
        if(trips_driverId_query_snapshot.empty && ongoingTrips_driverId_query_snapsnot.empty) {
          setStatus(true)
        }
      } catch (e) {
        console.log(e);
      }
    }
    queryStatus();
  })
  return (
    <tr className="datarowoutlines">
      <td className="tablerows ID">{props.id}</td>
      <td className="tablerows fname">{props.firstname}</td>
      <td className="tablerows lname">{props.lastname}</td>
      <td className="tablerows phn">{props.phonenumber}</td>
      <td className="tablerows emailid">{props.emailid}</td>
      <td className="tablerows status">
        {status == false ? (
          <div className="activeBtn">Active</div>
        ) : (
          <div className="inactiveBtn">Inactive</div>
        )}
      </td>
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
