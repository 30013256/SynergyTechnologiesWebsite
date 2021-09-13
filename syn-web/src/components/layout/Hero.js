import React, { Component, useState } from 'react';
import WAVES from 'vanta/dist/vanta.waves.min';
import { Link } from 'react-router-dom';

export class Hero extends Component {
    constructor() {
        super()
        this.vantaRef = React.createRef()
    }

    componentDidMount() {
        this.vantaEffect = WAVES({
            el: this.vantaRef.current,
            mouseControls: false,
            touchControls: false,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            shininess: 28.00,
            waveHeight: 8.00,
            waveSpeed: 0.25,
            color: 0x20202
        })

    }

    componentWillUnmount() {
        if (this.vantaEffect) this.vantaEffect.destroy()
    }   
    
    state = {
        Sleep: false,
        Scrolling: false,
        HeroTitleSlideNum: 0,
        HeroTitleList: [
            "Extend And Enable Your IT Team",
            "Our Values At Synergy",
            "What We Provide At Synergy",
            "Our Comunity At Synergy"
        ],       
        Content: [
            <div>
                <p>Need that extra bit of IT support that your company currently does not have?</p>
                <p>We can extend the support of your current IT team with our friendly online team that’s ready to face any issue you can’t currently solve, to get you back on the right track.</p>
            </div>,
            <div className="our-values">
                <div className="left">
                    <p>People</p>
                    <p>Always</p>
                    <p>Always</p>
                    <p>Always with</p>
                </div>
                <div className="right">
                    <p>First</p>
                    <p>Listening</p>
                    <p>Learning</p>
                    <p>Integrity</p>
                </div>
            </div>,
            <div>
                <p>What we provide at Synergy is a personal, local IT support experience with our tight knit team right here in New Zealand.</p>
                <p>We provide 24/7 online support and will send people from our team to your business for issues that can not be resolved online.</p>
            </div>,
            <div>
                <p>At Synergy, supporting our community is one of our biggest focuses.</p>
                <p>We do this by supporting our local charities, like Good Neighbor and Awhina house.</p>
                <p>We also get involved in events to help our community like our community clean up events.</p>
            </div>
        ],
        AnimationName: "enter",
        Fade: "in"
    }

    async scrollDown(){
        if(this.state.HeroTitleSlideNum < 3 && this.state.Sleep === false){
            this.setState({Sleep: true})        
            this.setState({AnimationName: "exit"})
            this.setState({Fade: "out"})
            await new Promise( res => setTimeout(res, 500) );
            this.setState({HeroTitleSlideNum: (this.state.HeroTitleSlideNum + 1)})
            this.setState({AnimationName: "enter"})
            this.setState({Fade: "in"})
            await new Promise( res => setTimeout(res, 500) );
            this.setState({Sleep: false})
        }       
        else if(this.state.HeroTitleSlideNum == 3){
            this.setState({Scrolling: true})
            this.props.toggleSroll(true)
        }
    }

    async scrollUp(){    
        if(this.state.HeroTitleSlideNum > 0 && this.state.Sleep === false){
            this.setState({Sleep: true}) 
            this.setState({AnimationName: "exit"})
            this.setState({Fade: "out"})
            await new Promise( res => setTimeout(res, 500) );
            this.setState({HeroTitleSlideNum: (this.state.HeroTitleSlideNum - 1)})
            this.setState({AnimationName: "enter"})
            this.setState({Fade: "in"})
            await new Promise( res => setTimeout(res, 500) );
            this.setState({Sleep: false})
        }      
    }

    async scrollTo(num){
        if(this.state.Sleep === false && num != this.state.HeroTitleSlideNum){
            this.setState({Sleep: true})        
            this.setState({AnimationName: "exit"})
            this.setState({Fade: "out"})
            await new Promise( res => setTimeout(res, 500) );
            this.setState({HeroTitleSlideNum: num})
            this.setState({AnimationName: "enter"})
            this.setState({Fade: "in"})
            await new Promise( res => setTimeout(res, 500) );
            this.setState({Sleep: false})
        }     
    }

    async onscroll(e){
        if(e.nativeEvent.wheelDelta < 0 && this.state.Sleep === false && this.state.Scrolling === false){
            if(this.state.HeroTitleSlideNum == 3){
                this.setState({Scrolling: true})
                this.props.toggleSroll(true)
            }
            else if(this.state.HeroTitleSlideNum < 3){
                this.scrollDown()
            }
                
        } 
        if(e.nativeEvent.wheelDelta > 0 && this.state.Sleep === false){
            if(this.state.Scrolling === false && this.state.HeroTitleSlideNum > 0){
                this.scrollUp()
            }
            else if(window.scrollY === 0){
                this.setState({Scrolling: false})
                this.props.toggleSroll(false)
            }
        }                    
    }


    render() {
        return (
            <div id="Hero" ref={this.vantaRef} onWheel = {(e) => this.onscroll(e)}>               
                <div className="hero-content-container">                 
                    <div className={`hero-title-box ${this.state.AnimationName}`}>{this.state.HeroTitleList[this.state.HeroTitleSlideNum]}</div>                
                    <div className={`hero-content ${this.state.Fade}`}>{this.state.Content[this.state.HeroTitleSlideNum]}</div>        
                    <ul>
                        <li>
                            <Link to="" onClick={ () => this.scrollUp()}>
                                <div className={"arrow-up"}></div>
                            </Link>
                        </li>
                        <li><Link to="" onClick={ () => this.scrollTo(0) } className={this.state.HeroTitleSlideNum === 0 ? "active" : ""}>Your IT</Link></li>
                        <li><Link to="" onClick={ () => this.scrollTo(1) } className={this.state.HeroTitleSlideNum === 1 ? "active" : ""}>Our Values</Link></li>
                        <li><Link to="" onClick={ () => this.scrollTo(2) } className={this.state.HeroTitleSlideNum === 2 ? "active" : ""}>What we provide</Link></li>
                        <li><Link to="" onClick={ () => this.scrollTo(3) } className={this.state.HeroTitleSlideNum === 3 ? "active" : ""}>Our Comunity</Link></li>
                        <li>
                            <Link to="" onClick={ () => this.scrollDown()}>
                                <div className={"arrow-down"}></div>
                            </Link>
                        </li>
                    </ul>                   
                </div>          
            </div>
        )
    }
}

export default Hero
