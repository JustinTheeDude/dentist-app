import React from "react";
import { useHistory } from 'react-router-dom';
import { Button } from "reactstrap";


function DeliveryDate ({ delivery, date,id }) {
   const history = useHistory();
   return (
    <div>
        <div className="delivery-div">
            Order date: {date}. Delivery date: {delivery}
        </div>
        <div>
            <Button className="nav-btn" onClick={() => history.goBack()}>戻る</Button>
            {
                id ?
                <Button className="nav-btn" onClick={()=> { history.push(`/form/${id}/confirm`) }} >次</Button>
                :
                <Button className="nav-btn" onClick={()=> { history.push(`/form/diagram`) }} >次</Button>
            }
        </div>
    </div>
   )
};

export default DeliveryDate;