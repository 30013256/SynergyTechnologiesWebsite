import React, { useState } from 'react'

import SwiperCore, { Navigation, Mousewheel } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css'
import { Pagination } from 'swiper'
import { HashNavigation } from 'swiper'
//images
import Couch from '../images/couch.png'

SwiperCore.use([Pagination, Navigation, Mousewheel, HashNavigation]);

export default function Careers(props) {
    const paragraph = "We’re always looking for talented people to join our team. If you’re keen to work with an innovative and highly successful team who challenge themselves, take up opportunities to develop outside of business-as-usual, enjoy collaborating, sharing knowledge, and learning from others… then you could be our next team member."

    const [value, setValue] = useState(0);
    
    const values = [
        "This is at the core of everything we do. We believe in maintaining a strong culture with our internal team, building lasting relationships with our customers, and making a positive impact in the communities where we live and operate."
        ,
        "While we are full of unique perspectives and creative ideas, ultimately, we understand that there is not a one-size-fits-all approach to IT. We realize that the right solution starts with listening and understanding the needs of your business first."
        ,
        "As technologists in a rapidly changing industry, we understand the need for and place a large value on learning. Our organization supports and provides continual learning opportunities for our internal team and strongly promotes knowledge sharing with our customers."
        ,
        "We believe that integrity is key to building trust and ultimately a long, lasting relationship. As such, we believe in promoting the right product and right solution for your organization. We see openness, visibility, and transparency across our process, procurement, and delivery of products and services as an integral part of what we do."
    ]

    function swiperNavMobile() {
        const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
        if (vw < 900) return false
        else return true 
    }

    return (
        <>
            <Swiper speed={500} hashNavigation={{"watchState": true}} mousewheel={true} allowTouchMove={!swiperNavMobile()} pagination={true} pagination={{"clickable": true}} navigation={swiperNavMobile()}>
                <SwiperSlide>
                    <div className={"container"}>
                        <h1>Careers</h1>
                        <p>{paragraph}</p>
                        <div className={"btn-wrap"}>
                            <a href="#" onClick = {(e) => this.props.toggleContact()} className={"btn-contact"}>Contact</a>
                            <a href="#" className={"btn-customerportal"}>Veiw Avalible Jobs</a>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={"container"}>
                        <h1>Our Values</h1>
                        <div className={"why-container"}>
                            <div className={"values-box"}>                               
                                <a href="#" onClick={() => setValue(0)} ><p>People <b>First</b></p></a>
                                <a href="#" onClick={() => setValue(1)} ><p>Always <b>Listening</b></p></a>
                                <a href="#" onClick={() => setValue(2)} ><p>Always <b>Learning</b></p></a>
                                <a href="#" onClick={() => setValue(3)} ><p>Always With <b>Integretiy</b></p></a>
                            </div>
                            <div className={"border"}>
                                <img src={Couch}/>
                            </div>                                       
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={"container"}>
                        <h1>Why work for us</h1>
                        <div className={"vid"}>
                            <div class="video-container">
                                <iframe src="https://www.youtube.com/embed/wHwA1FzuVdY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>            
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}
