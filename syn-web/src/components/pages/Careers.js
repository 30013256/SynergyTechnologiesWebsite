import React from 'react'
//images
import Couch from '../images/couch.png'

export default function Careers(props) {
    const paragraph = "We’re always looking for talented people to join our team. If you’re keen to work with an innovative and highly successful team who challenge themselves, take up opportunities to develop outside of business-as-usual, enjoy collaborating, sharing knowledge, and learning from others… then you could be our next team member."

    return (
        <>
            <div className={'careers-container'}>
                <div>
                    <h1>Careers</h1>
                </div>             
                <p>{paragraph}</p>
                <div className={"cta-container"}>  
                    <a href="#" onClick = {() => props.toggleContact} className={"btn-contact"}>Contact</a>
                    <a href="#" className={"btn-customerportal"}>View Avalible Jobs</a>                                           
                </div>
                <div className={"section-header"}>Why Work For Us?</div>
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
                <div className={"vid"}>
                    <div class="video-container">
                        <iframe src="https://www.youtube.com/embed/wHwA1FzuVdY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>            
                </div>    
            </div>
        </>
    )
}
