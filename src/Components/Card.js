import React, {Component} from "react";
import firebase from "firebase";
import {Link} from "react-router-dom";
import CardInfo from "./CardInfo";
import Layout from "./Layout";

import { Consumer } from './Context';

const Card = () => {
    return (
        <Consumer>
            {context => {
                const itemsRef = firebase.database().ref("Form");
                itemsRef.on("value", snap => {
                let items = snap.val();
                let newContext = [];
             for (let item in items) {
                newContext.push({
                     id: item,
                     contactName: items[item].contactName,
                    address: items[item].address,
                 });
             }
             context = {item: newContext };
         });


                return (
                <div className="cards">
                 { context.items.map(item => {
                  return (
                        <Link
                            to={{
                                pathname: "/info",
                                state: {cardId: item.id},                             
                            }}
                         >
                            <div className="contact-cards" key={item.id}>
                                 <div className="contact-info">
                                     <h1>{item.contactName}</h1>
                                    <p>{item.address}</p>
                                 </div>
                             </div>
                        </Link>
                     );
                 })}
            </div>
                );
            }}
        </Consumer>
    )
}





// class Card extends Component {
//     state = {
//         items: [],
//         cardId: "",
//     };

//     componentDidMount() {
//         const itemsRef = firebase.database().ref("Form");
//         itemsRef.on("value", snap => {
//             let items = snap.val();
//             let newState = [];
//             for (let item in items) {
//                 newState.push({
//                     id: item,
//                     contactName: items[item].contactName,
//                     address: items[item].address,
//                 });
//             }
//             this.setState({items: newState});
//         });

//         console.log(this.state);
//     }

//     render() {
//         return (
//             <div className="cards">
//                 {this.state.items.map(item => {
//                     return (
//                         <Link
//                             to={{
//                                 pathname: "/info",
//                                 state: {cardId: item.id},
//                             }}
//                         >
//                             <div className="contact-cards" key={item.id}>
//                                 <div className="contact-info">
//                                     <h1>{item.contactName}</h1>
//                                     <p>{item.address}</p>
//                                 </div>
//                             </div>
//                         </Link>
//                     );
//                 })}
//             </div>
//         );
//     // }
// }

export default Card;
