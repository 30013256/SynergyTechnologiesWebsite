import React from 'react'
import UpArrow from '../images/up-arrow-white.png'

export default function QuoteCard(props) {
    return (
        <>
            <div id={props.id} className={"customer-quote"}>
                <div className={"quote-head"}>
                    <img className={"company-logo"} src={props.companyLogo}/>
                    <img className={"profile"} src={props.profile}/>
                </div>                                
                <div className={"quote-body"}> 
                    <div>
                        <p className="quote">{props.quote}</p>
                        <h3 className={"name"}>{props.name}</h3>
                        <p className={"title"}>{props.role}</p>
                    </div>
                </div>
                <img className={"up-arrow"} src={UpArrow}/>
            </div>   
        </>
    )
}
