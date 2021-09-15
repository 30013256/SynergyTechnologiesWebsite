import React, { Component, useState } from 'react';
import WAVES from 'vanta/dist/vanta.waves.min';
import { Link } from 'react-router-dom';

import AOS from 'aos';
import 'aos/dist/aos.css';

import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { EffectCoverflow, Pagination } from 'swiper';

import CloudImg from '../images/server.png';
import LaptopImg from '../images/LaptopImg.jpg';
import Clouds from '../images/Clouds.jpg';
import WhiteCloudComp from '../images/WhiteCloudComp.png';

SwiperCore.use([Pagination, Navigation]);

export class Hero extends Component {
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
            waveSpeed: 0.25,
            color: 0x20202
        })

    }

    componentWillUnmount() {
        if (this.vantaEffect) this.vantaEffect.destroy()
    }   
    
    state = {
        Sleep: false,
        Scrolling: false,
        HeroTitleSlideNum: 0,
        HeroTitleList: [
            "Extend And Enable Your IT Team",
            "Our Values At Synergy",
            "What We Provide At Synergy",
            "Our Comunity At Synergy"
        ],       
        Content: [
            <div>
                <p>Need that extra bit of IT support that your company currently does not have?</p>
                <p>We can extend the support of your current IT team with our friendly online team that’s ready to face any issue you can’t currently solve, to get you back on the right track.</p>
            </div>,
            <div className="our-values">
                <div className="left">
                    <p>People</p>
                    <p>Always</p>
                    <p>Always</p>
                    <p>Always with</p>
                </div>
                <div className="right">
                    <p>First</p>
                    <p>Listening</p>
                    <p>Learning</p>
                    <p>Integrity</p>
                </div>
            </div>,
            <div>
                <p>What we provide at Synergy is a personal, local IT support experience with our tight knit team right here in New Zealand.</p>
                <p>We provide 24/7 online support and will send people from our team to your business for issues that can not be resolved online.</p>
            </div>,
            <div>
                <p>At Synergy, supporting our community is one of our biggest focuses.</p>
                <p>We do this by supporting our local charities, like Good Neighbor and Awhina house.</p>
                <p>We also get involved in events to help our community like our community clean up events.</p>
            </div>
        ],
        AnimationName: "enter",
        Fade: "in",
        CardExpanded: false,
    }

    // async scrollDown(){
    //     if(this.state.HeroTitleSlideNum < 3 && this.state.Sleep === false){
    //         this.setState({Sleep: true})        
    //         this.setState({AnimationName: "exit"})
    //         this.setState({Fade: "out"})
    //         await new Promise( res => setTimeout(res, 500) );
    //         this.setState({HeroTitleSlideNum: (this.state.HeroTitleSlideNum + 1)})
    //         this.setState({AnimationName: "enter"})
    //         this.setState({Fade: "in"})
    //         await new Promise( res => setTimeout(res, 500) );
    //         this.setState({Sleep: false})
    //     }       
    //     else if(this.state.HeroTitleSlideNum == 3){
    //         this.setState({Scrolling: true})
    //         this.props.toggleSroll(true)
    //     }
    // }

    // async scrollUp(){    
    //     if(this.state.HeroTitleSlideNum > 0 && this.state.Sleep === false){
    //         this.setState({Sleep: true}) 
    //         this.setState({AnimationName: "exit"})
    //         this.setState({Fade: "out"})
    //         await new Promise( res => setTimeout(res, 500) );
    //         this.setState({HeroTitleSlideNum: (this.state.HeroTitleSlideNum - 1)})
    //         this.setState({AnimationName: "enter"})
    //         this.setState({Fade: "in"})
    //         await new Promise( res => setTimeout(res, 500) );
    //         this.setState({Sleep: false})
    //     }      
    // }

    // async scrollTo(num){
    //     if(this.state.Sleep === false && num != this.state.HeroTitleSlideNum){
    //         this.setState({Sleep: true})        
    //         this.setState({AnimationName: "exit"})
    //         this.setState({Fade: "out"})
    //         await new Promise( res => setTimeout(res, 500) );
    //         this.setState({HeroTitleSlideNum: num})
    //         this.setState({AnimationName: "enter"})
    //         this.setState({Fade: "in"})
    //         await new Promise( res => setTimeout(res, 500) );
    //         this.setState({Sleep: false})
    //     }     
    // }

    // async onscroll(e){
    //     if(e.nativeEvent.wheelDelta < 0 && this.state.Sleep === false && this.state.Scrolling === false){
    //         if(this.state.HeroTitleSlideNum == 3){
    //             this.setState({Scrolling: true})
    //             this.props.toggleSroll(true)
    //         }
    //         else if(this.state.HeroTitleSlideNum < 3){
    //             this.scrollDown()
    //         }
                
    //     } 
    //     if(e.nativeEvent.wheelDelta > 0 && this.state.Sleep === false){
    //         if(this.state.Scrolling === false && this.state.HeroTitleSlideNum > 0){
    //             this.scrollUp()
    //         }
    //         else if(window.scrollY === 0){
    //             this.setState({Scrolling: false})
    //             this.props.toggleSroll(false)
    //         }
    //     }                    
    // }

    cardClick(){
        this.setState({CardExpanded: !this.state.CardExpanded})
    }


// onWheel = {(e) => this.onscroll(e)}
    render() {
        return (
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
                            <div className={"service-card"} onClick = {(e) => this.cardClick(e)}>
                                <h1>Your Cloud Stratergy</h1>
                                <img src={WhiteCloudComp} />
                                <div className={"vm"}>ARROW</div>
                            </div>
                            <div className={"service-card"}>
                                <h1>Card Title</h1>
                                <div className={"vm"}>ARROW</div>
                            </div>
                            <div className={"service-card"}>
                                <h1>Card Title</h1>
                                <div className={"vm"}>ARROW</div>
                            </div>
                            <div className={"service-card"}>
                                <h1>Card Title</h1>
                                <div className={"vm"}>ARROW</div>
                            </div>
                            <div className={"service-card"}>
                                <h1>Card Title</h1>
                                <div className={"vm"}>ARROW</div>
                            </div>
                            <div className={"service-card"}>
                                <h1>Card Title</h1>
                                <div className={"vm"}>ARROW</div>
                            </div>                           
                        </div>
                        <div onClick = {(e) => this.cardClick(e)} className={this.state.CardExpanded ? "infocard expanded" : "infocard"}>
                            <div>
                                <h1>YOUR CLOUD STRATERGY</h1>
                                <p>
                                    Excepteur nisi irure commodo et eiusmod nulla. Amet et id consectetur deserunt. Laboris sint laborum pariatur cillum. Nulla culpa Lorem cupidatat ullamco. Proident pariatur aute consectetur est eu in duis culpa laborum ullamco laborum.

                                    Pariatur voluptate qui minim ipsum minim labore enim aute aute. Ad aliquip et cillum Lorem quis velit elit est pariatur. Ipsum ut culpa aute culpa reprehenderit est cillum dolore culpa qui consequat ad mollit dolore. Sint minim voluptate exercitation in pariatur in aliqua et officia et dolore commodo.
                                </p>
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
                        {/* <Link to="" onClick={ () => this.scrollUp()}>
                            <div className={"arrow-up"}></div>
                        </Link>
                    
                        <Link to="" onClick={ () => this.scrollDown()}>
                            <div className={"arrow-down"}></div>
                        </Link>                       */}
                </Swiper>         
            </div>
        )
    }
}

export default Hero
