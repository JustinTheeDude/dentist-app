import React, {Component} from "react";
import { Form, Button} from "reactstrap";
import firebase from "./firebase.js";

// Component import
import DoctorInfo from './DoctorInfo';
import PatientInfo from './PatientInfo';
import ProductsSpecs from './ProductsSpecs';
import TreatmentType from './TreatmentType';
import PaymentSelect from './PaymentSelect';
import InlayOnlay from './InlayOnlay';
import Abutment from './Abutment';
import Telescope from './Telescope';
import Bridge from './Bridge';
import LocalDentFrame from './LocalDentFrame';
import Splint from './Splint';
import Implant from './Implant';
import MainComplaint from './MainComplaint';
import DeliveryTime from './DeliveryTime';
import Calendar from "react-calendar";
import DeliveryDate from "./DeliveryDate";
import Canvas from './Canvas';


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
        treatmentType: "なし",
        inlayOnlay:"",
        inlayMaterial: "",
        inlayShade: "",
        abutmentType: "",
        touaregSystem: "なし",
        connectionSelect: "なし",
        abutmentShade: "",
        insertionGroup: "",
        telescope: "",
        telescopeMaterial: "",
        telescopeShade: "",
        bridge: "",
        bridgeType: "",
        localDentureFrame: "",
        localDentureFrameMaterials: "",
        splint: "",
        splintMaterials: "",
        splintShade: "",
        implantTreatment: false,
        surgicalGuide: false,
        noTreatmentPlan: false,
        treatmentPlanMaterials: "",
        mainComplaint: "",
        deliveryTime: "",
        otherOption: "",
        drawing: "",
        // pic: ""
    };
    user = firebase.auth().currentUser;
    id = this.props.match.params.id
    
    onChange = deliveryDate => {
        this.setState({deliveryDate});
    };

    handleChange = e => {
        if( e.target.type === "checkbox") {
            const implantTreatment = document.querySelector("#implantTreatment");
            const surgicalGuide = document.querySelector("#surgicalGuide");
            const noTreatmentPlan = document.querySelector("#noTreatmentPlan");
            implantTreatment.disabled = false;
            surgicalGuide.disabled = false;
            noTreatmentPlan.disabled = false;
            if(e.target.checked && e.target.name === "noTreatmentPlan" ) {
                implantTreatment.disabled = true;
                surgicalGuide.disabled = true ;                
            } 
            else if(implantTreatment.checked || surgicalGuide.checked ) {
               noTreatmentPlan.disabled = true;
            }
                this.setState({
                    [e.target.name]: e.target.checked
                })
        }else {
            this.setState({
                [e.target.name]: e.target.value,
                value: e.target.value,
            })
        }
     
    };

    getDrawing = (data) => {
        this.setState({drawing: data})
    }

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
            treatmentType: this.state.treatmentType,
            inlayOnlay: this.state.inlayOnlay,
            inlayMaterial: this.state.inlayMaterial,
            inlayShade: this.state.inlayShade,
            abutmentType: this.state.abutmentType,
            touaregSystem: this.state.touaregSystem,
            connectionSelect: this.state.connectionSelect,
            abutmentShade: this.state.abutmentShade,
            insertionGroup: this.state.insertionGroup,        
            telescope: this.state.telescope,
            telescopeMaterial: this.state.telescopeMaterial,
            telescopeShade: this.state.telescopeShade,
            bridge: this.state.bridge,
            bridgeType: this.state.bridgeType,
            localDentureFrame: this.state.localDentureFrame,
            localDentureFrameMaterials: this.state.localDentureFrameMaterials,
            splint: this.state.splint,
            splintMaterials: this.state.splintMaterials,
            splintShade: this.state.splintShade,
            implantTreatment: this.state.implantTreatment,
            surgicalGuide: this.state.surgicalGuide,
            noTreatmentPlan: this.state.noTreatmentPlan,
            treatmentPlanMaterials: this.state.treatmentPlanMaterials,
            mainComplaint: this.state.mainComplaint,
            deliveryTime: this.state.deliveryTime,
            otherOption: this.state.otherOption,
            drawing: this.state.drawing,
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
            treatmentType: this.state.treatmentType,
            inlayOnlay: this.state.inlayOnlay,
            inlayMaterial: this.state.inlayMaterial,
            inlayShade: this.state.inlayShade,
            abutmentType: this.state.abutmentType,
            touaregSystem: this.state.touaregSystem,
            connectionSelect: this.state.connectionSelect,
            abutmentShade: this.state.abutmentShade,
            insertionGroup: this.state.insertionGroup,
            telescope: this.state.telescope,
            telescopeMaterial: this.state.telescopeMaterial,
            telescopeShade: this.state.telescopeShade,
            bridge: this.state.bridge,
            bridgeType: this.state.bridgeType,
            localDentureFrame: this.state.localDentureFrame,
            localDentureFrameMaterials: this.state.localDentureFrameMaterials,
            splint: this.state.splint,
            splintMaterials: this.state.splintMaterials,
            splintShade: this.state.splintShade,
            implantTreatment: this.state.implantTreatment,
            surgicalGuide: this.state.surgicalGuide,
            noTreatmentPlan: this.state.noTreatmentPlan,
            treatmentPlanMaterials: this.state.treatmentPlanMaterials,
            mainComplaint: this.state.mainComplaint,
            deliveryTime: this.state.deliveryTime,
            otherOption: this.state.otherOption,
            drawing: this.state.drawing
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
                    treatmentType: items["treatmentType"],
                    inlayOnlay: items["inlayOnlay"],
                    inlayMaterial:  items["inlayMaterial"],
                    inlayShade: items["inlayShade"],
                    abutmentType: items["abutmentType"],
                    touaregSystem: items["touaregSystem"],
                    connectionSelect: items["connectionSelect"],
                    abutmentShade: items["abutmentShade"],
                    insertionGroup: items["insertionGroup"],
                    telescope: items["telescope"],
                    telescopeMaterial: items["telescopeMaterial"],
                    telescopeShade: items["telescopeShade"],
                    bridge: items["bridge"],
                    bridgeType: items["bridgeType"],
                    localDentureFrame: items["localDentureFrame"],
                    localDentureFrameMaterials: items["localDentureFrameMaterials"],
                    splint: items["splint"],
                    splintMaterials: items["splintMaterials"],
                    splintShade: items["splintShade"],
                    implantTreatment: items["implantTreatment"],
                    surgicalGuide: items["surgicalGuide"],
                    noTreatmentPlan: items["noTreatmentPlan"],
                    mainComplaint: items["mainComplaint"],
                    treatmentPlanMaterials: items["treatmentPlanMaterials"],
                    deliveryTime: items["deliveryTime"],
                    otherOption: items["otherOption"],
                    complete: items["complete"],
                    drawing: items["drawing"],
                });
           })
        }
    }

    render() {
        const user = firebase.auth().currentUser

        return (
            <Form id="main_form" className="main-form" onSubmit={this.handleSubmit}>
                <h3 className="hospital-info-header">医院情報</h3>
                    <DoctorInfo user={user}  address={this.state.address} zip={this.state.zip} handleChange={this.handleChange} />
                <h3 className="patient-info-header">患者情報</h3>
                    <PatientInfo 
                        handleChange={this.handleChange} 
                        patientName={this.state.patientName} 
                        patientID={this.state.patientID} 
                        age={this.state.age} 
                        gender={this.state.gender} 
                    />
                    <ProductsSpecs handleChange={this.handleChange}  specs={this.state.specs} value={this.state.value} otherOption={this.state.otherOption}  />
                    <TreatmentType   handleChange={this.handleChange} treatmentType={this.state.TreatmentType} />
                    <PaymentSelect handleChange={this.handleChange} paymentType={this.state.paymentType} />
               {
                  this.state.treatmentType === "インレー" &&
                   <div>
                        <h2>インレーとアンレー</h2> 
                            <InlayOnlay 
                                handleChange={this.handleChange} 
                                inlayOnlay={this.state.inlayOnlay} 
                                inlayMaterial={this.state.inlayMaterial} 
                                inlayShade={this.state.inlayShade} 
                                paymentType={this.state.paymentType}                          
                            /> 
                   </div>

                }
                {
                    this.state.treatmentType === "アバットメント" &&
                    <div>
                        <h2>アバットメント</h2>
                            <Abutment  
                                handleChange={this.handleChange} 
                                abutmentType={this.state.abutmentType} 
                                touaregSystem={this.state.touaregSystem} 
                                connectionSelect={this.state.connectionSelect} 
                                abutmentShade={this.state.abutmentType} 
                                insertionGroup={this.state.insertionGroup}  
                            />
                    </div>
                }
                {
                    this.state.treatmentType === "テレスコープ" &&
                    <div>
                        <h2>テレスコープ</h2>
                            <Telescope 
                                handleChange={this.handleChange}
                                telescope={this.state.telescope}
                                telescopeMaterial={this.state.telescopeMaterial}
                                telescopeShade={this.state.telescopeShade}              
                            />
                    </div>
                }
                {
                    this.state.treatmentType === "ブリッジ" &&
                    <div>
                        <h2>ブリッジ</h2>
                            <Bridge 
                                handleChange={this.handleChange}
                                bridgeType={this.state.bridgeType}
                            />
                    </div>
                }
                {
                    this.state.treatmentType === "局所義歯" &&
                    <div>
                        <h2>局所義歯</h2>
                            <LocalDentFrame 
                                handleChange={this.handleChange}
                                localDentureFrame={this.state.localDentureFrame}
                                localDentureFrameMaterials={this.state.localDentureFrameMaterials}
                            />

                    </div>
                }
                {
                    this.state.treatmentType === "装置" &&
                    <div>
                        <h2>装置</h2>
                            <Splint
                                handleChange={this.handleChange} 
                                splint={this.state.splint}
                                splintMaterials={this.state.splintMaterials}
                                splintShade={this.state.splintShade}
                            />
                    </div>
                }
                {
                    this.state.treatmentType === "インプラント" &&
                    <div>
                        <h2>インプラント</h2>
                        &nbsp;&nbsp;&nbsp;
                            <Implant 
                                handleChange={this.handleChange} 
                                implantTreatment={this.state.implantTreatment}
                                surgicalGuide={this.state.surgicalGuide}
                                noTreatmentPlan={this.state.noTreatmentPlan}
                                treatmentPlanMaterials={this.state.treatmentPlanMaterials}
                            />
                    </div>
                }
                    <MainComplaint handleChange={this.handleChange} mainComplaint={this.state.mainComplaint} />
                    <DeliveryTime  handleChange={this.handleChange} deliveryTime={this.state.deliveryTime} />
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
                </div>
                <div className="canvas form-box">
                    <Canvas drawing={this.state.drawing} id={this.id} getDrawing={this.getDrawing} />
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
