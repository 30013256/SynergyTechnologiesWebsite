import React, { Component } from 'react';

import WAVES from 'vanta/dist/vanta.waves.min';

import SwiperCore, { Navigation, Mousewheel } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Pagination } from 'swiper';
import { HashNavigation } from 'swiper';

import Logo from "../images/synlogo.png";
import Clouds from '../images/Clouds.jpg';
import NetSec from '../images/net-security.jpg';
import TechMap from '../images/techroadmap.jpg';
import Laptop from '../images/laptop.jpg';
import Continuity from '../images/continuity.jpg';
import Support from '../images/support.jpg';
import Team from '../images/team.png';
import Community from '../images/community.jpg';

import TimLoyd from '../images/timloyd.jpg'
import Ballence from '../images/ballance-logo.png'

import { Squash as Hamburger } from 'hamburger-react'

SwiperCore.use([Pagination, Navigation, Mousewheel, HashNavigation]);

export class Home extends Component {
    constructor() {
        super()
        this.vantaRef = React.createRef()
        this.hamRef = React.createRef()
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
            shininess: 24.00,
            waveHeight: 5.00,
            waveSpeed: .7,
            color: 0x50505,
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
        console.log("toggle")
        this.setState({isOpen: !this.state.isOpen})
    }

    toggleContact(){
        this.setState({FormOpen: !this.state.FormOpen})
    }

    formSend(e){
        e.preventDefault()
    }

