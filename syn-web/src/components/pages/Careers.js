import React from 'react'

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
                        <h1>Careers</h1>
                        <div className={"why-container"}>
                    <div className={"values-box"}>
                        <div>
                            <a href="#"><p>People <b>First</b></p></a>
                            <a href="#"><p>Always <b>Listening</b></p></a>
                            <a href="#"><p>Always <b>Learning</b></p></a>
                            <a href="#"><p>Always With <b>Integretiy</b></p></a>
                        </div>
                        <p>
                            This is at the core of everything we do. We believe in maintaining a strong culture with our internal team, building lasting relationships with our customers, and making a positive impact in the communities where we live and operate.
                        </p>
                    </div>
                    <div className={"border"}>
                        <img src={Couch}/>
                    </div>                                       
                </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={"container"}>
                        <h1>Careers</h1>
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
