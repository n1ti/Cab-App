import "./login.css";
import React from "react";
import Car from "../assets/car.svg";
import glogo from "../assets/glogo.svg";
import { signInWithGogle } from '../firebase.js';


const Login = () => {
    return (

        <div className="float container">
            <div className="float-child">
                <div className="car">
                    <img src={Car} className="caro" />   
                </div>
            </div>
            <div className="float-child">
                <button className="google-button" onClick={signInWithGogle}></button>

                    <hr className="line1" />
                    <p className="or-features">or</p>
                    <hr className="line2" />
                
                <button className="apple-button"></button>
            </div>
        </div>
    );
};

export default Login;
