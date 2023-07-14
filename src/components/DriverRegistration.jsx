// import background from "./gridbackground.svg";
import { db } from "../Firebase.js";
import { collection, addDoc, query, where, getDocs} from "firebase/firestore";
import "./driverRegistration.css";
import { useFormik } from "formik"
import { driverSchema } from "./Validations/DriverValidation.js"
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar.jsx";

/*
************TODO************
5. Transfer this code to the dashboard section.
****************************
*/

const DriverRegistration = () => {
  const navigate = useNavigate();
  const {values, errors, touched, isSubmitting, handleChange, handleSubmit, handleBlur} = useFormik ({
    initialValues: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      emailId: "",
      driverId: "",
    },
    validationSchema: driverSchema,
    onSubmit : async (values, actions) => {
      let currentdate = new Date();
      try {
        const q = query(
          collection(db, "drivers"),
          where("phoneNumber", "==", values.phoneNumber)
        )
        const qs = await getDocs(q)
        if(qs.size === 0) {
          const docRef = await addDoc(collection(db, "drivers"), {
            firstName :  values.firstName,
            lastName : values.lastName,
            phoneNumber: values.phoneNumber,
            emailId : values.emailId,
            driverId : values.driverId,
            registerationDate: currentdate.getDate() + "/" + (currentdate.getMonth()+1)  + "/" + currentdate.getFullYear() + ", " + currentdate.getHours() + ":" + currentdate.getMinutes() + ":" + currentdate.getSeconds(),
          });
          if(docRef.id) {
            toast.success('Driver Registered', {position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",})
            actions.resetForm();
            navigate("/driver-database")
          }
        } else {
          // alert("user already registered");
          toast.warning('Driver Already Registered', {position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",});
          actions.resetForm();
          navigate("/driver-database")
        }
      } catch (e) {
        console.log(e);
      }},

  })
  // console.log(errors)
  return (
    <>
    <Sidebar /> 
    <div className="driver-registration-container">
      <form onSubmit={handleSubmit} className="driver-registration-form" >
        <div className="driver-details-form">
          <h1>DRIVER INFORMATION</h1>
          <label>First Name</label>
          <input
            value = {values.firstName}
            onChange={handleChange}
            onBlur={handleBlur}
            type="text"
            id="firstName"
            className={errors.firstName && touched.firstName ? "input-error": ""}
            placeholder="First Name"
          />
          {errors.firstName && touched.firstName && (<p className="error">{errors.firstName}</p>)}
          <label>Last Name</label>
          <input
            value = {values.lastName}
            onChange={handleChange}
            onBlur={handleBlur}
            type="text"
            id="lastName"
            className={errors.lastName && touched.lastName ? "input-error": ""}
            placeholder="Last Name"
          />
          {errors.lastName && touched.lastName && (<p className="error">{errors.lastName}</p>)}
          <label>Phone Number</label>
          <input
            value = {values.phoneNumber}
            onChange={handleChange}
            onBlur={handleBlur}
            type="text"
            id="phoneNumber"
            className={errors.phoneNumber && touched.phoneNumber ? "input-error": ""}
            placeholder="Phone Number"
          />
          {errors.phoneNumber && touched.phoneNumber && (<p className="error">{errors.phoneNumber}</p>)}
          <label>EmailID</label>
          <input
            value = {values.emailId}
            onChange={handleChange}
            onBlur={handleBlur}
            type="email"
            id="emailId"
            className={errors.emailId && touched.emailId ? "input-error": ""}
            placeholder="Driver's valid email address"
          />
          {errors.emailId && touched.emailId && (<p className="error">{errors.emailId}</p>)}
          <label>DriverID</label>
          <input
            value = {values.driverId}
            onChange={handleChange}
            onBlur={handleBlur}
            type="text"
            id="driverId"
            className={errors.driverId && touched.driverId ? "input-error": ""}
            placeholder="Driver's valid ID Number"
          />
          {errors.driverId && touched.driverId && (<p className="error">{errors.driverId}</p>)}
          <button disabled={isSubmitting} type="submit">SUBMIT</button>
        </div>
      </form>
    </div>
    </>
  );
};

export default DriverRegistration;
