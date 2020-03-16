import React, {Component} from "react";
import Header from "./Components/Header";
import Maininfo from "./Components/MainInfo";
import Card from "./Components/Card";
import "bootstrap/dist/css/bootstrap.css";
import "./styles/css/main.css";

// Routing imports

import { BrowserRouter,
         Route,
         Switch,
} from 'react-router-dom';

class App extends Component {
    state = {};

    render() {
        return (
            < BrowserRouter>
            <Route path="/">
                <div id="main_content">
                    <Header />
                        <Route 
                            exact path="/card/:id"
                            render={ () => <Card /> } 
                        />
                        <Route 
                            exact path="/form"
                            render={ () => <Maininfo />}

                        />
                </div>
                </Route>
            </BrowserRouter>
        );
    }
}

export default App;
