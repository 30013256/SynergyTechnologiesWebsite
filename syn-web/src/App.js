import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/pages/Home";
import Careers from "./components/pages/Careers";



class App extends React.Component {
  render() {
    return (        
        <Router>
            <div id="page">    
                <Switch>
                    <Route path="/Careers">
                        <Careers />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>        
    );
  }
}

export default App;
