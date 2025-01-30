import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import './layout.css'
import MDCLOGO from './MDCLOGO.png'
import ROALOGO from './ROALOGO1.png'
import RebootLogo from './Reboot_Logo.png'
import SidebarHome from '../sidebar'

class Layout extends Component {
    render(){
      return (
        <div className="layout-container">
            <SidebarHome />
            <div className="container">
                <div className='welcome'> 
                    <h1 style={{margin: 0, paddingBottom:0}}>Welcome our new Roamer!</h1>
                    <h3 style={{textAlign: "center", margin: 0, fontSize:"smaller",color:"rgba(255,255,255,.8)"}}>Together we inspire others to achieve extraordinary excellence through belief, change, and progress!</h3>
                </div>
                <div className='roamer-name'>
                    <h2>Ritchie Rummel </h2>
                    <h2>Bobby Lee</h2>
                </div>
                <div className="broll">
                    <div className='player-wrapper'>
                        {/* <img src='https://www.rvsofamerica.com/wp-content/uploads/2024/02/1B9A0749.jpeg'></img> */}
                        {/* <ReactPlayer
                            className='react-player'
                            url='https://www.youtube.com/watch?v=j7FPy64KYq4'
                            width='100%'
                            height='100%'
                        /> */}
                    </div>
                </div>
            </div>
            <div className="container">
               <div class="logo-container"> <img src={ROALOGO} alt="ROALOGO"/></div>
                <ul>
                    <li>Starlink Installation</li>
                    <li>Outdoor Kitchen</li>
                    <li>DC\DC Anderson Connection</li>
                    
                </ul>
            </div>
        </div>
        ) 
    }
}

export default Layout; 