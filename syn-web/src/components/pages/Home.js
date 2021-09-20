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
import Laptop from '../images/laptop.jpg';
import Continuity from '../images/continuity.jpg';
import Support from '../images/support.jpg';

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

    componentWillUnmount() {
        if (this.vantaEffect) this.vantaEffect.destroy()
    }   

    cardClick(cardNum){
        this.setState({cardNum: cardNum})
        this.setState({CardExpanded: !this.state.CardExpanded})
    }

    toggleHamburger(){
        this.setState({isOpen: !this.state.isOpen})
    }

    state = {
        CardExpanded: false,
        isOpen: false,
        cardNum: 0,
        infoCardTitle: [
            "YOUR CLOUD STRATERGY",
            "Technology To Enable Your Organisation",
            "TECHNOLOGY ROAD MAP",
            "Procurement",
            "Business Continuity Essentials",          
            "Supporting Your Business",
        ],
        infoCardContent: [
            "Excepteur nisi irure cmmodo et eiusmod nulla. Amet et id consectetur deserunt. Laboris sint laborum pariatur cillum. Nulla culpa Lorem cupidatat ullamco. Proident pariatur aute consectetur est eu in duis culpa laborum ullamco laborum.Pariatur voluptate qui minim ipsum minim labore enim aute aute. Ad aliquip et cillum Lorem quis velit elit est pariatur. Ipsum ut culpa aute culpa reprehenderit est cillum dolore culpa qui consequat ad mollit dolore. Sint minim voluptate exercitation in pariatur in aliqua et officia et dolore commodo."
            ,
            "Excepteur nisi irure cmmodo et eiusmod nulla. Amet et id consectetur deserunt. Laboris sint laborum pariatur cillum. Nulla culpa Lorem cupidatat ullamco. Proident pariatur aute consectetur est eu in duis culpa laborum ullamco laborum.Pariatur voluptate qui minim ipsum minim labore enim aute aute. Ad aliquip et cillum Lorem quis velit elit est pariatur. Ipsum ut culpa aute culpa reprehenderit est cillum dolore culpa qui consequat ad mollit dolore. Sint minim voluptate exercitation in pariatur in aliqua et officia et dolore commodo."
            ,
            "Excepteur nisi irure cmmodo et eiusmod nulla. Amet et id consectetur deserunt. Laboris sint laborum pariatur cillum. Nulla culpa Lorem cupidatat ullamco. Proident pariatur aute consectetur est eu in duis culpa laborum ullamco laborum.Pariatur voluptate qui minim ipsum minim labore enim aute aute. Ad aliquip et cillum Lorem quis velit elit est pariatur. Ipsum ut culpa aute culpa reprehenderit est cillum dolore culpa qui consequat ad mollit dolore. Sint minim voluptate exercitation in pariatur in aliqua et officia et dolore commodo."
            ,
            "Excepteur nisi irure cmmodo et eiusmod nulla. Amet et id consectetur deserunt. Laboris sint laborum pariatur cillum. Nulla culpa Lorem cupidatat ullamco. Proident pariatur aute consectetur est eu in duis culpa laborum ullamco laborum.Pariatur voluptate qui minim ipsum minim labore enim aute aute. Ad aliquip et cillum Lorem quis velit elit est pariatur. Ipsum ut culpa aute culpa reprehenderit est cillum dolore culpa qui consequat ad mollit dolore. Sint minim voluptate exercitation in pariatur in aliqua et officia et dolore commodo."
            ,
            "Excepteur nisi irure cmmodo et eiusmod nulla. Amet et id consectetur deserunt. Laboris sint laborum pariatur cillum. Nulla culpa Lorem cupidatat ullamco. Proident pariatur aute consectetur est eu in duis culpa laborum ullamco laborum.Pariatur voluptate qui minim ipsum minim labore enim aute aute. Ad aliquip et cillum Lorem quis velit elit est pariatur. Ipsum ut culpa aute culpa reprehenderit est cillum dolore culpa qui consequat ad mollit dolore. Sint minim voluptate exercitation in pariatur in aliqua et officia et dolore commodo."
            ,
            "Excepteur nisi irure cmmodo et eiusmod nulla. Amet et id consectetur deserunt. Laboris sint laborum pariatur cillum. Nulla culpa Lorem cupidatat ullamco. Proident pariatur aute consectetur est eu in duis culpa laborum ullamco laborum.Pariatur voluptate qui minim ipsum minim labore enim aute aute. Ad aliquip et cillum Lorem quis velit elit est pariatur. Ipsum ut culpa aute culpa reprehenderit est cillum dolore culpa qui consequat ad mollit dolore. Sint minim voluptate exercitation in pariatur in aliqua et officia et dolore commodo."
        ]
    }

    render() {
        return (
            <div className={"no-scroll"}>
                <div onClick = {(e) => this.cardClick()} className={this.state.CardExpanded ? "infocard expanded" : "infocard"}>
                    <div>
                        <h1>{this.state.infoCardTitle[this.state.cardNum]}</h1>
                        <p>{this.state.infoCardContent[this.state.cardNum]}</p>
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
                        <li><Link to="">About Us</Link></li>
                        <li><Link to="">Contact Us</Link></li>
                        <li><Link to="">Community</Link></li>
                        <li><Link to="">Services</Link></li>
                        <li><p>synergyemail@synergy.com | 022 011 211 | 25 Somthing St</p></li>
                    </ul>
                </div>
                <div id="Hero" ref={this.vantaRef} >               
                    <Swiper className="mySwiper" allowTouchMove={false} pagination={true} pagination={{"clickable": true}} navigation={true}>
                        <SwiperSlide>
                            <h1>EXTEND AND ENABLE YOUR IT TEAM</h1>
                            <p>Already have an IT Team in place, but want to leverage our capacity and experience? We’ll work along side your organisation to reach your objectives faster with our flexible approach.</p>
                            <div>
                                <Link to="" className={"btn-contact"}>Contact</Link>
                                <Link to="" className={"btn-customerportal"}>Customer Portal</Link>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <h1>SERVICES</h1>
                            <div className={"services"}>
                                <div className={"service-card-v2"} onClick = {(e) => this.cardClick(0)}>
                                    <img src={Clouds} />
                                    <div id={"sc-div-id-2"}>
                                        <h1 id={"sc-header-id-1"}>Your Cloud Stratergy</h1>
                                        <p>
                                            Already have an IT Team in place, but want to leverage our capacity and experience?
                                        </p>
                                        <a className={"view-btn"}>VIEW MORE</a>
                                    </div>   
                                </div>
                                <div className={"service-card-v2"} onClick = {(e) => this.cardClick(1)}>
                                    <img src={NetSec} />
                                    <div id={"sc-div-id-2"}>
                                        <h1 id={"sc-header-id-1"}>Technology To Enable Your Organisation</h1>
                                        <p>
                                            Already have an IT Team in place, but want to leverage our capacity and experience?
                                        </p>
                                        <a className={"view-btn"}>VIEW MORE</a>
                                    </div>   
                                </div>
                                <div className={"service-card-v2"} onClick = {(e) => this.cardClick(2)}>
                                    <img src={TechMap} />
                                    <div>
                                        <h1>Technology Roadmap</h1>
                                        <p>
                                            Already have an IT Team in place, but want to leverage our capacity and experience?
                                        </p>
                                        <a className={"view-btn"}>VIEW MORE</a>
                                    </div>   
                                </div>
                                <div className={"service-card-v2"} onClick = {(e) => this.cardClick(3)}>
                                    <img src={Laptop} />
                                    <div>
                                        <h1>Procurement</h1>
                                        <p>
                                            Already have an IT Team in place, but want to leverage our capacity and experience?
                                        </p>
                                        <a className={"view-btn"}>VIEW MORE</a>
                                    </div>   
                                </div>
                                <div className={"service-card-v2"} onClick = {(e) => this.cardClick(4)}>
                                    <img src={Continuity} />
                                    <div>
                                        <h1>Business Continuity Essentials</h1>
                                        <p>
                                            Already have an IT Team in place, but want to leverage our capacity and experience?
                                        </p>
                                        <a className={"view-btn"}>VIEW MORE</a>
                                    </div>   
                                </div>
                                <div className={"service-card-v2"} onClick = {(e) => this.cardClick(5)}>
                                    <img src={Support} />
                                    <div>
                                        <h1>Supporting Your Business</h1>
                                        <p>
                                            Already have an IT Team in place, but want to leverage our capacity and experience?
                                        </p>
                                        <a className={"view-btn"}>VIEW MORE</a>
                                    </div>   
                                </div>                        
                            </div>                        
                        </SwiperSlide>
                        <SwiperSlide>
                            <h1>Community/Other Important content</h1>
                            <p>Commodo nostrud laborum esse cupidatat excepteur quis sit Lorem do veniam amet magna. Ut do duis culpa excepteur ipsum deserunt aliquip. Proident minim deserunt consequat dolor.</p>
                        </SwiperSlide>
                    </Swiper>         
                </div>
            </div>
        )
    }
}

export default Home
