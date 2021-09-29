import React from 'react'

export default function Nav(props) {
    return (
        <>
            <div className={props.IsOpen ? "menu menu-open" : "menu"}>
                <ul>
                    <li><a href="/#home" onClick={props.toggleHamburger}>Home</a></li>
                    <li><a href="/#services" onClick={props.toggleHamburger}>Services</a></li>
                    <li><a href="/#aboutus" onClick={props.toggleHamburger}>About Us</a></li>
                    <li><a href="/#careers" onClick={props.toggleHamburger}>Careers</a></li>
                    <li>
                        <a href="#" 
                            onClick={ () => {
                                props.toggleContact()
                                props.toggleHamburger()
                            }}
                        >
                            Contact
                        </a>
                    </li>
                    <li><p>synergyemail@synergy.com | 022 011 211 | 25 Somthing St</p></li>
                </ul>
            </div>
        </>
    )
}
