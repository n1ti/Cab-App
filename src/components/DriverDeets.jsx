import "./AdminDash.css";
import React from "react";
import Car from "../assets/car.svg";
import glogo from "../assets/glogo.svg";
import { signInWithGogle } from '../firebase.js';
import Sidebar from "./Sidebar";


const DriverDeets = () => {
    return (
        

        <div className="float container oks">
            <Sidebar />
            <div className="float-child">
            <div className="deets-btn">
                    <a href="/login"><button className="deetsB" >New Driver</button></a>
                </div>
                </div>
                <div className="float-child">
            <div className="deets-btn">
                    <a href="/login"><button className="deetsB" >Edit Driver</button></a>
                </div>
                </div>
                <div className="float-child">
            <div className="deets-btn">
                    <a href="/login"><button className="deetsB" >Driver List</button></a>
                </div>
                </div>
        </div>
    );
};

export default DriverDeets;
