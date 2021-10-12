import React, { Component } from 'react'
import { Switch, Route} from "react-router-dom"
//Components
///Pages
import Careers from '../pages/Careers'
import Main from '../pages/Main'
import NotFound from '../pages/NotFound'
///Layout
import ContactForm from '../layout/ContactForm'
import InfoCard from '../layout/InfoCard'
import Header from '../layout/Header'
import Nav from '../layout/Nav'
//images
///Service Cards
import Clouds from '../images/Clouds.jpg'
import NetSec from '../images/net-security.jpg'
import TechMap from '../images/techroadmap.jpg'
import Laptop from '../images/laptop.jpg'
import Continuity from '../images/continuity.jpg'
import Support from '../images/support.jpg'

export class Home extends Component {
    state = {
        FormOpen: false,
        CardExpanded: false,
        IsOpen: false,
        CardNum: 0,
        CardId: [0, 1, 2, 3, 4, 5],
        InfoCardTitle: [
            "YOUR CLOUD STRATEGY",
            "Technology To Enable Your Organisation",
            "TECHNOLOGY ROAD MAP",
            "Procurement",
            "Business Continuity Essentials",          
            "Supporting Your Business",
        ],
        InfoCardContent: [
            `1 Excepteur nisi irure cmmodo et eiusmod nulla. Amet et id consectetur deserunt. Laboris sint laborum pariatur cillum. Nulla culpa Lorem cupidatat ullamco. \n\nProident pariatur aute consectetur est eu in duis culpa laborum ullamco laborum.Pariatur voluptate qui minim ipsum minim labore enim aute aute. Ad aliquip et cillum Lorem quis velit elit est pariatur. \n\nIpsum ut culpa aute culpa reprehenderit est cillum dolore culpa qui consequat ad mollit dolore. Sint minim voluptate exercitation in pariatur in aliqua et officia et dolore commodo.`
            ,
            `2 Excepteur nisi irure cmmodo et eiusmod nulla. Amet et id consectetur deserunt. Laboris sint laborum pariatur cillum. Nulla culpa Lorem cupidatat ullamco. \n\nProident pariatur aute consectetur est eu in duis culpa laborum ullamco laborum.Pariatur voluptate qui minim ipsum minim labore enim aute aute. Ad aliquip et cillum Lorem quis velit elit est pariatur. \n\nIpsum ut culpa aute culpa reprehenderit est cillum dolore culpa qui consequat ad mollit dolore. Sint minim voluptate exercitation in pariatur in aliqua et officia et dolore commodo.`
            ,
            `3 Excepteur nisi irure cmmodo et eiusmod nulla. Amet et id consectetur deserunt. Laboris sint laborum pariatur cillum. Nulla culpa Lorem cupidatat ullamco. \n\nProident pariatur aute consectetur est eu in duis culpa laborum ullamco laborum.Pariatur voluptate qui minim ipsum minim labore enim aute aute. Ad aliquip et cillum Lorem quis velit elit est pariatur. \n\nIpsum ut culpa aute culpa reprehenderit est cillum dolore culpa qui consequat ad mollit dolore. Sint minim voluptate exercitation in pariatur in aliqua et officia et dolore commodo.`
            ,
            `4 Excepteur nisi irure cmmodo et eiusmod nulla. Amet et id consectetur deserunt. Laboris sint laborum pariatur cillum. Nulla culpa Lorem cupidatat ullamco. \n\nProident pariatur aute consectetur est eu in duis culpa laborum ullamco laborum.Pariatur voluptate qui minim ipsum minim labore enim aute aute. Ad aliquip et cillum Lorem quis velit elit est pariatur. \n\nIpsum ut culpa aute culpa reprehenderit est cillum dolore culpa qui consequat ad mollit dolore. Sint minim voluptate exercitation in pariatur in aliqua et officia et dolore commodo.`
            ,
            `5 Excepteur nisi irure cmmodo et eiusmod nulla. Amet et id consectetur deserunt. Laboris sint laborum pariatur cillum. Nulla culpa Lorem cupidatat ullamco. \n\nProident pariatur aute consectetur est eu in duis culpa laborum ullamco laborum.Pariatur voluptate qui minim ipsum minim labore enim aute aute. Ad aliquip et cillum Lorem quis velit elit est pariatur. \n\nIpsum ut culpa aute culpa reprehenderit est cillum dolore culpa qui consequat ad mollit dolore. Sint minim voluptate exercitation in pariatur in aliqua et officia et dolore commodo.`
            ,
            `6 Excepteur nisi irure cmmodo et eiusmod nulla. Amet et id consectetur deserunt. Laboris sint laborum pariatur cillum. Nulla culpa Lorem cupidatat ullamco. \n\nProident pariatur aute consectetur est eu in duis culpa laborum ullamco laborum.Pariatur voluptate qui minim ipsum minim labore enim aute aute. Ad aliquip et cillum Lorem quis velit elit est pariatur. \n\nIpsum ut culpa aute culpa reprehenderit est cillum dolore culpa qui consequat ad mollit dolore. Sint minim voluptate exercitation in pariatur in aliqua et officia et dolore commodo.`
        ],
        ServiceCardImages: [
            Clouds,
            NetSec,
            TechMap,
            Laptop,
            Continuity,
            Support
        ]      
    }

    //Toggles info card
    cardClick(cardNum){
        this.setState({CardNum: cardNum})
        this.setState({CardExpanded: !this.state.CardExpanded})
    }

    //Toggles hamburger menu
    toggleHamburger = () => {
        this.setState({IsOpen: !this.state.IsOpen})
    }
    
    //Toggles contact form
    toggleContact = () => {
        this.setState({FormOpen: !this.state.FormOpen})
    } 

    render() {
        return (        
            <>  
                {/* InFoCard: Opens in forground, Contains infomation about a selected service when a Service card is clicked */}
                <InfoCard 
                    CardExpanded={this.state.CardExpanded} 
                    cardClick={this.cardClick.bind(this)}
                    CardNum={this.state.CardNum}
                    InfoCardTitle={this.state.InfoCardTitle[this.state.CardNum]}
                    InfoCardContent={this.state.InfoCardContent[this.state.CardNum]}
                />

                {/* ContactForm: A contact form that opens in forground on any page */}
                <ContactForm FormOpen={this.state.FormOpen} toggleContact={this.toggleContact}/>

                {/* Header: Fixed at top of page contains logo and Hambuger button to open navigation */}
                <Header IsOpen={this.state.IsOpen} toggleHamburger={this.toggleHamburger}/>

                {/* Nav: Navigation opens full screen in forground */}
                <Nav IsOpen={this.state.IsOpen} toggleHamburger={this.toggleHamburger} toggleContact={this.toggleContact}/>

                <div id="Hero">                                              
                    <Switch>
                        <Route path="/careers">
                            <Careers />
                        </Route>
                        <Route path="/" exact>
                            <Main 
                                CardNum={this.state.CardNum}
                                CardId={this.state.CardId}
                                InfoCardTitle={this.state.InfoCardTitle}
                                InfoCardContent={this.state.InfoCardContent}
                                ServiceCardImages={this.state.ServiceCardImages}
                                serviceCards={this.serviceCards}
                                cardClick={this.cardClick.bind(this)}
                                toggleContact={this.toggleContact}
                            />
                        </Route> 
                        <Route path="/" >
                            <NotFound />
                        </Route>                        
                    </Switch>                           
                </div>
            </>
        )
    }
}

export default Home
