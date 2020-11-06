import React from "react";
import { useHistory } from 'react-router-dom';
import { Button } from "reactstrap";


function DeliveryDate ({ delivery, date }) {
   const history = useHistory();
   return (
    <div>
        <div className="delivery-div">
            Order date: {date}. Delivery date: {delivery}
        </div>
        <div>
            <Button
            color="primary"
            onClick={() => history.goBack()}
            >Back
            </Button>
            &nbsp;&nbsp; &nbsp;&nbsp;
            <Button
            color="primary"
            onClick={()=> {
                history.push(`/form/diagram`) 
                }}
            >next
            </Button>
        </div>
    </div>
   )
};

export default DeliveryDate;