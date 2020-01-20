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
<<<<<<< HEAD
    };

    onChange = date => this.setState({date});

    render() {
=======
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
        
>>>>>>> f0190859f7669a28a5626e3b2a2b018952a9d9a0
        return (
            <div>
                <Header />
                <MainInfo />
                <h3 className="order-heading">発注日/納期日</h3>
                <Calendar
<<<<<<< HEAD
                    selectRange={true}
                    onChange={value =>
                        console.log(
                            "Start date is:",
                            value[0].toString().slice(0, 16),
                            "Finish date is:",
                            value[1].toString().slice(0, 16)
                        )
                    }
                    calendarType="US"
=======
                 selectRange={true}  calendarType="US" 
                //  onChange={(value, event) => value ? <DeliveryDate orderDate={this.value[0].toString().slice(0,16)} dueDate={this.value[1].toString().slice(0,16)}/> : null}
>>>>>>> f0190859f7669a28a5626e3b2a2b018952a9d9a0
                />
            </div>
        );
    }
}

export default App;
