import "./AdminDash.css";
import React from "react";
import Car from "../assets/car.svg";
import glogo from "../assets/glogo.svg";
import { signInWithGogle } from '../firebase.js';


const AdminDash = () => {
    return (

        <div className="float container oks">
            <div className="float-child">
            <div className="deets-btn">
                    <a href="/driverDeets"><button className="deetsB" >Driver Details</button></a>
                </div>
                </div>
                <div className="float-child">
            <div className="deets-btn">
                    <a href="/cabDeets"><button className="deetsB" >Cab Details</button></a>
                </div>
                </div>
                <div className="float-child">
            <div className="deets-btn">
                    <a href="/login"><button className="deetsB" >User Details</button></a>
                </div>
                </div>
        </div>
    );
};

export default AdminDash;
