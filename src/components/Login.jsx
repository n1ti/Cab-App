import "./Login.css";
import React from "react";
import Car from "../assets/car.svg";
import glogo from "../assets/glogo.svg"
import GoogleButton from 'react-google-button'


const Login = () => {
    return (

        <div className="float container">
            <div className="float-child">
                <div className="car">
                    <img src={Car} className="caro" />   </div>
            </div>

            <div>

                <GoogleButton className="btnn"
                    onClick={() => { console.log('Google button clicked') }}
                />

            </div>



        </div>
    );
};

export default Login;
