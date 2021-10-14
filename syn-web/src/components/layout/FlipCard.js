import React from 'react'
import { Link } from 'react-router-dom'

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
                            <div className={"flipcard-header"}>
                                <h1>{props.header}</h1>
                                <Link to="careers">Veiw Careers Page</Link>
                            </div>                       
                            <p>{props.content}</p>
                        </div>
                    </div>
                </div>
            </div>   
        </>
    )
}
