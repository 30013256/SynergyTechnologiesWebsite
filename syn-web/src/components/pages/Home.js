import React, { Component } from 'react';
import WAVES from 'vanta/dist/vanta.waves.min';

//Components
import ContactForm from '../layout/ContactForm'
import InfoCard from '../layout/InfoCard'
import Header from '../layout/Header';
import Nav from '../layout/Nav'

import SwiperCore, { Navigation, Mousewheel } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Pagination } from 'swiper';
import { HashNavigation } from 'swiper';


import Clouds from '../images/Clouds.jpg';
import NetSec from '../images/net-security.jpg';
import TechMap from '../images/techroadmap.jpg';
import Laptop from '../images/laptop.jpg';
import Continuity from '../images/continuity.jpg';
import Support from '../images/support.jpg';
import Team from '../images/team.png';
import Community from '../images/community.jpg';

import TimLoyd from '../images/timloyd.jpg'
import BallenceLogo from '../images/ballance-logo.png'
import JasonSwain from '../images/jasonswain.jpg'
import SeekaLogo from '../images/seeka-logo.png'
import MarkLeslie from '../images/markLeslie.jpg'
import TuiLogo from '../images/tui-logo.png'


SwiperCore.use([Pagination, Navigation, Mousewheel, HashNavigation]);

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
            shininess: 24.00,
            waveHeight: 5.00,
            waveSpeed: .7,
            color: 0x50505,
        })       
    }

    componentWillUnmount() {
        if (this.vantaEffect) this.vantaEffect.destroy()
    } 

    state = {
        FormOpen: false,
        CardExpanded: false,
        IsOpen: false,
        CardNum: 0,
        CardId: [0, 1, 2, 3, 4, 5],
        InfoCardTitle: [
            "YOUR CLOUD STRATEGY",
            "Technology To Enable Your Organisation",
            "TECHNOLOGY ROAD MAP",
            "Procurement",
            "Business Continuity Essentials",          
            "Supporting Your Business",
        ],
        InfoCardContent: [
            "1Excepteur nisi irure cmmodo et eiusmod nulla. Amet et id consectetur deserunt. Laboris sint laborum pariatur cillum. Nulla culpa Lorem cupidatat ullamco. Proident pariatur aute consectetur est eu in duis culpa laborum ullamco laborum.Pariatur voluptate qui minim ipsum minim labore enim aute aute. Ad aliquip et cillum Lorem quis velit elit est pariatur. Ipsum ut culpa aute culpa reprehenderit est cillum dolore culpa qui consequat ad mollit dolore. Sint minim voluptate exercitation in pariatur in aliqua et officia et dolore commodo."
            ,
            "2Excepteur nisi irure cmmodo et eiusmod nulla. Amet et id consectetur deserunt. Laboris sint laborum pariatur cillum. Nulla culpa Lorem cupidatat ullamco. Proident pariatur aute consectetur est eu in duis culpa laborum ullamco laborum.Pariatur voluptate qui minim ipsum minim labore enim aute aute. Ad aliquip et cillum Lorem quis velit elit est pariatur. Ipsum ut culpa aute culpa reprehenderit est cillum dolore culpa qui consequat ad mollit dolore. Sint minim voluptate exercitation in pariatur in aliqua et officia et dolore commodo."
            ,
            "3Excepteur nisi irure cmmodo et eiusmod nulla. Amet et id consectetur deserunt. Laboris sint laborum pariatur cillum. Nulla culpa Lorem cupidatat ullamco. Proident pariatur aute consectetur est eu in duis culpa laborum ullamco laborum.Pariatur voluptate qui minim ipsum minim labore enim aute aute. Ad aliquip et cillum Lorem quis velit elit est pariatur. Ipsum ut culpa aute culpa reprehenderit est cillum dolore culpa qui consequat ad mollit dolore. Sint minim voluptate exercitation in pariatur in aliqua et officia et dolore commodo."
            ,
            "4Excepteur nisi irure cmmodo et eiusmod nulla. Amet et id consectetur deserunt. Laboris sint laborum pariatur cillum. Nulla culpa Lorem cupidatat ullamco. Proident pariatur aute consectetur est eu in duis culpa laborum ullamco laborum.Pariatur voluptate qui minim ipsum minim labore enim aute aute. Ad aliquip et cillum Lorem quis velit elit est pariatur. Ipsum ut culpa aute culpa reprehenderit est cillum dolore culpa qui consequat ad mollit dolore. Sint minim voluptate exercitation in pariatur in aliqua et officia et dolore commodo."
            ,
            "5Excepteur nisi irure cmmodo et eiusmod nulla. Amet et id consectetur deserunt. Laboris sint laborum pariatur cillum. Nulla culpa Lorem cupidatat ullamco. Proident pariatur aute consectetur est eu in duis culpa laborum ullamco laborum.Pariatur voluptate qui minim ipsum minim labore enim aute aute. Ad aliquip et cillum Lorem quis velit elit est pariatur. Ipsum ut culpa aute culpa reprehenderit est cillum dolore culpa qui consequat ad mollit dolore. Sint minim voluptate exercitation in pariatur in aliqua et officia et dolore commodo."
            ,
            "6Excepteur nisi irure cmmodo et eiusmod nulla. Amet et id consectetur deserunt. Laboris sint laborum pariatur cillum. Nulla culpa Lorem cupidatat ullamco. Proident pariatur aute consectetur est eu in duis culpa laborum ullamco laborum.Pariatur voluptate qui minim ipsum minim labore enim aute aute. Ad aliquip et cillum Lorem quis velit elit est pariatur. Ipsum ut culpa aute culpa reprehenderit est cillum dolore culpa qui consequat ad mollit dolore. Sint minim voluptate exercitation in pariatur in aliqua et officia et dolore commodo."
        ],
        ServiceCardImages: [
            Clouds,
            NetSec,
            TechMap,
            Laptop,
            Continuity,
            Support
        ]      
    }

    cardClick(cardNum){
        this.setState({CardNum: cardNum})
        this.setState({CardExpanded: !this.state.CardExpanded})
    }

    toggleHamburger = () => {
        this.setState({IsOpen: !this.state.IsOpen})
    }
  
    toggleContact = () => {
        this.setState({FormOpen: !this.state.FormOpen})
    }

    serviceCards(){
        const cards = this.state.CardId.map((CardId) => 
            <div key={CardId} className={"service-card-v2"} onClick = {() => this.cardClick(CardId)}>
                <img src={this.state.ServiceCardImages[CardId]} />
                <div id={"sc-div-id-2"}>
                    <h1 id={"sc-header-id-1"}>{this.state.InfoCardTitle[CardId]}</h1>
                    <p>
                        {this.state.InfoCardContent[CardId].slice(0,85) + "..."}
                    </p>
                    <a className={"view-btn"}>VIEW MORE</a>
                </div>   
            </div>
        )
        return cards
    }

    render() {
        return (
            <div className={"no-scroll"}>
                {/* InFoCard: Opens in forground, Contains infomation about a selected service when a Service card is clicked */}
                <InfoCard 
                    CardExpanded={this.state.CardExpanded} 
                    cardClick={this.cardClick.bind(this)}
                    CardNum={this.state.CardNum}
                    InfoCardTitle={this.state.InfoCardTitle[this.state.CardNum]}
                    InfoCardContent={this.state.InfoCardContent[this.state.CardNum]}
                />
                {/* ContactForm: A contact form that opens in forground on any page */}
                <ContactForm FormOpen={this.state.FormOpen} toggleContact={this.toggleContact}/>
                {/* Header: Fixed at top of page contains logo and Hambuger button to open navigation */}
                <Header IsOpen={this.state.IsOpen} toggleHamburger={this.toggleHamburger}/>
                {/* Nav: Navigation opens full screen in forground */}
                <Nav IsOpen={this.state.IsOpen} toggleHamburger={this.toggleHamburger} toggleContact={this.toggleContact}/>
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
                                <div className={"services"}>{this.serviceCards()}</div>  
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
                                            <img className={"company-logo"} src={BallenceLogo}/>
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
                                            <img className={"company-logo"} src={SeekaLogo}/>
                                            <img className={"profile"} src={JasonSwain}/>
                                        </div>                                
                                        <div className={"quote-body"}> 
                                            <div>
                                                <p className="quote">Seeka relies on the expertise and integrity that the team at Synergy Tech provides. They are an integral part of key systems projects at Seeka and constantly deliver excellent outcomes.</p>
                                                <h3 className={"name"}>Jason Swain</h3>
                                                <p className={"title"}>General Manager - Information Systems</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={"customer-quote"}>
                                        <div className={"quote-head"}>
                                            <img className={"company-logo"} src={TuiLogo}/>
                                            <img className={"profile"} src={MarkLeslie}/>
                                        </div>                                
                                        <div className={"quote-body"}> 
                                            <div>
                                                <p className="quote">Synergy Tech actually listen to what our objectives are, they provide expert advice and sound business solutions. Synergy's "go the extra mile" attitude is the reason why we always achieve outstanding results no matter the size of the project. They're a fantastic company to work with.</p>
                                                <h3 className={"name"}>Mark Leslie</h3>
                                                <p className={"title"}>Business Systems and Information Manager</p>
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
