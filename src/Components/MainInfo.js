import React, {Component} from "react";
import { Form, FormGroup, Label, Input, Button} from "reactstrap";
import firebase from "./firebase.js";
// Component import
import Calendar from "react-calendar";
import DeliveryDate from "./DeliveryDate";


class MainInfo extends Component {
    state = {
        date: new Date(),
        deliveryDate: "",
        minDate: new Date(),
        doctorName: "",
        address: "",
        zip: "",
        patientName: "",
        patientID: "",
        age: "",
        gender: "男",
        specs: "レジン床",
        paymentType: "保険",
        inlayOnlay:"",
        inlayMaterial: "",
        inlayShade: "",
        abutmentType: "",
        touaregSystem: "なし",
        connectionSelect: "なし",
        abutmentShade: "",
        insertionGroup: "",
        mainComplaint: "",
        deliveryTime: "",
        otherOption: "",
    };
    user = firebase.auth().currentUser;
    id = this.props.match.params.id
    onChange = deliveryDate => {
        this.setState({deliveryDate});
    };

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
            value: e.target.value
        });
    };

    handleSubmit = e => {
 
        e.preventDefault();
        const user = firebase.auth().currentUser;
        const itemsRef = firebase.database().ref(`Dentist/${user.uid}/Form`);
        const item = {
            doctorName: this.user.displayName,
            address: this.state.address,
            zip: this.state.zip,
            patientName: this.state.patientName,
            patientID: this.state.patientID,
            date: this.state.date.toString().slice(0, 15),
            deliveryDate: this.state.deliveryDate.toString().slice(0, 15),  
            age: this.state.age,
            gender: this.state.gender,
            specs: this.state.specs,
            paymentType: this.state.paymentType,
            inlayOnlay: this.state.inlayOnlay,
            inlayMaterial: this.state.inlayMaterial,
            inlayShade: this.state.inlayShade,
            abutmentType: this.state.abutmentType,
            touaregSystem: this.state.touaregSystem,
            connectionSelect: this.state.connectionSelect,
            abutmentShade: this.state.abutmentShade,
            insertionGroup: this.state.insertionGroup,
            mainComplaint: this.state.mainComplaint,
            deliveryTime: this.state.deliveryTime,
            otherOption: this.state.otherOption
        };

        itemsRef.push(item);
        const ref = firebase.database().ref(`Dentist/${user.uid}/Info`)
        ref.update({address: this.state.address, zip: this.state.zip})

        this.props.history.push('/cards');
    }

    handleUpdate = (e) => {

        e.preventDefault()
        const orderRef = firebase.database().ref(`Dentist/${this.user.uid}/Form`).child(this.id)
        const items = {
            doctorName: this.user.displayName,
            address: this.state.address,
            zip: this.state.zip,
            patientName: this.state.patientName,
            patientID: this.state.patientID,
            date: this.state.date.toString().slice(0, 15),
            deliveryDate: this.state.deliveryDate.toString().slice(0, 15),  
            age: this.state.age,
            gender: this.state.gender,
            specs: this.state.specs,
            paymentType: this.state.paymentType,
            inlayOnlay: this.state.inlayOnlay,
            inlayMaterial: this.state.inlayMaterial,
            inlayShade: this.state.inlayShade,
            abutmentType: this.state.abutmentType,
            touaregSystem: this.state.touaregSystem,
            connectionSelect: this.state.connectionSelect,
            abutmentShade: this.state.abutmentShade,
            insertionGroup: this.state.insertionGroup,
            mainComplaint: this.state.mainComplaint,
            deliveryTime: this.state.deliveryTime,
            otherOption: this.state.otherOption
        };
       

        orderRef.update(items)
        this.props.history.push('/cards');
    }

    componentDidMount() {
        if(this.props.value !== "") {
            const ref = firebase.database().ref(`Dentist/${this.user.uid}/Info`)
            ref.on('value',(snap)=>{
                this.setState({
                    address: snap.val().address,
                    zip: snap.val().zip,
                })
            });
        }

        if(this.id) {
            const orderRef = firebase.database().ref(`Dentist/${this.user.uid}/Form`).child(this.id)
            orderRef.once("value", snap => {
               let items = snap.val();
               this.setState({
                    doctorName: items["doctorName"],
                    address: items["address"],
                    zip: items["zip"],
                    patientName: items["patientName"],
                    patientID: items["patientID"],
                    date: items["date"],
                    deliveryDate: items["deliveryDate"],
                    age: items["age"],
                    gender: items["gender"],
                    specs: items["specs"],
                    paymentType: items["paymentType"],
                    inlayOnlay: items["inlayOnlay"],
                    inlayMaterial:  items["inlayMaterial"],
                    inlayShade: items["inlayShade"],
                    abutmentType: items["abutmentType"],
                    touaregSystem: items["touaregSystem"],
                    connectionSelect: items["connectionSelect"],
                    abutmentShade: items["abutmentShade"],
                    insertionGroup: items["insertionGroup"],
                    mainComplaint: items["mainComplaint"],
                    deliveryTime: items["deliveryTime"],
                    otherOption: items["otherOption"],
                    complete: items["complete"],
                });

           })
        }
    }

    render() {
        const user = firebase.auth().currentUser

        return (
            <Form id="main_form" className="main-form" onSubmit={this.handleSubmit}>
                <h3 className="hospital-info-header">医院情報</h3>
                <FormGroup className="doc-name form-box">
                    <Label >担当名</Label>
                    { user.displayName ?
                        <h1>{user.displayName}</h1> :
                        <Input
                            type="text"
                            name="doctorName"
                            placeholder="名前"
                            onChange={this.handleChange}
                            value={user.displayName}
                        />  
                    }
                </FormGroup>
                <FormGroup className="hospital-address form-box">
                    <Label for="exampleAddress">医院名住所</Label> 
                    {     
                        this.state.address === null?
                        <h1>{this.state.address}</h1> :    
                        <Input
                            type="text"
                            name="address"
                            id="exampleAddress"
                            placeholder="市区町村"
                            onChange={this.handleChange}
                            value={this.state.address || ""} 
                        /> 
                    }
                   
                </FormGroup>
                <FormGroup className="zip form-box">
                    <Label for="exampleZip">〒</Label>
                {  
                    this.state.zip === null ?
                    <h1>{this.state.zip}</h1> :            
                <Input
                    type="text"
                    name="zip"
                    id="exampleZip"
                    onChange={this.handleChange}
                    value={this.state.zip || ""}
                /> 
                }
                </FormGroup>
                <h3 className="patient-info-header">患者情報</h3>
                <FormGroup className="patient-name form-box">
                    <Label className="patient-name-label">患者名</Label>
                        <Input
                            className="patient-name-input"
                            type="text"
                            name="patientName"
                            placeholder="名前"
                            onChange={this.handleChange}
                            value={this.state.patientName}
                        />
                        <Label className="patientId-label">患者名ID</Label>
                        <Input
                            className="patient-id-input"
                            type="number"
                            name="patientID"
                            placeholder="ID Number"
                            onChange={this.handleChange}
                            value={this.state.patientID}
                        />
                </FormGroup>
                <FormGroup className="age form-box">
                    <Label for="exampleNumber" >年令</Label>
                    <Input
                    onChange={this.handleChange}
                    type="number"
                    min="0"
                    name="age"
                    id="exampleNumber"
                    value={this.state.age}
                    placeholder="才"
                    />
                </FormGroup>
                <FormGroup className="gender-select-menu form-box">
                    <Label>性別</Label>
                    <Input type="select" name="gender" id="gender-select-menu"  value={this.state.gender}  onChange={this.handleChange} required>
                        <option>男</option>
                        <option>女</option>
                    </Input>
                </FormGroup>
                <FormGroup  className="product-specs-menu form-box">
                    <Label>製品仕様</Label>
                    <Input type="select" name="specs" id="specs" value={this.state.specs} onChange={this.handleChange} required>
                        <option>レジン床</option>
                        <option>金属床(Co-Cr. Ti. Gold)</option>
                        <option>治療用義歯</option>
                        <option id="otherOption">他</option>
                    </Input>
                    { this.state.value  === "他" || this.state.otherOption ?
                        <FormGroup>
                        <Label>他</Label>
                            <Input 
                                type="textarea" 
                                name="otherOption"  
                                placeholder="他" 
                                onChange={this.handleChange}
                                value={this.state.otherOption || ""} 
                                required  
                                /> 
                        </FormGroup>
                        :
                        null
                    }
                </FormGroup>
                <FormGroup className="patient-payment-select form-box">
                    <Label for="paymentSelect">支払い</Label>
                    <Input type="select" name="paymentType"  onChange={this.handleChange} required>
                        <option>保険</option>
                        <option>自費</option>
                    </Input>
                </FormGroup>
                <h2>Inlay and Onlay</h2>
                <FormGroup className="inlay-onlay form-box">
                    <Label for="inlayOnlay">インレーとアンレー</Label>
                    <Input type="select" name="inlayOnlay"  onChange={this.handleChange} required>
                        <option>クラウン</option>
                        <option>クラウン&#8226;ポンティック</option>
                        <option>インレーとアンレー</option>
                        <option>べニア</option>
                        <option>なし</option>        
                    </Input>
                    <Label for="inlay/onlay">補綴物インレー</Label>
                    <Input type="select" name="inlayMaterial"  onChange={this.handleChange} required>
                        <option>Emax</option>
                        <option>Zirconia - monolithic</option>
                        <option>Zirconia - veneered</option>       
                    </Input>
                    <Label for="inlay/onlay">シェード選択</Label>
                    <Input type="select" name="inlayShade"  onChange={this.handleChange} required>
                        <option>A 1</option>
                        <option>A 2</option>
                        <option>A 3</option>
                        <option>A 3,5</option>
                        <option>A 4</option>
                        <option>B 1</option>
                        <option>B 2</option>
                        <option>B 3</option>
                        <option>B 4</option>
                        <option>C 1</option>
                        <option>C 2</option>
                        <option>C 3</option>
                        <option>C 4</option>
                    </Input>
                </FormGroup>
                <h2>アバットメント</h2>
                <FormGroup className="abutment form-box">
                    <Label for="abutment">補綴物アバットメント</Label>
                    <Input type="select" name="abutmentType"  onChange={this.handleChange} required>
                        <option>Adin</option>
                        <option>Alfa Gate</option>
                        <option>Alliance</option>
                        <option>Alpha-Bio Tec</option>
                        <option>Anthogyr</option>
                        <option>Argon</option>
                        <option>Avinent</option>
                        <option>B&B Dental</option>         
                    </Input>
                    <Label for="touareg-system">システムTouareg</Label>
                    <Input type="select" name="touaregSystem"  onChange={this.handleChange} required>
                        <option>なし</option>         
                        <option>Touareg</option>
                    </Input>
                    <Label for="connection-select">接続選択</Label>
                    <Input type="select" name="connectionSelect"  onChange={this.handleChange} required>
                        <option>なし</option> 
                        <option>WP</option>
                        <option>NP</option>
                        <option>UNP</option>
                        <option>RP</option>
                    </Input>
                    <Label for="abutment">シェード選択</Label>
                    <Input type="select" name="abutmentShade"  onChange={this.handleChange} required>
                        <option>A 1</option>
                        <option>A 2</option>
                        <option>A 3</option>
                        <option>A 3,5</option>
                        <option>A 4</option>
                        <option>B 1</option>
                        <option>B 2</option>
                        <option>B 3</option>
                        <option>B 4</option>
                        <option>C 1</option>
                        <option>C 2</option>
                        <option>C 3</option>
                        <option>C 4</option>
                    </Input>
                    <Label for="abutment">挿入グループ</Label>
                    <Input type="select" name="insertionGroup"  onChange={this.handleChange} required>
                        <option>グループ外</option>
                        <option>グループを作成</option>
                    </Input>
                </FormGroup>

                <FormGroup className="main-complaint form-box">
                    <Label className="main-complaint-label">主訴</Label>
                        <Input type="textarea" name="mainComplaint" placeholder="主訴" onChange={this.handleChange} value={this.state.mainComplaint || ""} required />
                </FormGroup>
                <FormGroup  className="delivery-time form-box" >
                    <Label for="exampleTime">時間</Label>
                    <Input
                    type="time"
                    name="deliveryTime"
                    id="exampleTime"
                    placeholder="time placeholder"
                    value={this.state.deliveryTime}
                    onChange={this.handleChange}
                    />
                </FormGroup>
                    <h3 className="order-heading">発注日/納期日</h3>
                    <div className="calendar form-box">
                    <Calendar
                        calendarType="US"
                        onClickDay={this.onChange}
                        minDate={this.state.minDate}
                    />
                    <DeliveryDate
                        date={this.state.date.toString().slice(0, 15)}
                        delivery={this.state.deliveryDate.toString().slice(0, 15)}
                    />
                    {/* <div className="canvas form-box">
                        <Canvas />
                    </div> */}
                </div>
                {
                    !this.id ?
                    <Button id="btn" className="form-box">Submit</Button> :
                    <Button id="btn" className="form-box" onClick={this.handleUpdate}>Update</Button> 
                    
                }
            </Form>
        );
    }
}

export default MainInfo;
