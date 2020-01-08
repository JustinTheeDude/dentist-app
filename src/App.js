import React, {Component} from "react";
import Header from "./Components/Header";
import MainInfo from "./Components/MainInfo";
// import Calendar from "react-calendar";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

class App extends Component {

    state = {
        date: new Date(),
      }
    
    onChange = date => this.setState({ date })

    render() {


        return (
            <div>
                <Header />
                <MainInfo />
                {/* <Calendar selectRange={true} /> */}
            </div>
        );
    }

}

export default App;
