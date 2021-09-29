import React from 'react'

export default function InfoCard(props) {
    return (
        <>
            <div 
                onClick={() => props.cardClick(props.CardNum)} 
                className={props.CardExpanded ? "infocard expanded" : "infocard"}
            >
                <div>
                    <h1>{props.InfoCardTitle}</h1>
                    <p>{props.InfoCardContent}</p>
                </div>
            </div>
        </>
    )
}
