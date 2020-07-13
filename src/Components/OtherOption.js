import React, { useState } from "react";
import { FormGroup, Col, Input } from "reactstrap";
import firebase from 'firebase';

const OtherOption = () => {
    

    const handleChange = e => {
        const {name, value} = e.target
        setValues({values, [name]: value})

        
    }
    const [values, setValues] = useState({otherOption: ''})
    const itemsRef = firebase.database().ref("Form");
   
    itemsRef.orderByKey().on("child_added", (snapshot) => {  
        // const user = firebase.auth().currentUser
        if(snapshot.key) {
            itemsRef.child(snapshot.key).update({
                otherOption: values.otherOption
            })
        }
    })
    return (
        <FormGroup row >
        <Col sm={10}>
            <Input type="textarea" name="otherOption"  value={values.otherOption} placeholder="他" onChange={handleChange} />
            {console.log("this is the other option value: " , values.otherOption)}
        </Col>
        </FormGroup> 
    )
}

export default OtherOption;

