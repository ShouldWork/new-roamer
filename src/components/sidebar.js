import React, { Component } from 'react';
// import './layout/layout.css';
import *  as Logos from "./assests/logos";

const man_list = [
    "Solar 1400w",
    "1080ah Battery bank",
    "MorRyde Air Suspension",
    "4 Seasons","Victron Electrical System"
]
class SidebarHome extends Component {
    render(){
        return (
            <div className="container">
                <div className="logo-container"><img src={Logos.RebootLogo} alt="ROA LOGO"/></div>
                <ul>
                    {man_list.map((item, index) => (
                        <li key={index}>{item}
                    </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default SidebarHome;

