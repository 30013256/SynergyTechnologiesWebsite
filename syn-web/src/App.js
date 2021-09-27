import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./components/pages/Home";



class App extends React.Component {
  render() {
    return ( 
        <div id="page">               
            <Home />                
        </div>       
    );
  }
}

export default App;
