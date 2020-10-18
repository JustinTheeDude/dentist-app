import React, {Component} from "react";
import { Form, Button} from "reactstrap";
import firebase from "./firebase.js";

// Component import
import DoctorInfo from './DoctorInfo';
import PatientInfo from './PatientInfo';
// import ProductsSpecs from './ProductsSpecs';
import TreatmentType from './TreatmentType';
import PaymentSelect from './PaymentSelect';
import InlayOnlay from './InlayOnlay';
import Crown from './Crown';
import Br from './Br';
import Denture from './Denture';
import OtherOption from './OtherOption';
import OralDevice from './OralDevice';
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
        specs: "",
        paymentType: "保険",
        treatmentType: "",
        inlayOnlay:"",
        inlayMaterial: "",
        inlayShade: "",
        crownMaterialInsured: "",
        crownShadeInsured: "",
        crownMaterialUninsured: "",
        crownShadeUninsured: "",
        BrMaterialInsured: "",
        BrShadeInsured: "" ,
        BrMaterialUninsured: "",
        BrShadeUninsured: "", 
        oralDeviceInsured: "",
        oralDeviceUninsured: "",
        otherOptionInsured: "",
        otherOptionUninsured: "",
        implantType: "",
        implantMaker: "",
        dentureInsured: "",
        dentureUninsured: "",
        dentureArtificialInsured: "",
        dentureFloorInsured: "",
        dentureClaspInsured: "",
        dentureBarInsured: "",
        dentureOtherInsured: "",
        mainComplaint: "",
        deliveryTime: "",
        OtherOption: "",
        drawing: "",
    };
    user = firebase.auth().currentUser;
    id = this.props.match.params.id
    
    onChange = deliveryDate => {
        this.setState({deliveryDate});
    };

    handleChange = e => {
            if(e.target.value === "保険") {
                this.setState({
                    crownMaterialUninsured: "",
                    crownShadeUninsured: "",
                    BrMaterialUninsured: "",
                    BrShadeUninsured: "", 
                    oralDeviceUninsured: "",
                    otherOptionUninsured: "",
                    dentureUninsured: "",
                })
            }
            if(e.target.value === "自費") {
                this.setState({
                    crownMaterialInsured: "",
                    crownShadeInsured: "",
                    BrMaterialInsured: "",
                    BrShadeInsured: "" ,
                    oralDeviceInsured: "",
                    otherOptionInsured: "",
                    dentureInsured: "",
                    dentureArtificialInsured: "",
                    dentureBarInsured: "",
                    dentureFloorInsured: "",
                    dentureClaspInsured: "",
                    dentureOtherInsured: "",
                })
            }
            this.setState({
                [e.target.name]: e.target.value,
                value: e.target.value,
            })
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
            crownMaterialInsured: this.state.crownMaterialInsured,
            crownShadeInsured: this.state.crownShadeInsured,
            crownMaterialUninsured: this.state.crownMaterialUninsured,
            crownShadeUninsured: this.state.crownShadeUninsured,
            BrMaterialInsured: this.state.BrMaterialInsured,
            BrShadeInsured: this.state.BrShadeInsured ,
            BrMaterialUninsured: this.state.BrMaterialUninsured,
            BrShadeUninsured: this.state.BrShadeUninsured,         
            oralDeviceInsured: this.state.oralDeviceInsured,
            oralDeviceUninsured: this.state.oralDeviceUninsured,
            otherOptionInsured: this.state.otherOptionInsured,
            otherOptionUninsured: this.state.otherOptionUninsured,
            implantType: this.state.implantType,
            implantMaker: this.state.implantMaker,
            dentureInsured: this.state.dentureInsured,
            dentureUninsured: this.state.dentureUninsured,
            dentureArtificialInsured: this.state.dentureArtificialInsured,
            dentureBarInsured: this.state.dentureBarInsured,
            dentureFloorInsured: this.state.dentureFloorInsured,
            dentureClaspInsured: this.state.dentureClaspInsured,
            dentureOtherInsured: this.state.dentureOtherInsured,
            mainComplaint: this.state.mainComplaint,
            deliveryTime: this.state.deliveryTime,
            OtherOption: this.state.OtherOption,
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
            crownMaterialInsured: this.state.crownMaterialInsured,
            crownShadeInsured: this.state.crownShadeInsured,
            crownMaterialUninsured: this.state.crownMaterialUninsured,
            crownShadeUninsured: this.state.crownShadeUninsured,
            BrMaterialInsured: this.state.BrMaterialInsured,
            BrShadeInsured: this.state.BrShadeInsured ,
            BrMaterialUninsured: this.state.BrMaterialUninsured,
            BrShadeUninsured: this.state.BrShadeUninsured, 
            oralDeviceInsured: this.state.oralDeviceInsured,
            oralDeviceUninsured: this.state.oralDeviceUninsured,
            otherOptionInsured: this.state.otherOptionInsured,
            otherOptionUninsured: this.state.otherOptionUninsured,
            implantType: this.state.implantType,
            implantMaker: this.state.implantMaker,
            dentureInsured: this.state.dentureInsured,
            dentureUninsured: this.state.dentureUninsured,
            dentureArtificialInsured: this.state.dentureArtificialInsured,
            dentureBarInsured: this.state.dentureBarInsured,
            dentureFloorInsured: this.state.dentureFloorInsured,
            dentureClaspInsured: this.state.dentureClaspInsured,
            dentureOtherInsured: this.state.dentureOtherInsured,
            mainComplaint: this.state.mainComplaint,
            deliveryTime: this.state.deliveryTime,
            OtherOption: this.state.OtherOption,
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
                    crownMaterialInsured: items["crownMaterialInsured"],
                    crownShadeInsured: items["crownShadeInsured"],
                    crownMaterialUninsured: items["crownMaterialUninsured"], 
                    crownShadeUninsured: items["crownShadeUninsured"],
                    BrMaterialInsured: items["BrMaterialInsured"],
                    BrShadeInsured: items["BrShadeInsured"] ,
                    BrMaterialUninsured: items["BrMaterialUninsured"],
                    BrShadeUninsured: items["BrShadeUninsured"],
                    oralDeviceInsured: items["oralDeviceInsured"],
                    oralDeviceUninsured: items["oralDeviceUninsured"],
                    otherOptionInsured: items["otherOptionInsured"],
                    otherOptionUninsured: items["otherOptionUninsured"],
                    implantType: items["implantType"],
                    implantMaker: items["implantMaker"],
                    dentureInsured: items["dentureInsured"],
                    dentureUninsured: items["dentureUninsured"],
                    dentureArtificialInsured: items["dentureArtificialInsured"],
                    dentureBarInsured: items["dentureBarInsured"],
                    dentureFloorInsured: items["dentureFloorInsured"],
                    dentureClaspInsured: items["dentureClaspInsured"],
                    dentureOtherInsured: items["dentureOtherInsured"],
                    mainComplaint: items["mainComplaint"],
                    deliveryTime: items["deliveryTime"],
                    OtherOption: items["OtherOption"],
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
                    {/* <ProductsSpecs handleChange={this.handleChange}  specs={this.state.specs} value={this.state.value} OtherOption={this.state.OtherOption}  /> */}
                    <TreatmentType   handleChange={this.handleChange} treatmentType={this.state.treatmentType} value={this.state.value}  />
                    <PaymentSelect handleChange={this.handleChange} paymentType={this.state.paymentType} />
               {
                  this.state.treatmentType === "インレー" &&
                   <div>
                        <h2><strong>インレーとアンレー</strong></h2> 
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
                    this.state.treatmentType === "クラウン" &&
                    <div>
                        <h2><strong>クラウン</strong></h2>
                            <Crown  
                                handleChange={this.handleChange} 
                                crownMaterialInsured={this.state.crownMaterialInsured} 
                                crownShadeInsured={this.state.crownShadeInsured}
                                crownMaterialUninsured={this.state.crownMaterialUninsured}
                                crownShadeUninsured={this.state.crownShadeUninsured}
                                paymentType={this.state.paymentType}  
                            />
                    </div>
                }
                {
                    this.state.treatmentType === "Br" &&
                    <div>
                        <h2><strong>Br</strong></h2>
                            <Br 
                                handleChange={this.handleChange}
                                paymentType={this.state.paymentType}
                                BrMaterialInsured={this.state.BrMaterialInsured} 
                                BrShadeInsured={this.state.BrShadeInsured}
                                BrMaterialUninsured={this.state.BrMaterialUninsured}
                                BrShadeUninsured={this.state.BrShadeUninsured}              
                            />
                    </div>
                }
                {
                    this.state.treatmentType === "口腔内装置" &&
                    <div>
                        <h2><strong>口腔内装置</strong></h2>
                            <OralDevice
                                handleChange={this.handleChange} 
                                oralDeviceInsured={this.state.oralDeviceInsured}
                                oralDeviceUninsured={this.state.oralDeviceUninsured}
                                paymentType={this.state.paymentType}  
                            />
                    </div>
                }
                {
                    this.state.treatmentType === "その他" &&
                    <div>
                        <h2><strong>その他</strong></h2>
                            <OtherOption
                                handleChange={this.handleChange}
                                otherOptionInsured={this.state.otherOptionInsured}
                                otherOptionUninsured={this.state.otherOptionUninsured}
                                paymentType={this.state.paymentType}  
                            />
                    </div>
                }
                {
                    this.state.treatmentType === "インプラント" &&
                    <div>
                        <h2><strong>インプラント</strong></h2>
                        &nbsp;&nbsp;&nbsp;
                            <Implant 
                                handleChange={this.handleChange} 
                                implantType={this.state.implantType}
                                implantMaker={this.state.implantMaker}
                                paymentType={this.state.paymentType}
                            />
                    </div>
                } 
                {
                    this.state.treatmentType === "義歯" &&
                    <div>
                        <h2><strong>義歯</strong></h2>
                            <Denture
                                handleChange={this.handleChange}
                                paymentType={this.state.paymentType}
                                dentureInsured={this.state.dentureInsured}
                                dentureUninsured={this.state.dentureUninsured}
                                dentureInsuredArtificial={this.state.dentureArtificialInsured}
                                dentureBarInsured={this.state.dentureBarInsured}
                                dentureFloorInsured={this.state.dentureFloorInsured}
                                dentureClaspInsured={this.state.dentureClaspInsured}
                                dentureOtherInsured={this.state.dentureOtherInsured}
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
