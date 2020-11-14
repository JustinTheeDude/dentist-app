import React, {Component} from "react";
import { Form } from "reactstrap";
import firebase from "./firebase.js";

// Component import
import DoctorInfo from './DoctorInfo';
import PatientInfo from './PatientInfo';
import TreatmentType from './TreatmentType';
import PaymentSelect from './PaymentSelect';
import Inlay  from './Inlay';
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
import MouthCanvas from './MouthCanvas';
import PtnadultCanvas from './PtnadultCanvas'
import Confirmation from "./Confirmation";

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
        paymentType: "保険",
        treatmentType: "",
        inlayInvolution: "", 
        inlayInvolutionBT: "",
        inlaySpecInsured:"",
        inlaySpecUninsured: "",
        inlayMaterial: "",
        inlayShade: "",
        crownInvolution: "", 
        crownInvolutionBT: "",
        crownMaterialInsured: "",
        crownShadeInsured: "",
        crownMaterialUninsured: "",
        crownShadeUninsured: "",
        BrInvolution: "",
        BrInvolutionBT: "",
        BrMaterialInsured: "",
        BrShadeInsured: "" ,
        BrMaterialUninsured: "",
        BrShadeUninsured: "", 
        oralDeviceInsured: "",
        oralDeviceUninsured: "",
        otherOptionInsured: "",
        otherOptionUninsured: "",
        implantType: "",
        implantMaterial: "", 
        implantTray: "",
        implantMaker: "",
        implantMakerNobelOption: "",
        implantMakerCamlogOption: "",
        implantMakerAnkylosOption: "",
        implantMakerAstraTechOption: "",
        implantShade: "", 
        dentureInvolution: "",
        dentureInvolutionBT: "",
        dentureInsured: "",
        dentureUninsured: "",
        dentureArtificialInsured: "",
        dentureFloorInsured: "",
        dentureBarInsured: "",
        dentureBarUninsured:"",
        dentureOtherInsured: "",
        mainComplaint: "",
        deliveryTime: "",
        OtherOption: "",
        drawing: "",
        diagram: "",
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
                    dentureBarUninsured: "",
                    inlaySpecUninsured: "",
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
                    inlaySpecInsured:"",
                })
            }
            if(this.state.implantType) {
                this.setState({
                    paymentType: "自費"
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
    getDiagram = (data) => {
        this.setState({diagram: data})
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
            paymentType: this.state.paymentType,
            treatmentType: this.state.treatmentType,
            inlayInvolution: this.state.inlayInvolution, 
            inlayInvolutionBT: this.state.inlayInvolutionBT,
            inlaySpecInsured: this.state.inlaySpecInsured,
            inlaySpecUninsured: this.state.inlaySpecUninsured,
            inlayMaterial: this.state.inlayMaterial,
            inlayShade: this.state.inlayShade,
            crownInvolution: this.state.crownInvolution, 
            crownInvolutionBT: this.state.crownInvolutionBT,
            crownMaterialInsured: this.state.crownMaterialInsured,
            crownShadeInsured: this.state.crownShadeInsured,
            crownMaterialUninsured: this.state.crownMaterialUninsured,
            crownShadeUninsured: this.state.crownShadeUninsured,
            BrInvolution: this.state.BrInvolution, 
            BrInvolutionBT: this.state.BrInvolutionBT,
            BrMaterialInsured: this.state.BrMaterialInsured,
            BrShadeInsured: this.state.BrShadeInsured ,
            BrMaterialUninsured: this.state.BrMaterialUninsured,
            BrShadeUninsured: this.state.BrShadeUninsured,         
            oralDeviceInsured: this.state.oralDeviceInsured,
            oralDeviceUninsured: this.state.oralDeviceUninsured,
            otherOptionInsured: this.state.otherOptionInsured,
            otherOptionUninsured: this.state.otherOptionUninsured,
            implantType: this.state.implantType,
            implantMaterial: this.state.implantMaterial,
            implantTray:this.state.implantTray,
            implantMaker: this.state.implantMaker,
            implantMakerNobelOption: this.state.implantMakerNobelOption,
            implantMakerCamlogOption:this.state.implantMakerCamlogOption,
            implantMakerAnkylosOption: this.state.implantMakerAnkylosOption,
            implantMakerAstraTechOption: this.state.implantMakerAstraTechOption,
            implantShade:this.state.implantShade,
            dentureInvolution: this.state.dentureInvolution,
            dentureInvolutionBT: this.state.dentureInvolutionBT, 
            dentureInsured: this.state.dentureInsured,
            dentureUninsured: this.state.dentureUninsured,
            dentureArtificialInsured: this.state.dentureArtificialInsured,
            dentureBarInsured: this.state.dentureBarInsured,
            dentureBarUninsured: this.state.dentureBarUninsured,
            dentureFloorInsured: this.state.dentureFloorInsured,
            dentureOtherInsured: this.state.dentureOtherInsured,
            mainComplaint: this.state.mainComplaint,
            deliveryTime: this.state.deliveryTime,
            OtherOption: this.state.OtherOption,
            drawing: this.state.drawing,
            diagram: this.state.diagram
        };
        itemsRef.push(item);

        const ref = firebase.database().ref(`Dentist/${user.uid}/Info`)
        ref.update({address: this.state.address, zip: this.state.zip})

        this.props.history.push('/cards');
    }

    handleUpdate = () => {

        // e.preventDefault()
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
            paymentType: this.state.paymentType,
            treatmentType: this.state.treatmentType,
            inlayInvolution: this.state.inlayInvolution, 
            inlayInvolutionBT: this.state.inlayInvolutionBT,
            inlaySpecInsured: this.state.inlaySpecInsured,
            inlaySpecUninsured: this.state.inlaySpecUninsured,
            inlayMaterial: this.state.inlayMaterial,
            inlayShade: this.state.inlayShade,
            crownInvolution: this.state.crownInvolution, 
            crownInvolutionBT: this.state.crownInvolutionBT,
            crownMaterialInsured: this.state.crownMaterialInsured,
            crownShadeInsured: this.state.crownShadeInsured,
            crownMaterialUninsured: this.state.crownMaterialUninsured,
            crownShadeUninsured: this.state.crownShadeUninsured,
            BrInvolution: this.state.BrInvolution, 
            BrInvolutionBT: this.state.BrInvolutionBT,
            BrMaterialInsured: this.state.BrMaterialInsured,
            BrShadeInsured: this.state.BrShadeInsured ,
            BrMaterialUninsured: this.state.BrMaterialUninsured,
            BrShadeUninsured: this.state.BrShadeUninsured, 
            oralDeviceInsured: this.state.oralDeviceInsured,
            oralDeviceUninsured: this.state.oralDeviceUninsured,
            otherOptionInsured: this.state.otherOptionInsured,
            otherOptionUninsured: this.state.otherOptionUninsured,
            implantType: this.state.implantType,
            implantMaterial: this.state.implantMaterial,
            implantTray:this.state.implantTray,
            implantMaker: this.state.implantMaker,
            implantMakerNobelOption: this.state.implantMakerNobelOption,
            implantMakerCamlogOption:this.state.implantMakerCamlogOption,
            implantMakerAnkylosOption: this.state.implantMakerAnkylosOption,
            implantMakerAstraTechOption: this.state.implantMakerAstraTechOption,
            implantShade:this.state.implantShade,
            dentureInvolution: this.state.dentureInvolution,
            dentureInvolutionBT: this.state.dentureInvolutionBT, 
            dentureInsured: this.state.dentureInsured,
            dentureUninsured: this.state.dentureUninsured,
            dentureArtificialInsured: this.state.dentureArtificialInsured,
            dentureBarInsured: this.state.dentureBarInsured,
            dentureBarUninsured: this.state.dentureBarUninsured,
            dentureFloorInsured: this.state.dentureFloorInsured,
            dentureOtherInsured: this.state.dentureOtherInsured,
            mainComplaint: this.state.mainComplaint,
            deliveryTime: this.state.deliveryTime,
            OtherOption: this.state.OtherOption,
            drawing: this.state.drawing,
            diagram: this.state.diagram
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
                    paymentType: items["paymentType"],
                    treatmentType: items["treatmentType"],
                    inlayInvolution: items["inlayInvolution"], 
                    inlayInvolutionBT: items["inlayInvolutionBT"],
                    inlaySpecInsured: items["inlaySpecInsured"],
                    inlaySpecUninsured: items["inlaySpecUninsured"],
                    inlayMaterial:  items["inlayMaterial"],
                    inlayShade: items["inlayShade"],
                    crownInvolution: items["crownInvolution"], 
                    crownInvolutionBT: items["crownInvolutionBT"],
                    crownMaterialInsured: items["crownMaterialInsured"],
                    crownShadeInsured: items["crownShadeInsured"],
                    crownMaterialUninsured: items["crownMaterialUninsured"], 
                    crownShadeUninsured: items["crownShadeUninsured"],
                    BrInvolution: items["BrInvolution"], 
                    BrInvolutionBT: items["BrInvolutionBT"],
                    BrMaterialInsured: items["BrMaterialInsured"],
                    BrShadeInsured: items["BrShadeInsured"] ,
                    BrMaterialUninsured: items["BrMaterialUninsured"],
                    BrShadeUninsured: items["BrShadeUninsured"],
                    oralDeviceInsured: items["oralDeviceInsured"],
                    oralDeviceUninsured: items["oralDeviceUninsured"],
                    otherOptionInsured: items["otherOptionInsured"],
                    otherOptionUninsured: items["otherOptionUninsured"],
                    implantType: items["implantType"],
                    implantMaterial: items["implantMaterial"],
                    implantTray: items["implantTray"],
                    implantMaker: items["implantMaker"],
                    implantMakerNobelOption: items["implantMakerNobelOption"],
                    implantMakerCamlogOption: items["implantMakerCamlogOption"],
                    implantMakerAnkylosOption: items["implantMakerAnkylosOption"],
                    implantMakerAstraTechOption: items["implantMakerAstraTechOption"],
                    implantShade: items["implantShade"],
                    dentureInvolution: items["dentureInvolution"],
                    dentureInvolutionBT: items["dentureInvolutionBT"], 
                    dentureInsured: items["dentureInsured"],
                    dentureUninsured: items["dentureUninsured"],
                    dentureArtificialInsured: items["dentureArtificialInsured"],
                    dentureBarInsured: items["dentureBarInsured"],
                    dentureBarUninsured: items["dentureBarUninsured"],
                    dentureFloorInsured: items["dentureFloorInsured"],
                    dentureOtherInsured: items["dentureOtherInsured"],
                    mainComplaint: items["mainComplaint"],
                    deliveryTime: items["deliveryTime"],
                    OtherOption: items["OtherOption"],
                    complete: items["complete"],
                    drawing: items["drawing"],
                    diagram: items["diagram"],
                });

            })
        }
    }

    render() {
        const user = firebase.auth().currentUser
        let { page } = this.props.match.params
        const id = this.props.match.params.id
        switch( page) {
            case "doctor" :
                
                return (
                    <Form id="main_form" className="main-form" onSubmit={this.handleSubmit}>
                    <DoctorInfo 
                        user={user.displayName} 
                        nextStep={this.nextStep}  
                        address={this.state.address} 
                        zip={this.state.zip} 
                        handleChange={this.handleChange}                   
                        />
                    </Form>
                )
                case "patient" :
                    return (
                        <Form id="main_form" className="main-form" onSubmit={this.handleSubmit}>
                        <div>
                            <PatientInfo 
                                handleChange={this.handleChange} 
                                nextStep={this.nextStep}  
                                patientName={this.state.patientName} 
                                patientID={this.state.patientID} 
                                age={this.state.age} 
                                gender={this.state.gender}                                                
                            />
                            <PaymentSelect handleChange={this.handleChange} paymentType={this.state.paymentType}  id={id} />
                        </div>
                        </Form>
                    )
                    case "treatment" :
                        return (
                        <Form id="main_form" className="main-form" onSubmit={this.handleSubmit}>
                            <div> 
                                <TreatmentType  getTreatmentOptions={this.getTreatmentOptions} />
                            </div>
                        </Form>
                        )
                        case "inlay" :
                            return (
                                <Form id="main_form" className="main-form" onSubmit={this.handleSubmit}>
                                    <Inlay
                                        handleChange={this.handleChange} 
                                        inlayMaterial={this.state.inlayMaterial} 
                                        inlayShade={this.state.inlayShade} 
                                        inlaySpecInsured={this.state.inlaySpecInsured}
                                        inlaySpecUninsured={this.state.inlaySpecUninsured}
                                        paymentType={this.state.paymentType}
                                        inlayInvolution={this.state.inlayInvolution}
                                        inlayInvolutionBT={this.state.inlayInvolutionBT}
                                        id={id}                          
                                    /> 
                                </Form> 
                            )
                            case "crown" :
                                return (
                                    <Form id="main_form" className="main-form" onSubmit={this.handleSubmit}>
                                        <Crown  
                                            handleChange={this.handleChange} 
                                            crownMaterialInsured={this.state.crownMaterialInsured} 
                                            crownShadeInsured={this.state.crownShadeInsured}
                                            crownMaterialUninsured={this.state.crownMaterialUninsured}
                                            crownShadeUninsured={this.state.crownShadeUninsured}
                                            crownInvolution={this.state.crownInvolution}
                                            crownInvolutionBT={this.state.crownInvolutionBT}    
                                            paymentType={this.state.paymentType}
                                            id={id}  
                                        />
                                    </Form> 
                                )
                                case "br" :
                                    return (
                                        <Form id="main_form" className="main-form" onSubmit={this.handleSubmit}>
                                            <Br 
                                                handleChange={this.handleChange}
                                                paymentType={this.state.paymentType}
                                                BrMaterialInsured={this.state.BrMaterialInsured} 
                                                BrShadeInsured={this.state.BrShadeInsured}
                                                BrMaterialUninsured={this.state.BrMaterialUninsured}
                                                BrInvolution={this.state.BrInvolution}
                                                BrInvolutionBT={this.state.BrInvolutionBT}
                                                id={id}
                                            />
                                        </Form> 
                                    ) 
                                case "oral-device" :
                                    return (
                                        <Form id="main_form" className="main-form" onSubmit={this.handleSubmit}>
                                            <h2><strong>口腔内装置</strong></h2>
                                                <OralDevice
                                                    handleChange={this.handleChange} 
                                                    oralDeviceInsured={this.state.oralDeviceInsured}
                                                    oralDeviceUninsured={this.state.oralDeviceUninsured}
                                                    paymentType={this.state.paymentType}
                                                    id={id}  
                                                />
                                        </Form> 
                                    )  
                                case "implant" :
                                    return (
                                        <Form id="main_form" className="main-form" onSubmit={this.handleSubmit}>
                                            <h2><strong>口腔内装置</strong></h2>
                                         <Implant 
                                            handleChange={this.handleChange} 
                                            implantType={this.state.implantType}
                                            implantMaterial={this.state.implantMaterial}
                                            implantTray={this.state.implantTray}
                                            implantMaker={this.state.implantMaker}
                                            implantMakerNobelOption={this.state.implantMakerNobelOption}
                                            implantMakerCamlogOption={this.state.implantMakerCamlogOption}
                                            implantMakerAnkylosOption={this.state.implantMakerAnkylosOption}
                                            implantMakerAstraTechOption={this.state.implantMakerAstraTechOption}
                                            implantShade={this.state.implantShade}
                                            id={id}
                                            />
                                        </Form> 
                                    )
                                    case "denture":                                 
                                        return (
                                            <Form id="main_form" className="main-form" onSubmit={this.handleSubmit}>
                                               <h2><strong>義歯</strong></h2>
                                                 {/* need to connect checkbox options to teeth */}
                                                <Denture
                                                    handleChange={this.handleChange}
                                                    paymentType={this.state.paymentType}
                                                    dentureInvolution={this.state.dentureInvolution}
                                                    dentureInvolutionBT={this.state.dentureInvolutionBT} 
                                                    dentureInsured={this.state.dentureInsured}
                                                    dentureUninsured={this.state.dentureUninsured}
                                                    dentureArtificialInsured={this.state.dentureArtificialInsured}
                                                    dentureBarInsured={this.state.dentureBarInsured}
                                                    dentureBarUninsured={this.state.dentureBarUninsured}
                                                    dentureFloorInsured={this.state.dentureFloorInsured}
                                                    dentureOtherInsured={this.state.dentureOtherInsured}
                                                    id={id}
                                                />
                                            </Form> 
                                        )
                                        case "other" :
                                            return (
                                                <Form id="main_form" className="main-form" onSubmit={this.handleSubmit}>
                                                   <h2><strong>その他</strong></h2>
                                                    <OtherOption
                                                        handleChange={this.handleChange}
                                                        otherOptionInsured={this.state.otherOptionInsured}
                                                        otherOptionUninsured={this.state.otherOptionUninsured} 
                                                        paymentType={this.state.paymentType}
                                                        id={id}
                                                    />
                                                </Form> 
                                            )  
                                    case "delivery-time" :
                                        return (
                                            <Form id="main_form" className="main-form" onSubmit={this.handleSubmit}>
                                                <div>
                                                <h3 className="order-heading">主訴/時間</h3>
                                                    <MainComplaint handleChange={this.handleChange} mainComplaint={this.state.mainComplaint} />
                                                    <DeliveryTime  handleChange={this.handleChange} deliveryTime={this.state.deliveryTime} id={id}/>
                                                </div>
                                            </Form> 
                                        )
                                    case "delivery-date" :
                                    
                                        return (
                                            <Form id="main_form" className="main-form" onSubmit={this.handleSubmit}>
                                                <div>
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
                                                        id={id}
                                                    />
                                                </div>  
                                            </div>  
                                            </Form> 
                                    )
                                    case "diagram" :
                                        return (
                                        <Form id="main_form" className="main-form" onSubmit={this.handleSubmit}>
                                            <div className="canvas form-box">
                                              <MouthCanvas  drawing={this.state.drawing} id={this.id} getDrawing={this.getDrawing} />
                                              <PtnadultCanvas diagram={this.state.diagram} id={this.id} getDiagram={this.getDiagram} />
                                             </div>  
                                        </Form> 
                                    )
                                    case "confirm" :
                                        return (
                                        <Form id="main_form" className="main-form" onSubmit={this.handleSubmit}>
                                            <div className="canvas form-box">
                                                <Confirmation data={this.state} user={user.displayName} onSubmit={this.handleSubmit} update={this.handleUpdate} id={id} />
                                            </div>  
                                        </Form> 
                                    )
       
            default: return ""

        }
    }     
}


export default MainInfo;
