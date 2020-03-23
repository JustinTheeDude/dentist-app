import React, { Component } from "react";

/**
 * Component Imports
 */
import Header from "./Components/Header";
import Maininfo from "./Components/MainInfo";
import Card from "./Components/Card";
import Login from "./Components/Login";

/**
 * styles Imports
 */
import "bootstrap/dist/css/bootstrap.css";
import "./styles/css/main.css";

// Routing imports

import { BrowserRouter,
         Route,
        //  Switch,
} from 'react-router-dom';

class App extends Component {
    state = {};

    render() {
        return (
            <BrowserRouter>
                <Route>
                    <div id="main_content">
                        <Header />
                        <Route exact path='/login' component={Login} />
                        <Route 
                            exact path="/form"
                            render={ () => <Maininfo /> }
                        />
                        <Route 
                            exact path="/cards"
                            render={ () => <Card /> } 
                         />
                    </div>
                </Route>
            </BrowserRouter>
        );
    }
}

export default App;
