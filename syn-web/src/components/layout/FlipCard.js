import React from 'react'

export default function FlipCard(props) {
    return (
        <>
            <div className={"flip-card"}>                           
                <div className={"flip-card-inner"}>
                    <div className={"flip-card-front"}>
                        <img src={props.img}/>
                        <h1>{props.header}</h1>
                    </div>
                    <div className={"flip-card-back"}>
                        <div className={"flip-card-back-container"}>
                            <h1>{props.header}</h1>
                            <p>{props.content}</p>
                        </div>
                    </div>
                </div>
            </div>   
        </>
    )
}
