import './App.css'
import React from 'react'
import WAVES from 'vanta/dist/vanta.waves.min'
import { BrowserRouter as Router} from "react-router-dom"
//components
import Home from "./components/pages/Home";

class App extends React.Component {
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
            shininess: 24.00,
            waveHeight: 5.00,
            waveSpeed: .7,
            color: 0x50505,
        })       
    }

    componentWillUnmount() {
        if (this.vantaEffect) this.vantaEffect.destroy()
    }

    render() {
        return ( 
            <Router> 
                <div id="vanta" ref={this.vantaRef}>             
                    <Home />  
                </div>     
            </Router>      
        )
    }
}

export default App;
