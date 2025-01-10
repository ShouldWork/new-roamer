import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import './layout.css'
import MDCLOGO from './MDCLOGO.png'
import ROALOGO from './ROALOGO1.png'

class Layout extends Component {
    render(){
      return (
        <div class="layout-container">
            <div class="container">
                <div><img src={MDCLOGO} alt="MDCLOGO"/></div>
                <ul>
                    <li>Solar</li>
                    <li>Battery Bank</li>
                    <li>Clearance</li>
                    <li>Propane</li>
                    <li>Inverter</li>
                    <li>AC</li>
                    <li>((General Features))</li>
                </ul>
            </div>
            <div class="container">
                <h1 style={{marginBottom: 0, paddingBottom:0}}>Welcome our new Roamer!</h1>
                <h3 style={{textAlign: "center", margin: 0, fontSize:"smaller",color:"rgba(255,255,255,.8)"}}>Together we inspire others to achieve extraordinary excellence through belief, change, and progress!</h3>
                <h2>Jerry Jones</h2>
                <div class="broll">
                    <div className='player-wrapper'>
                        <ReactPlayer
                            className='react-player'
                            url='https://www.youtube.com/watch?v=j7FPy64KYq4'
                            width='100%'
                            height='100%'
                        />
                    </div>
                </div>
            </div>
            <div class="container">
                <img src={ROALOGO} alt="ROALOGO"/>
                <ul>
                    <li>This upgrade</li>
                    <li>This upgrade</li>
                    <li>This upgrade</li>
                    <li>This upgrade</li>
                    <li>This upgrade</li>
                    <li>This upgrade</li>
                </ul>
            </div>
        </div>
        ) 
    }
}

export default Layout; 