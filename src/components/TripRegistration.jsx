import React, { useEffect } from 'react'
import { db } from "../firebase.js";
import { collection, addDoc, query, where, getDocs} from "firebase/firestore";
import { useFormik } from "formik"
import { tripSchema } from "./Validations/TripValidation.js"
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar.jsx";
import './tripRegistration.css'

const TripRegistration = () => {
    const navigate = useNavigate();
    const {values, errors, touched, isSubmitting, handleChange, handleSubmit, handleBlur} = useFormik ({
      initialValues: {
        tripId: "",
        customerName: "",
        driverId: "",
        carId: "",
      },
      validationSchema: tripSchema,
      onSubmit : async (values, actions) => {
        try {
          const trips_driverId_query = query(
            collection(db, "trips"),
            where("driverId", "==", values.driverId)
          )
          const trips_carId_query = query(
            collection(db, "trips"), 
            where("carId", "==", values.carId)
          )
          const trips_tripId_query = query(
            collection(db, "trips"),
            where("tripId", "==", values.tripId)
          )
          const ongoingTrips_driverId_query = query(
            collection(db, "ongoingTrips"),
            where("driverId", "==", values.driverId)
          )
          const ongoingTrips_carId_query = query(
            collection(db, "ongoingTrips"),
            where("carId", "==", values.carId)
          )
          const ongoingTrips_tripId_query = query(
            collection(db, "ongoingTrips"),
            where("tripId", "==", values.tripId)
          )
          const trips_carId_query_snapshot = await getDocs(trips_carId_query)
          const trips_driverId_query_snapshot = await getDocs(trips_driverId_query)
          const trips_tripId_query_snapshot = await getDocs(trips_tripId_query)
          const ongoingTrips_carId_query_snapshot = await getDocs(ongoingTrips_carId_query)
          const ongoingTrips_driverId_query_snapsnot = await getDocs(ongoingTrips_driverId_query)
          const ongoingTrips_tripId_query_snapshot = await getDocs(ongoingTrips_tripId_query)
          if(trips_tripId_query_snapshot.empty && trips_driverId_query_snapshot.empty && trips_carId_query_snapshot.empty && ongoingTrips_carId_query_snapshot.empty && ongoingTrips_driverId_query_snapsnot.empty && ongoingTrips_tripId_query_snapshot.empty) {
            const docRef = await addDoc(collection(db, "trips"), {
              tripId :  values.tripId,
              customerName : values.customerName,
              driverId: values.driverId,
              carId : values.carId,
              status : 0,
            });
            if(docRef.id) {
              toast.success('Trip Registered', {position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",})
              actions.resetForm();
              navigate("/user-requests")
            }
          } else {
            // alert("user already registered");
            if(!trips_tripId_query_snapshot.empty || !ongoingTrips_tripId_query_snapshot.empty) {
                toast.warning('Trip already exists', {position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",});
            }
            if(!trips_driverId_query_snapshot.empty || !ongoingTrips_driverId_query_snapsnot.empty) {
                toast.warning('Driver is currently assigned another trip', {position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",});
            }
            if(!trips_carId_query_snapshot.empty || !ongoingTrips_carId_query_snapshot.empty) {
                toast.warning('Cab is currently assigned another trip', {position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",});
            }
            // actions.resetForm();
            // navigate("/driver-database")
          }
      } catch (e) {
        console.log(e);
      }},
  })
  useEffect(() => {
    console.log(values.tripId);
  },[values.tripId])
  return (
    <>
    <Sidebar /> 
    <div className="trip-registration-container">
      <form onSubmit={handleSubmit} className="trip-registration-form" >
        <div className="trip-details-form">
          <h1>TRIP REGISTRATION</h1>
          <label>TripID</label>
          <input
            value = {values.tripId}
            onChange={handleChange}
            onBlur={handleBlur}
            type="text"
            id="tripId"
            className={errors.tripId && touched.tripId ? "input-error": ""}
            placeholder="TripID"
          />
          {errors.tripId && touched.tripId && (<p className="error">{errors.tripId}</p>)}
          <label>Customer Name</label>
          <input
            value = {values.customerName}
            onChange={handleChange}
            onBlur={handleBlur}
            type="text"
            id="customerName"
            className={errors.customerName && touched.customerName ? "input-error": ""}
            placeholder="Customer Name"
          />
          {errors.customerName && touched.customerName && (<p className="error">{errors.customerName}</p>)}
          <label>DriverID</label>
          <input
            value = {values.driverId}
            onChange={handleChange}
            onBlur={handleBlur}
            type="text"
            id="driverId"
            className={errors.driverId && touched.driverId ? "input-error": ""}
            placeholder="DriverID"
          />
          {errors.driverId && touched.driverId && (<p className="error">{errors.driverId}</p>)}
          <label>CabId</label>
          <input
            value = {values.carId}
            onChange={handleChange}
            onBlur={handleBlur}
            type="text"
            id="carId"
            className={errors.carId && touched.carId ? "input-error": ""}
            placeholder="carId"
          />
          {errors.carId && touched.carId && (<p className="error">{errors.carId}</p>)}
          <button disabled={isSubmitting} type="submit">SUBMIT</button>
        </div>
      </form>
    </div>
    </>
  )
}

export default TripRegistration