    state = {
        FormOpen: false,
        CardExpanded: false,
        isOpen: false,
        cardNum: 0,
        infoCardTitle: [
            "YOUR CLOUD STRATEGY",
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
                <div className={this.state.FormOpen ? "contact-form form-open" : "contact-form"}>
                    <div onClick = {() => this.toggleContact()} className="click-mask"></div>
                    <form onSubmit={this.formSend}>
                        <h1>Contact Us</h1>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="var(--dark-grey)" class="bi bi-person" viewBox="0 0 16 16">
                                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                            </svg>
                            <input placeholder="Name"></input>
                        </div>  
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="var(--dark-grey)" class="bi bi-envelope" viewBox="0 0 16 16">
                                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"/>
                            </svg>
                            <input placeholder="Email"></input>
                        </div> 
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="var(--dark-grey)" class="bi bi-telephone" viewBox="0 0 16 16">
                                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                            </svg>
                            <input placeholder="Phone"></input>
                        </div>                      
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="var(--dark-grey)" class="bi bi-people" viewBox="0 0 16 16">
                                <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/>
                            </svg>
                            <input placeholder="Company"></input>
                        </div>  
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="var(--dark-grey)" class="bi bi-journal-text" viewBox="0 0 16 16">
                                <path d="M5 10.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"/>
                                <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z"/>
                                <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z"/>
                            </svg>
                            <select placeholder="Enquiry">
                                <option value="" disabled selected>Select Enquiry</option>
                                <option>General</option>
                                <option>Ticket</option>
                                <option>Jobs</option>
                            </select>
                        </div>
                        <textarea placeholder="Message"></textarea> 
                        <button>SEND</button>                                 
                    </form>
                </div>
                <header id={"headerId"} className={this.props.scroll ? "bg" : ""}>
                    <nav>
                        <div class="logo">
                            <a><img src={Logo}/></a>
                        </div>   
                        <Hamburger 
                            onToggle={() => this.toggleHamburger()}
                            toggled={this.state.isOpen}
                            size={40}
                            color="#fff"
                        />
                    </nav>   
                </header>   
                <div className={this.state.isOpen ? "menu menu-open" : "menu"}>
                    <ul>
                        <li><a href="/#home" onClick = {() => this.toggleHamburger()}>Home</a></li>
                        <li><a href="/#services" onClick = {() => this.toggleHamburger()}>Services</a></li>
                        <li><a href="/#aboutus" onClick = {() => this.toggleHamburger()}>About Us</a></li>
                        <li><a href="/#careers" onClick = {() => this.toggleHamburger()}>Careers</a></li>
                        <li>
                            <a href="#" 
                                onClick = {() => {
                                    this.toggleHamburger() 
                                    this.toggleContact()
                                }}
                            >
                                Contact
                            </a>
                        </li>
                        <li><p>synergyemail@synergy.com | 022 011 211 | 25 Somthing St</p></li>
                    </ul>
                </div>
                <div id="Hero" ref={this.vantaRef} >               
                    <Swiper speed={500} hashNavigation={{"watchState": true}} mousewheel={true} allowTouchMove={false} pagination={true} pagination={{"clickable": true}} navigation={true}>
                        <SwiperSlide data-hash="home">
                            <div className={"container"}>
                                <h1>EXTEND AND ENABLE YOUR IT TEAM</h1>
                                <p>Already have an IT Team in place, but want to leverage our capacity and experience? We’ll work along side your organisation to reach your objectives faster with our flexible approach.</p>
                                <div>
                                    <a href="#" onClick = {(e) => this.toggleContact()} className={"btn-contact"}>Contact</a>
                                    <a href="#" className={"btn-customerportal"}>Customer Portal</a>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide data-hash="services">
                            <div className={"container"}>
                                <h1>SERVICES</h1>                           
                                <div className={"services"}>
                                    <div className={"service-card-v2"} onClick = {(e) => this.cardClick(0)}>
                                        <img src={Clouds} />
                                        <div id={"sc-div-id-2"}>
                                            <h1 id={"sc-header-id-1"}>Your Cloud Strategy</h1>
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
                            </div>                      
                        </SwiperSlide>
                        <SwiperSlide data-hash="aboutus">
                            <div className={"container"}>
                                <h1>About Us</h1>
                                <div className={"about-us"}>
                                    <div className={"flip-card"}>                           
                                        <div className={"flip-card-inner"}>
                                            <div className={"flip-card-front"}>
                                                <img src={Team}/>
                                                <h1>Our Team</h1>
                                            </div>
                                            <div className={"flip-card-back"}>
                                                <h1>Our Team</h1>
                                                <p>Cillum et cillum elit veniam. Aute officia quis nulla tempor dolore exercitation incididunt aliqua excepteur eu labore magna. Voluptate deserunt ex fugiat amet ad cupidatat. Labore Lorem sint exercitation do nisi anim laborum. </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={"flip-card"}>
                                        <div className={"flip-card-inner"}>
                                            <div className={"flip-card-front"}>
                                                <img src={Community}/>
                                                <h1>Our Community</h1>
                                            </div>
                                            <div className={"flip-card-back yellow-bg"}>
                                                <h1>Our Community</h1>
                                                <p>Cillum et cillum elit veniam. Aute officia quis nulla tempor dolore exercitation incididunt aliqua excepteur eu labore magna. Voluptate deserunt ex fugiat amet ad cupidatat. Labore Lorem sint exercitation do nisi anim laborum. </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>    
                        </SwiperSlide>
                        <SwiperSlide data-hash="customerquotes">
                            <div className={"container"}>
                                <h1>Customer Quotes</h1>
                                <div class={"quotes"}>
                                <div className={"customer-quote"}>
                                    <div className={"quote-head"}>
                                        <img className={"company-logo"} src={Ballence}/>
                                        <img className={"profile"} src={TimLoyd}/>
                                    </div>                                
                                    <div className={"quote-body"}> 
                                        <div>
                                            <p className="quote">Synergy Tech are experts in the Microsoft System Center Space - they have provided flawless implementation and support where others had failed. I would not hesitate to recommend them to anyone.</p>
                                            <h3 className={"name"}>Tim Lloyd</h3>
                                            <p className={"title"}>Acting Chief Digital Officer</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={"customer-quote"}>
                                    <div className={"quote-head"}>
                                        <img className={"company-logo"} src={Ballence}/>
                                        <img className={"profile"} src={TimLoyd}/>
                                    </div>                                
                                    <div className={"quote-body"}> 
                                        <div>
                                            <p className="quote">Synergy Tech are experts in the Microsoft System Center Space - they have provided flawless implementation and support where others had failed. I would not hesitate to recommend them to anyone.</p>
                                            <h3 className={"name"}>Tim Lloyd</h3>
                                            <p className={"title"}>Acting Chief Digital Officer</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={"customer-quote"}>
                                    <div className={"quote-head"}>
                                        <img className={"company-logo"} src={Ballence}/>
                                        <img className={"profile"} src={TimLoyd}/>
                                    </div>                                
                                    <div className={"quote-body"}> 
                                        <div>
                                            <p className="quote">Synergy Tech are experts in the Microsoft System Center Space - they have provided flawless implementation and support where others had failed. I would not hesitate to recommend them to anyone.</p>
                                            <h3 className={"name"}>Tim Lloyd</h3>
                                            <p className={"title"}>Acting Chief Digital Officer</p>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>         
                </div>
            </div>
        )
    }
}

export default Home
