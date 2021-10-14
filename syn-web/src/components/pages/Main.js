import React, {Component} from 'react'
import SwiperCore, { Navigation, Mousewheel } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css'
import { Pagination } from 'swiper'
import { HashNavigation } from 'swiper'
//Components
import FlipCard from '../layout/FlipCard'
import QuoteCard from '../layout/QuoteCard'
//images
///about us
import Team from '../images/team.png'
import Community from '../images/community.jpg'
///testimonials 
import TimLoyd from '../images/timloyd.jpg'
import BallenceLogo from '../images/ballance-logo.png'
import JasonSwain from '../images/jasonswain.jpg'
import SeekaLogo from '../images/seeka-logo.png'
import MarkLeslie from '../images/markLeslie.jpg'
import TuiLogo from '../images/tui-logo.png'

SwiperCore.use([Pagination, Navigation, Mousewheel, HashNavigation]);

export class Main extends Component{    
    
    state = { 
        OurTeamContent: "Our Team Cillum et cillum elit veniam. Aute officia quis nulla tempor dolore exercitation incididunt aliqua excepteur eu labore magna. Voluptate deserunt ex fugiat amet ad cupidatat. Labore Lorem sint exercitation do nisi anim laborum. ",
        OurCommunityContent: "Our Comunity Cillum et cillum elit veniam. Aute officia quis nulla tempor dolore exercitation incididunt aliqua excepteur eu labore magna. Voluptate deserunt ex fugiat amet ad cupidatat. Labore Lorem sint exercitation do nisi anim laborum. "
    }
    
    swiperNavMobile(){
        const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
        if (vw < 900) return false
        else return true 
    }

    serviceCards(){
        const cards = this.props.CardId.map((CardId) => 
            <div key={CardId} className={"service-card-v2"} onClick = {() => this.props.cardClick(CardId)}>
                <img src={this.props.ServiceCardImages[CardId]} />
                <div>
                    <h1>{this.props.InfoCardTitle[CardId]}</h1>
                    <p>
                        {this.props.InfoCardContent[CardId].slice(0,85) + "..."}
                    </p>
                    <a className={"view-btn"}>VIEW MORE</a>
                </div>
                <span className={"service-card-title-m"}>
                    <h2>{this.props.InfoCardTitle[CardId]}</h2>
                </span>   
            </div>
        )
        return cards
    }

    render(){
        return (
            <>
                <Swiper speed={500} hashNavigation={{"watchState": true}} mousewheel={true} allowTouchMove={!this.swiperNavMobile()} pagination={true} pagination={{"clickable": true}} navigation={this.swiperNavMobile()}>
                    <SwiperSlide data-hash="home">
                        <div className={"container"}>
                            <h1>EXTEND AND ENABLE YOUR IT TEAM</h1>
                            <p>Already have an IT Team in place, but want to leverage our capacity and experience? We’ll work along side your organisation to reach your objectives faster with our flexible approach.</p>
                            <div className={"btn-wrap"}>
                                <a href="#" onClick = {(e) => this.props.toggleContact()} className={"btn-contact"}>Contact</a>
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
                                <FlipCard img={Team} header={"Our Team"} content={this.state.OurTeamContent}/>
                                <FlipCard img={Community} header={"Our Community"} content={this.state.OurCommunityContent}/>
                            </div>
                        </div>    
                    </SwiperSlide>
                    <SwiperSlide data-hash="testimonials">
                        <div className={"container"}>
                            <h1>testimonials</h1>
                            <div class={"quotes"}>  
                                <QuoteCard id="q1" companyLogo={BallenceLogo} profile={TimLoyd} name="Time Loyd" title={"Acting Chief Digital Officer"}
                                    quote={"Synergy Tech are experts in the Microsoft System Center Space - they have provided flawless implementation and support where others had failed. I would not hesitate to recommend them to anyone."}      
                                />
                                <QuoteCard id="q2" companyLogo={SeekaLogo} profile={JasonSwain} name="Jason Swain" title={"General Manager - Information Systems"}
                                    quote={"Seeka relies on the expertise and integrity that the team at Synergy Tech provides. They are an integral part of key systems projects at Seeka and constantly deliver excellent outcomes."}      
                                />
                                <QuoteCard id="q3" companyLogo={TuiLogo} profile={MarkLeslie} name="Mark Leslie" title={"Business Systems and Information Manager"}
                                    quote={'Synergy Tech actually listen to what our objectives are, they provide expert advice and sound business solutions. Synergy&aposs "go the extra mile" attitude is the reason why we always achieve outstanding results no matter the size of the project. They&aposre a fantastic company to work with.'}      
                                />
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </>
        )
    }
}

export default Main