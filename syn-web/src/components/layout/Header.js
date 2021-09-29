import React from 'react'
import Logo from '../images/synlogo.png'
import { Squash as Hamburger } from 'hamburger-react'

export default function Header(props) {
    return (
        <>
            <header id={"headerId"}>
                <nav>
                    <div class="logo">
                        <a href="/#home"><img src={Logo}/></a>
                    </div>   
                    <Hamburger 
                        onToggle={props.toggleHamburger}
                        toggled={props.IsOpen}
                        size={40}
                        color="#fff"
                    />
                </nav>   
            </header>
        </>
    )
}

