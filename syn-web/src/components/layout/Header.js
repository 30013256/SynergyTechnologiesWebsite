import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Logo from "../images/synlogo.png";
import Progress from "../layout/Progress"

export class Header extends Component {
    state = {
        HambugerToggle: false,
        scrollPostion: 0
    }
    
    componentDidMount()  {
        this.listenToScrollEvent();
    }

    listenToScrollEvent = () => {
        document.addEventListener("scroll", () => {
          requestAnimationFrame(() => {
            // Calculates the scroll distance
            this.calculateScrollDistance();
          });
        });
    }

    calculateScrollDistance  =  ()  =>  {
        const  scrollTop  =  window.pageYOffset;
        const  winHeight  =  window.innerHeight;
        const  docHeight  =  this.getDocHeight();
      
        const  totalDocScrollLength = docHeight  -  winHeight;
        const  scrollPostion  =  Math.floor(scrollTop  /  totalDocScrollLength  *  100);
      
        this.setState({
          scrollPostion,
        });
    }

    getDocHeight  =  ()  =>  {
        return Math.max(
          document.body.scrollHeight,  document.documentElement.scrollHeight,
          document.body.offsetHeight,  document.documentElement.offsetHeight,
          document.body.clientHeight,  document.documentElement.clientHeight
        );
      }

    render() {
        return (     
            <>              
                <header id={"headerId"} className={this.props.scroll ? "bg" : ""}>
                    <nav>
                        <div class="logo">
                            <a><img src={Logo}/></a>
                        </div>
                        <ul>
                            <li><Link to="/">About Us</Link></li>
                            <li><Link to="/Careers">Careers</Link></li>
                            <li><Link to="/Careers">Contact</Link></li>
                        </ul>
                        
                        <Link to="/" className="contact-btn">Customer Portal</Link>

                        {/* <a id="h-menu-btn" className={this.state.HambugerToggle ? "x-btn clicked" : "x-btn"} onClick={ () => this.setState({HambugerToggle:  !this.state.HambugerToggle}) }>
                            <div class="h-menu"></div>
                        </a> */}     
                    </nav>   <Progress  scroll={ this.state.scrollPostion  +  '%' }  />
                </header>                
                
            </>   
        )
    }
}

export default Header
