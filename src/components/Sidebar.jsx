import React, { useState } from "react";
import "./Sidebar.css";

import dashboardIcon from "../assets/dashboard-icon.svg";
import driverIcon from "../assets/driver-icon.svg";
import cabsIcon from "../assets/cabs-icon.svg";
import requestIcon from "../assets/request-icon.svg";
import calendarIcon from "../assets/calendar-icon.svg";
import profileIcon from "../assets/profile-icon.svg";
import menuIcon from "../assets/three-dots-svgrepo-com.svg";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(true);

  const handleToggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      <div className="toggle-btn" onClick={handleToggle}>
        <div className={`toggle-icon ${collapsed ? "collapsed" : ""}`}>
          <img src={menuIcon} />
        </div>
      </div>
      <nav>
        <ul>
          <li>
            <a href="#" className="pop">
              <img src={dashboardIcon} alt="Dashboard" className="icon" />
              {!collapsed && <span>Dashboard</span>}
            </a>
          </li>
          <li>
            <a href="/driver-database" className="pop">
              <img src={driverIcon} alt="Driver Database" className="icon" />
              {!collapsed && <span>Driver Database</span>}
            </a>
          </li>
          <li>
            <a href="/cab-database" className="pop">
              <img src={cabsIcon} alt="Cabs Database" className="icon" />
              {!collapsed && <span>Cabs Database</span>}
            </a>
          </li>
          <li>
            <a href="#" className="pop">
              <img src={requestIcon} alt="User Requests" className="icon" />
              {!collapsed && <span>User Requests</span>}
            </a>
          </li>
          <li>
            <a href="#" className="pop">
              <img src={calendarIcon} alt="Trip History" className="icon" />
              {!collapsed && <span>Trip History</span>}
            </a>
          </li>
          <li>
            <a href="#" className="pop">
              <img src={profileIcon} alt="Profile" className="icon" />
              {!collapsed && <span>Profile</span>}
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
