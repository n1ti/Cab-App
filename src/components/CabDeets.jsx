import "./AdminDash.css";
import React from "react";
import Car from "../assets/car.svg";
import glogo from "../assets/glogo.svg";
import { signInWithGogle } from '../firebase.js';


const DriverDeets = () => {
    return (

        <div className="float container oks">
            <div className="float-child">
            <div className="deets-btn">
                    <a href="/login"><button className="deetsB" >New Cab</button></a>
                </div>
                </div>
                <div className="float-child">
            <div className="deets-btn">
                    <a href="/login"><button className="deetsB" >Edit Cab</button></a>
                </div>
                </div>
                <div className="float-child">
            <div className="deets-btn">
                    <a href="/login"><button className="deetsB" >Cab List</button></a>
                </div>
                </div>
        </div>
    );
};

export default DriverDeets;
