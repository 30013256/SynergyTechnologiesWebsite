import React, { Component } from 'react';
import Hero from '../layout/Hero';
import Header from "../layout/Header";

import WAVES from 'vanta/dist/vanta.waves.min';
import { Link } from 'react-router-dom';

import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Pagination } from 'swiper';

import Logo from "../images/synlogo.png";
import Clouds from '../images/Clouds.jpg';
import NetSec from '../images/net-security.jpg';
import TechMap from '../images/techroadmap.jpg';

import { Squash as Hamburger } from 'hamburger-react'

SwiperCore.use([Pagination, Navigation]);

export class Home extends Component {
    constructor() {
        super()
        this.vantaRef = React.createRef()
    }

    componentDidMount() {
        this.vantaEffect = WAVES({
            el: this.vantaRef.current,
            mouseControls: false,
            touchControls: false,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            shininess: 28.00,
            waveHeight: 8.00,
            waveSpeed: .5,
            color: 0x0,
        })
        
    }

    getStyle = (e) => {
        const h1Height = e.getBoundingClientRect().width
    }

    componentWillUnmount() {
        if (this.vantaEffect) this.vantaEffect.destroy()
    }   
    

    state = {
        CardExpanded: false,
        isOpen: false
    }

    cardClick(bool){
        this.setState({CardExpanded: bool})
    }

    toggleHamburger(){
        this.setState({isOpen: !this.state.isOpen})
    }

    render() {
        return (
            <div className={"no-scroll"}>
                <div onClick = {(e) => this.cardClick(false)} className={this.state.CardExpanded ? "infocard expanded" : "infocard"}>
                    <div>
                        <h1>YOUR CLOUD STRATERGY</h1>
                        <p>
                            Excepteur nisi irure commodo et eiusmod nulla. Amet et id consectetur deserunt. Laboris sint laborum pariatur cillum. Nulla culpa Lorem cupidatat ullamco. Proident pariatur aute consectetur est eu in duis culpa laborum ullamco laborum.

                            Pariatur voluptate qui minim ipsum minim labore enim aute aute. Ad aliquip et cillum Lorem quis velit elit est pariatur. Ipsum ut culpa aute culpa reprehenderit est cillum dolore culpa qui consequat ad mollit dolore. Sint minim voluptate exercitation in pariatur in aliqua et officia et dolore commodo.
                        </p>
                    </div>
                </div>
                <header id={"headerId"} className={this.props.scroll ? "bg" : ""}>
                    <nav>
                        <div class="logo">
                            <a><img src={Logo}/></a>
                        </div>   
                        <Hamburger 
                            toggled={this.state.isOpen} 
                            toggle = {(e) => this.toggleHamburger()}   
                            size={40}
                            color="#fff"
                        />
                    </nav>   
                </header>   
                <div className={this.state.isOpen ? "menu menu-open" : "menu"}>
                    <ul>
                        <li><Link>About Us</Link></li>
                        <li><Link>Contact Us</Link></li>
                        <li><Link>Comunity</Link></li>
                        <li><Link>Services</Link></li>
                        <li><p>synergyemail@synergy.com | 022 011 211 | 25 Somthing St</p></li>
                    </ul>
                </div>
                <div id="Hero" ref={this.vantaRef} >               
                    <Swiper className="mySwiper" allowTouchMove={false} pagination={true} pagination={{"clickable": true}} navigation={true}>
                        <SwiperSlide>
                            <h1>EXTEND AND ENABLE YOUR IT TEAM</h1>
                            <p>Already have an IT Team in place, but want to leverage our capacity and experience? We’ll work along side your organisation to reach your objectives faster with our flexible approach.</p>
                            <div>
                                <Link className={"btn-contact"}>Contact</Link>
                                <Link className={"btn-customerportal"}>Customer Portal</Link>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <h1>SERVICES</h1>
                            <div className={"services"}>
                                <div className={"service-card-v2"} onClick = {(e) => this.cardClick(true)}>
                                    <img src={Clouds} />
                                    <div id={"sc-div-id-2"}>
                                        <h1 id={"sc-header-id-1"}>Your Cloud Stratergy</h1>
                                        <p>
                                            Already have an IT Team in place, but want to leverage our capacity and experience?
                                        </p>
                                        <a className={"view-btn"}>VIEW MORE</a>
                                    </div>   
                                </div>
                                <div className={"service-card-v2"} onClick = {(e) => this.cardClick(true)}>
                                    <img src={NetSec} />
                                    <div id={"sc-div-id-2"}>
                                        <h1 id={"sc-header-id-1"}>Technology To Enable Your Organisation</h1>
                                        <p>
                                            Already have an IT Team in place, but want to leverage our capacity and experience?
                                        </p>
                                        <a className={"view-btn"}>VIEW MORE</a>
                                    </div>   
                                </div>
                                <div className={"service-card-v2"} onClick = {(e) => this.cardClick(true)}>
                                    <img src={TechMap} />
                                    <div>
                                        <h1>Your Cloud Stratergy</h1>
                                        <p>
                                            Already have an IT Team in place, but want to leverage our capacity and experience?
                                        </p>
                                        <a className={"view-btn"}>VIEW MORE</a>
                                    </div>   
                                </div>
                                <div className={"service-card-v2"} onClick = {(e) => this.cardClick(true)}>
                                    <img src={NetSec} />
                                    <div>
                                        <h1>Your Cloud Stratergy</h1>
                                        <p>
                                            Already have an IT Team in place, but want to leverage our capacity and experience?
                                        </p>
                                        <a className={"view-btn"}>VIEW MORE</a>
                                    </div>   
                                </div>
                                <div className={"service-card-v2"} onClick = {(e) => this.cardClick(true)}>
                                    <img src={Clouds} />
                                    <div>
                                        <h1>Your Cloud Stratergy</h1>
                                        <p>
                                            Already have an IT Team in place, but want to leverage our capacity and experience?
                                        </p>
                                        <a className={"view-btn"}>VIEW MORE</a>
                                    </div>   
                                </div>
                                <div className={"service-card-v2"} onClick = {(e) => this.cardClick(true)}>
                                    <img src={NetSec} />
                                    <div>
                                        <h1>Your Cloud Stratergy</h1>
                                        <p>
                                            Already have an IT Team in place, but want to leverage our capacity and experience?
                                        </p>
                                        <a className={"view-btn"}>VIEW MORE</a>
                                    </div>   
                                </div>                        
                            </div>                        
                        </SwiperSlide>
                        <SwiperSlide>
                            <h1>EXTEND AND ENABLE YOUR IT TEAM</h1>
                            <p>Commodo nostrud laborum esse cupidatat excepteur quis sit Lorem do veniam amet magna. Ut do duis culpa excepteur ipsum deserunt aliquip. Proident minim deserunt consequat dolor.</p>
                            <div>
                                <Link>Contact</Link>
                                <Link>Customer Portal</Link>
                            </div>
                        </SwiperSlide>
                    </Swiper>         
                </div>
            </div>
        )
    }
}

export default Home
