import React from "react";
import DashboardIcon from "../assets/dashboard-icon.svg";
import DriverIcon from "../assets/driver-icon.svg";
import CabsIcon from "../assets/cabs-icon.svg";
import CalendarIcon from "../assets/calendar-icon.svg";
import RequestsIcon from "../assets/request-icon.svg";
import ProfileIcon from "../assets/profile-icon.svg";
//import Sidebar from "./Sidebar";
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

// Be sure to include styles at some point, probably during your bootstraping
import "./Dashboard.css";
import '@trendmicro/react-sidenav/dist/react-sidenav.css';


const Dashboard = () => {
    return (

        <div>
            <SideNav
                onSelect={(selected) => {
                    // Add your code here
                }}
            >
                <SideNav.Toggle />
                <SideNav.Nav defaultSelected="home" >
                    
                    <NavItem eventKey="home" >
                        <NavIcon>
                            <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                            <img src={DashboardIcon} className="icon2"/>  
                        </NavIcon>
                        <NavText >   
                            Dashboard
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="charts">
                        <NavIcon>
                            <i className="fa fa-fw " style={{ fontSize: '1.75em' }} />
                            <img src={DriverIcon} className="icon1"/> 
                        </NavIcon>
                        <NavText>
                            Driver Database
                        </NavText>
                        {/* <NavItem eventKey="charts/linechart">
                            <NavText>
                                Line Chart
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="charts/barchart">
                            <NavText>
                                Bar Chart
                            </NavText>
                        </NavItem> */}
                    </NavItem>
                    <NavItem  >
                        <NavIcon>
                            <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                            <img src={CabsIcon} className="icon1"/>  
                        </NavIcon>
                        <NavText > 
                             
                            Cabs Database 
                        </NavText>
                    </NavItem>
                    <NavItem  >
                        <NavIcon>
                            <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                            <img src={RequestsIcon} className="icon1"/>  
                        </NavIcon>
                        <NavText >   
                            User Requests
                        </NavText>
                    </NavItem>
                    <NavItem  >
                        <NavIcon>
                            <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                            <img src={CalendarIcon} className="icon1"/>  
                        </NavIcon>
                        <NavText >   
                            Trip History
                        </NavText>
                    </NavItem>
                    <NavItem  >
                        <NavIcon>
                            <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                            <img src={ProfileIcon} className="icon1"/>  
                        </NavIcon>
                        <NavText >   
                            Profile
                        </NavText>
                    </NavItem>
                    
                </SideNav.Nav>
            </SideNav>
            
            

        </div>
    );
};

export default Dashboard;