import React, {useEffect, useState} from "react";
import firebase from "firebase";
<<<<<<< HEAD
import {BrowserRouter as Router } from "react-router-dom";

class Card extends Component {
    state = {
        items: [],
    };
    
     handleClick = (e, id) => {
        e.preventDefault();
        console.log(`this card was clicked: ${id}`);
    }
    componentDidMount() {
=======
import OrderList from "./OrderList";
import Pagination from "./Pagination";

const Card = () => {
    const [orders, setOrders] = useState([]);
    const [orderPerPage] = useState(4);
    const [currentOrderPage, setCurrentOrderPage] = useState(1);

    useEffect(() => {
>>>>>>> e7112c7998e751572ae42371a2727fa09d3ddd24
        const itemsRef = firebase.database().ref("Form");
        let newState = [];
        itemsRef.on("value", snap => {
            let items = snap.val();
            for (let item in items) {
                newState.push({
                    id: item,
                    contactName: items[item].contactName,
                    address: items[item].address,
                    complete: items[item].complete,
                });
            }
            setOrders(newState);
        });
    }, []);

    const indexOfLastOrder = currentOrderPage * orderPerPage;
    const indexOfFirstOrder = indexOfLastOrder - orderPerPage;
    const currentOrder = orders.slice(indexOfFirstOrder, indexOfLastOrder);
    const numbers = document.querySelectorAll(".number");

    const paginate = (pageNumber, e) => {
        numbers.forEach(number => {
            number.classList.remove("active");
        });
<<<<<<< HEAD
    }
    render() {
        return (
            <Router>
                    <div className="cards">
                        {this.state.items.map(item => {
                            return (           
                            
                                <div className="contact-cards" key={item.id} onClick={e => this.handleClick(e,item.id) }>
                                    <div className="contact-info" >
                                        <h1>{item.contactName}</h1>
                                        <p>{item.address}</p>
                                    </div>
                                </div>
                           
                            );
                        })}
                    </div>
            </Router>
        );
    }
}
=======
        e.target.classList.add("active");
        setCurrentOrderPage(pageNumber);
    };

    return (
        <>
            <OrderList
                orders={currentOrder}
                pagination={<Pagination orderPerPage={orderPerPage} totalOrders={orders.length} paginate={paginate} />}
            />
        </>
    );
};

>>>>>>> e7112c7998e751572ae42371a2727fa09d3ddd24

export default Card;