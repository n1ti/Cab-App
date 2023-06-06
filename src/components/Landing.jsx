import "./Landing.css";
import React from "react";
import Car from "../assets/car.svg";

const Landing = () => {
    return (
        // <div className="container">
        //   <div className="maintext-container">
        //     <div className="maintext">
        //       One stop solution to manage your Cabs and Drivers.
        //     </div>
        //     <div className="subtext">
        //       At GEDI, we are dedicated to providing you with a comprehensive
        //       solution to streamline your cab and driver operations.
        //     </div>
        //     <div className="get-started-btn">
        //       <button className="getstartedB">G E T &nbsp; S T A R T E D !</button>
        //     </div>
        //   </div>
        //   <div className="w-9 h-9 objects-contain">
        //     <img src={Car} className="car" />
        //   </div>
        // </div>

        <div className="float container">
            <div class="float-child">
                <div className="maintext"><p>One stop solution to manage <br></br> your Cabs and Drivers.</p></div>
                <div className="subtext"><p>At GEDI, we are dedicated to providing you with a comprehensive solution to streamline your cab and driver operations.</p></div>
                <div className="get-started-btn">
                    <a href="/login"><button className="getstartedB" >G E T &nbsp; S T A R T E D !</button></a>
                </div>
            </div>
            <div className="float-child">
                <div className="car">
                    <img src={Car} className="caro" />   </div>
            </div>

        </div>
    );
};

export default Landing;
