// import background from "./gridbackground.svg";
import { db } from "../Firebase.js";
import { collection, addDoc, query, where, getDocs} from "firebase/firestore";
import "./cabRegistration.css";
import { useFormik } from "formik"
import { cabSchema } from "./Validations/CabValidation.js"
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar.jsx";

const CabRegistration = () => {
  const navigate = useNavigate();
  const {values, errors, touched, isSubmitting, handleChange, handleSubmit, handleBlur} = useFormik ({
    initialValues: {
      carModel: "",
      carBrand: "",
      carCapacity: "",
      registrationNumber: "",
      carId: "",
    },
    validationSchema: cabSchema,
    onSubmit : async (values, actions) => {
        console.log(values);
      let currentdate = new Date();
      try {
        const q = query(
          collection(db, "cabs"),
          where("registrationNumber", "==", values.registrationNumber)
        )
        const qs = await getDocs(q)
        if(qs.size === 0) {
          const docRef = await addDoc(collection(db, "cabs"), {
            carModel :  values.carModel,
            carBrand : values.carBrand,
            carCapacity: values.carCapacity,
            registrationNumber : values.registrationNumber,
            carId : values.carId,
            registerationDate: currentdate.getDate() + "/" + (currentdate.getMonth()+1)  + "/" + currentdate.getFullYear() + ", " + currentdate.getHours() + ":" + currentdate.getMinutes() + ":" + currentdate.getSeconds(),
          });
          if(docRef.id) {
            toast.success('Cab Registered', {position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",})
            actions.resetForm();
            navigate("/cab-database");
          }
        } else {
          toast.warning('Cab Already Registered', {position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",});
          actions.resetForm();
          navigate("/cab-database");
        }
      } catch (e) {
        console.log(e);
      }},

  })
//   console.log(errors)
  return (
    <>
    <Sidebar />
    <div className="cab-registration-container">
      <form onSubmit={handleSubmit} className="cab-registration-form" >
        <div className="cab-details-form">
          <h1>CAB INFORMATION</h1>
          <label>Cab Model</label>
          <input
            value = {values.carModel}
            onChange={handleChange}
            onBlur={handleBlur}
            type="text"
            id="carModel"
            className={errors.carModel && touched.carModel ? "input-error": ""}
            placeholder="Cab Model"
          />
          {errors.carModel && touched.carModel && (<p className="error">{errors.carModel}</p>)}
          <label>Cab Brand</label>
          <input
            value = {values.carBrand}
            onChange={handleChange}
            onBlur={handleBlur}
            type="text"
            id="carBrand"
            className={errors.carBrand && touched.carBrand ? "input-error": ""}
            placeholder="Cab Brand"
          />
          {errors.carBrand && touched.carBrand && (<p className="error">{errors.carBrand}</p>)}
          <label>Cab Capacity</label>
          <input
            value = {values.carCapacity}
            onChange={handleChange}
            onBlur={handleBlur}
            type="number"
            id="carCapacity"
            className={errors.carCapacity && touched.carCapacity ? "input-error": ""}
            placeholder="Cab capacity"
          />
          {errors.carCapacity && touched.carCapacity && (<p className="error">{errors.carCapacity}</p>)}
          <label>Registration Number</label>
          <input
            value = {values.registrationNumber}
            onChange={handleChange}
            onBlur={handleBlur}
            type="text"
            id="registrationNumber"
            className={errors.registrationNumber && touched.registrationNumber ? "input-error": ""}
            placeholder="Cab Registration Number"
          />
          {errors.registrationNumber && touched.registrationNumber && (<p className="error">{errors.registrationNumber}</p>)}
          <label>CabID</label>
          <input
            value = {values.carId}
            onChange={handleChange}
            onBlur={handleBlur}
            type="text"
            id="carId"
            className={errors.carId && touched.carId ? "input-error": ""}
            placeholder="Cab ID"
          />
          {errors.carId && touched.carId && (<p className="error">{errors.carId}</p>)}
          <button disabled={isSubmitting} type="submit">SUBMIT</button>
        </div>
      </form>
    </div>
    </>
  );
};

export default CabRegistration;
