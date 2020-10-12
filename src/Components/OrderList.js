import React, { useState } from "react";
import {MyContext} from "./Context/AppProvider";
import CardInfo from "../Components/CardInfo";
import ListItem from "../Components/ListItem";

import {SlideDown} from 'react-slidedown'
import 'react-slidedown/lib/slidedown.css'


const OrderList = ({orders, pagination}) => {

let arr = orders

let sortedObj = arr.reduce((c, v) => {

  c[v.patientID] = c[v.patientID] || {}; //initializes an empty object
  c[v.patientID][v.id] = c[v.patientID][v.id] || {}; //initialize if the patientID property doesn't exist
  c[v.patientID][v.id][Object.keys(v)[1]] = c[v.patientID][v.id][Object.keys(v)[1]] || {}; // add the name property 
  c[v.patientID][v.id][Object.keys(v)[1]][Object.keys(v)[2]] = c[v.patientID][v.id][Object.keys(v)[1]][Object.keys(v)[2]]  || {}; // add the date property
  c[v.patientID][v.id][Object.keys(v)[1]] = v.patientName // add the value of the patientName property
  c[v.patientID][v.id][Object.keys(v)[2]] = v.date // add the value to the date property
  return c;
}, {});


    let arr1 = [];
    let arr2 = [];
    Object.keys(orders).map(key => arr1.push(orders[key].patientName));
    Object.keys(orders).map(key => arr2.push(orders[key].patientID ));
    const nameArr = new Set(arr1)
    const idArr = new Set(arr2)

    const names = [...nameArr]
    const ids = [...idArr]


    const values = names;
    const keys = ids
    
    const result = {};
    keys.forEach((key, i) => result[key] = values[i]);
 
    const [orderId, setOrder] = useState("");
    const [orderView, setOrderView] = useState(false);
    const [hideOrder, hiddenOrder] = useState("");
    const [hide, hideMe] = useState(false)

    const setUserOrder = (order) => {
        setOrder(order);
        setOrderView(true);
    }

    const goBack = () => {
        setOrderView(false);
    }

    const showHideList = (id) => {
        hiddenOrder(id)
        hideMe(!hide)
    }
    
    const contentRender = (orderView, orderId, orders, context) => {
        if(orderView) {
       
            return  (
                <>
                    <button className="back-button" onClick={goBack}></button>
                    <CardInfo value={orderId}/>
                </>
            )
        } else {
         
            return (
                <>
                <h1 className="card-title">Orders</h1>
                <div className="table-titles">
                    <ul>
                        <li>Patient Name</li>
                        <li>Patient ID</li>
                    </ul>
                </div>             
                {
                    
                    Object.keys(result).map(k  =>
                    <div className="table-titles" key={k}>
                        <ul>
                            <li>{result[k]}</li>
                            <li>{k}</li>                                  
                            <button id={k} onClick={() => showHideList(k)} className="arrow down">v</button>
                            {/* onClick={() => hiddenOrder(k)} */}
                        </ul>
                        <div className="contact-cards" key={k} id={k}>
                        {/* <div className="table-titles">
                            <ul>
                                <li>Patient Name</li>
                                <li>Patient ID</li>
                                <li>Date</li>
                            </ul>
                        </div> */}
                    {   
                                Object.keys(sortedObj).map(key => Object.keys(sortedObj[key]).map(key2 =>
                                    key === k &&
                                    hideOrder === key && hide &&
                                    <SlideDown className={'my-dropdown-slidedown'} key={key2}>
                                        <ul  key={key2} > 
                                            
                                            <ListItem order={sortedObj[key][key2]} patientID={key} id={key2}   setUserOrder={setUserOrder} />
                                        </ul>
                                    </SlideDown>
                                )) 
                               
                    }
                        </div> 
                    </div> 
                    )      
                }
             
            {pagination}
        </>

            );
        }
    }
    
    return (
        <MyContext.Consumer>
            {context => (
                <div className="cards">
                    {contentRender(orderView, orderId, orders, context)}
                </div>
            )}
        </MyContext.Consumer>
    );
};

export default OrderList;
