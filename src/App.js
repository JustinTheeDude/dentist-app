import React, {Component} from "react";
import Header from "./Components/Header";
import MainInfo from "./Components/MainInfo";
import Calendar from "react-calendar";
// import DeliveryDate from "./Components/DeliveryDate";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

class App extends Component {

    state = {
        date: new Date(),
      }
    
    onChange = date => this.setState({ date })
    
    // onclick = (value, event) => {
    //     let dateOrder =  value[0].toString().slice(0,16)
    //     let dueDate = value[1].toString().slice(0,16)
    //     return [dateOrder, dueDate]
    // }
    
    // dates = this.onclick();
    // firstDate = this.dates[0]
    // secondDate = this.dates[1]
    render() {
        
        return (
            <div>
                <Header />
                <MainInfo />
                <h3 className="order-heading">発注日/納期日</h3>
                <Calendar
                 selectRange={true}  calendarType="US" 
                //  onChange={(value, event) => value ? <DeliveryDate orderDate={this.value[0].toString().slice(0,16)} dueDate={this.value[1].toString().slice(0,16)}/> : null}
                />
            </div>
        );
    }

}

export default App;
