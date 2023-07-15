import React from "react";
import DeleteIcon from "../assets/delete.svg";
import EditProfileIcon from "../assets/editprofile.svg";
import "./CabDatabase.css";
import { db } from "../Firebase.js";
import { collection, query, where, getDocs} from "firebase/firestore";
import { useEffect, useState } from "react";

function CabDataLine(props) {
  const [status, setStatus] = useState(false)
  useEffect(() => {
    const queryStatus = async () => {
      try {
        const trips_cabId_query = query(
          collection(db, "trips"),
          where("carId", "==", props.carId)
        )
        const ongoingTrips_cabId_query = query(
          collection(db, "ongoingTrips"),
          where("carId", "==", props.carId)
        )
        const trips_cabId_query_snapshot = await getDocs(trips_cabId_query)
        const ongoingTrips_cabId_query_snapsnot = await getDocs(ongoingTrips_cabId_query)
        if(trips_cabId_query_snapshot.empty && ongoingTrips_cabId_query_snapsnot.empty) {
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
      <td className="tablerows ID">{props.carId}</td>
      <td className="tablerows carBrand">{props.carBrand}</td>
      <td className="tablerows carCapacity">{props.carCapacity}</td>
      <td className="tablerows carModel">{props.carModel}</td>
      <td className="tablerows registrationNumber">{props.registrationNumber}</td>
      {/* <td className="tablerows status">{props.registerationDate}</td> {/* Update the prop name here */}
      <td className="tablerows statushead">
        {status == false ? (
          <div className="activeBtn">Active</div>
        ) : (
          <div className="inactiveBtn">Inactive</div>
        )}
      </td>
      <td className="tablerows op">
        <div>
          <div className="icons">
            <img src={EditProfileIcon} className="icons1" alt="Edit" />
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
