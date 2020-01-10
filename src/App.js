import React, {Component} from "react";
import Header from "./Components/Header";
import MainInfo from "./Components/MainInfo";
import Calendar from "react-calendar";
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
                <h3 className="order-heading">発注日/納期日</h3>
                <Calendar selectRange={true} onChange={(value) => console.log('Start date is:', value[0].toString().slice(0,16), 'Finish date is:', value[1].toString().slice(0,16))} calendarType="US" />
            </div>
        );
    }

}

export default App;
