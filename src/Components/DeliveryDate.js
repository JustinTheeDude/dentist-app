import React from "react";



function DeliveryDate ({ delivery, date,id }) {
 
   return (
    <div>
        <div className="delivery-div">
            Order date: {date}. Delivery date: {delivery}
        </div>
    </div>
   )
};

export default DeliveryDate;