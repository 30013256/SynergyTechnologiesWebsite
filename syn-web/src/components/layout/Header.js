import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Logo from "../images/synlogo.png";
import Progress from "../layout/Progress"

export class Header extends Component {

    render() {
        return (     
            <>              
                <header id={"headerId"} className={this.props.scroll ? "bg" : ""}>
                    <nav>
                        <div class="logo">
                            <a><img src={Logo}/></a>
                        </div>
                        {/* <ul>
                            <li><Link to="/">About Us</Link></li>
                            <li><Link to="/Careers">Careers</Link></li>
                            <li><Link to="/Careers">Contact</Link></li>
                        </ul>
                        
                        <Link to="/" className="contact-btn">Customer Portal</Link> */}

                        <a id="h-menu-btn" className={this.state.HambugerToggle ? "x-btn clicked" : "x-btn"} onClick={ () => this.setState({HambugerToggle:  !this.state.HambugerToggle}) }>
                            <div class="h-menu"></div>
                        </a>     
                    </nav>   <Progress  scroll={ this.state.scrollPostion  +  '%' }  />
                </header>                
                
            </>   
        )
    }
}

export default Header
