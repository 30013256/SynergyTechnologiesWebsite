import React, { Component } from 'react';
import Hero from '../layout/Hero';
import Header from "../layout/Header";
import Services from './Services';


export class Home extends Component {
    constructor() {
        super()
    }

    state = {
        scroll: false
    }

    toggleScroll = (bool) => {
        this.setState({scroll: bool})
    }

    render() {
        return (
            <div className={this.state.scroll ? "" : "no-scroll"}>
                <Header scroll={this.state.scroll}/>
                <Hero toggleSroll={this.toggleScroll.bind(this)} />
                <div className="Other">
                    <Services/>
                </div>
            </div>
        )
    }
}

export default Home
