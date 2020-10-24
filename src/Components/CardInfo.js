import React, { Component } from "react";
import firebase from "firebase";
import {MyContext} from "./Context/AppProvider";
import CanvasDraw from "react-canvas-draw";

import mouth from '../assets/mouth.png';
import PDF from "../Components/InfoPDF";
import diagram from '../assets/Ptnadult.svg.png';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

class CardInfo extends Component {
    state = {
        date: "",
        deliveryDate: "",
        doctorName: "",
        address: "",
        zip: "",
        patientName: "",
        patientID: "", 
        age: "",
        gender: "",
        treatmentType:"",
        paymentType: "",
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
        implantAnkylosCamlogOption: "",
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
        otherOption:"",
        complete: false,
        drawing: "",
        diagram: "",
        brushRadius: 0.1,
        lazyRadius: 0.1,
        height: 200,
        width: 400,
        immediateLoading: true,
    };

    completeOrder = (id) => {
        const itemsRef = firebase.database().ref("Form").child(id);
        itemsRef.once("value", (snapshot) => {
            console.log(snapshot.child("complete").val());
            if(snapshot.child("complete").val()) {
                itemsRef.update({complete: false});
                this.setState({complete: false});
            } else {
                itemsRef.update({complete: true});
                this.setState({complete: true});
            }
        });
    }


    componentDidMount() {
        if(this.props.value !== "") {            
                    var self = this;
                    const user = firebase.auth().currentUser;
                    var ref = firebase
                    .database()
                    .ref(`Dentist/${user.uid}/Form`)
                    .child(this.props.value);
                    ref.orderByKey().on("value", function(snapshot) {
                    let items = snapshot.val();
                        self.setState({
                            doctorName: items["doctorName"],
                            address: items["address"],
                            zip: items["zip"],
                            patientName: items["patientName"],
                            patientID: items["patientID"],
                            date: items["date"],
                            deliveryDate: items["deliveryDate"],
                            age: items["age"],
                            gender: items["gender"],
                            treatmentType: items["treatmentType"],
                            paymentType: items["paymentType"],
                            inlayInvolution: items["inlayInvolution"], 
                            inlayInvolutionBT: items["inlayInvolutionBT"],
                            inlaySpecInsured: items["inlaySpecInsured"],
                            inlaySpecUninsured: items["inlaySpecUninsured"],
                            inlayMaterial: items["inlayMaterial"],
                            inlayShade: items["inlayShade"],
                            crownInvolution: items["crownInvolution"], 
                            crownInvolutionBT: items["crownInvolutionBT"],
                            crownMaterialInsured:items["crownMaterialInsured"],
                            crownShadeInsured: items["crownShadeInsured"],
                            crownMaterialUninsured: items["crownMaterialUninsured"], 
                            crownShadeUninsured: items["crownShadeUninsured"],
                            BrInvolution: items["BrInvolution"], 
                            BrInvolutionBT: items["BrInvolutionBT"],
                            BrMaterialInsured: items["BrMaterialInsured"],
                            BrShadeInsured: items["BrShadeInsured"] ,
                            BrMaterialUninsured: items["BrMaterialUninsured"],
                            BrShadeUninsured: items["BrShadeUninsured"],
                            otherOptionInsured: items["otherOptionInsured"],
                            otherOptionUninsured: items["otherOptionUninsured"],
                            oralDeviceInsured: items["oralDeviceInsured"],
                            oralDeviceUninsured: items["oralDeviceUninsured"],
                            implantType: items["implantType"],
                            implantMaterial: items["implantMaterial"],
                            implantTray: items["implantTray"],
                            implantMaker: items["implantMaker"],
                            implantMakerNobelOption: items["implantMakerNobelOption"],
                            implantMakerCamlogOption: items["implantMakerCamlogOption"],
                            implantAnkylosCamlogOption: items["implantAnkylosCamlogOption"],
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
                            otherOption: items["otherOption"],
                            complete: items["complete"],
                            drawing: items["drawing"],
                            diagram: items["diagram"]
                        });
                });
                ref.off() 
        }
}

    isComplete = "";

    completeOrder = (id) => {
        const itemsRef = firebase.database().ref("Form").child(id);
        itemsRef.once("value", (snapshot) => {
            snapshot.forEach((child) => {
                if(child.key === "complete") {
                    if(child.node_.value_ === true) {
                        itemsRef.update({"complete": false})
                        this.isComplete = "Not Complete";
                    } else {
                        itemsRef.update({"complete": true})
                        this.isComplete = "Complete";
                    }
                }
            });
        });
    }


    render() {
        
        return (
            <MyContext.Consumer>
                {context => (
                    <div className="order-container">
                        <div className="order-info">
                            <h1>歯科医名: {this.state.doctorName}</h1>
                            <h1>住所: {this.state.address}</h1>
                            <h1>郵便番号: {this.state.zip}</h1>
                            <h1>患者名: {this.state.patientName}</h1>
                            <h1>患者ID: {this.state.patientID}</h1>
                            <h1>年齢: {this.state.age}</h1>
                            <h1>性別: {this.state.gender}</h1>
                            {this.state.otherOption && <h1>製品仕様 他: {this.state.otherOption}</h1>}
                            <h1>治療の種類: {this.state.treatmentType}</h1>
                            <h1>支払い: {this.state.paymentType}</h1>
                            {this.state.inlayInvolution && <h1>対合 : {this.state.inlayInvolution}</h1>}
                            {this.state.inlayInvolutionBT && <h1>対合 BT: {this.state.inlayInvolutionBT}</h1>}
                            {this.state.inlaySpecInsured && <h1>Inlay Spec 保険 : {this.state.inlaySpecInsured}</h1>}
                            {this.state.inlaySpecUninsured && <h1>Inlay Spec 自費 : {this.state.inlaySpecUninsured}</h1>}
                            {this.state.inlayMaterial && <h1>補綴物インレー: {this.state.inlayMaterial}</h1>}
                            {this.state.inlayShade && <h1>インレーシェード: {this.state.inlayShade}</h1>}
                            {this.state.crownInvolution && <h1>対合: {this.state.crownInvolution}</h1>}
                            {this.state.crownInvolutionBT && <h1>対合 BT: {this.state.crownInvolutionBT}</h1>}
                            {this.state.crownMaterialInsured && <h1>クラウン 保険: {this.state.crownMaterialInsured}</h1>}
                            {this.state.crownShadeInsured && <h1>クラウン シェード選択 保険: {this.state.crownShadeInsured}</h1>}
                            {this.state.crownMaterialUninsured && <h1>クラウン 自費: {this.state.crownMaterialUninsured}</h1>}
                            {this.state.crownShadeUninsured && <h1>クラウン シェード選択 自費: {this.state.crownShadeUninsured}</h1>}
                            {this.state.BrInvolution && <h1>対合: {this.state.BrInvolution}</h1>}
                            {this.state.BrInvolutionBT && <h1>対合 BT: {this.state.BrInvolutionBT}</h1>}
                            {this.state.BrMaterialInsured && <h1>Br 保険: {this.state.BrMaterialInsured}</h1>}
                            {this.state.BrShadeInsured && <h1>Br シェード選択 保険: {this.state.BrShadeInsured}</h1>}
                            {this.state.BrMaterialUninsured && <h1>Br 自費: {this.state.BrMaterialUninsured}</h1>}
                            {this.state.BrShadeUninsured && <h1>Br シェード選択 自費: {this.state.BrShadeUninsured}</h1>}
                            {this.state.otherOptionInsured && <h1>その他 保険: {this.state.otherOptionInsured}</h1>}
                            {this.state.otherOptionUninsured && <h1>その他 自費: {this.state.otherOptionUninsured}</h1>}
                            {this.state.oralDeviceInsured && <h1>口腔内装置 保険: {this.state.oralDeviceInsured}</h1>}
                            {this.state.oralDeviceUninsured && <h1>口腔内装置 自費: {this.state.oralDeviceUninsured}</h1>}
                            {this.state.implantType && <h1>インプラント: {this.state.implantType}</h1>}
                            {this.state.implantMaterial && <h1>インプラントタイプ: {this.state.implantMaterial}</h1>}
                            {this.state.implantTray && <h1>各個トレー: {this.state.implantTray}</h1>}
                            {this.state.implantMaker && <h1>インプラント メーカー: {this.state.implantMaker}</h1>}
                            {this.state.implantMakerNobelOption && <h1>ノーベル Option: {this.state.implantMakerNobelOption}</h1>}
                            {this.state.implantMakerCamlogOption && <h1>カムログ Option: {this.state.implantMakerCamlogOption}</h1>}
                            {this.state.implantMakerAnkylosOption && <h1>アンキロス Option: {this.state.implantMakerAnkylosOption}</h1>}
                            {this.state.implantMakerAstraTechOption && <h1>アストラテック Option: {this.state.implantMakerAstraTechOption}</h1>}
                            {this.state.implantShade && <h1>インプラント シェード選択: {this.state.implantShade}</h1>}
                            {this.state.dentureInvolution && <h1>対合: {this.state.dentureInvolution}</h1>}
                            {this.state.dentureInvolutionBT && <h1>対合 BT: {this.state.dentureInvolutionBT}</h1>}
                            {this.state.dentureInsured && <h1>義歯 保険: {this.state.dentureInsured}</h1>}
                            {this.state.dentureUninsured && <h1>義歯 自費: {this.state.dentureUninsured}</h1>}
                            {this.state.dentureArtificialInsured && <h1>人工歯 保険: {this.state.dentureArtificialInsured}</h1>}
                            {this.state.dentureBarInsured && <h1>バー 保険: {this.state.dentureBarInsured}</h1>}
                            {this.state.dentureFloorInsured && <h1>床 保険: {this.state.dentureFloorInsured}</h1>}
                            {this.state.dentureBarUninsured && <h1>バー 自費: {this.state.dentureBarUninsured}</h1>}
                            {this.state.dentureOtherInsured && <h1>その他 保険: {this.state.dentureOtherInsured}</h1>}
                            <h1>主訴: {this.state.mainComplaint }</h1>
                            <h1>発注日: {this.state.date}</h1>
                            <h1>配送日: {this.state.deliveryDate}</h1>
                            <h1>時間: {this.state.deliveryTime}</h1>
                        </div>
                        <div className="teeth">
                            <CanvasDraw 
                                imgSrc={mouth} alt="mouth diagram" 
                                saveData={this.state.drawing}  
                                brushColor={this.state.color}
                                brushRadius={this.state.brushRadius}
                                lazyRadius={this.state.lazyRadius}
                                immediateLoading={this.state.immediateLoading}
                            />
                              <CanvasDraw 
                                imgSrc={diagram} alt="Ptnadult diagram" 
                                saveData={this.state.diagram}  
                                brushColor={this.state.color}
                                brushRadius={this.state.brushRadius}
                                lazyRadius={this.state.lazyRadius}
                                canvasHeight={this.state.height}
                                canvasWidth={this.state.width}
                                immediateLoading={this.state.immediateLoading}
                            />
                        </div>
                        <Button><Link className="btn btn-secondary"to={`/form/${this.props.value}/update`}>Edit</Link></Button>
                        <PDF name={this.state.doctorName}
                            address={this.state.address}
                            zip={this.state.zip}
                            patientName={this.state.patientName}
                            patientID={this.state.patientID}
                            age={this.state.age}
                            gender={this.state.gender}
                            paymentType={this.state.paymentType}
                            treatmentType={this.state.treatmentType}
                            date={this.state.date}
                            deliveryDate={this.state.deliveryDate}
                            deliveryTime={this.state.deliveryTime}
                            otherOption={this.state.otherOption}
                            filename={this.state.patientName}
                            inlayInvolution={this.state.inlayInvolution}
                            inlayInvolutionBT={this.state.inlayInvolutionBT}
                            inlaySpecInsured={this.state.inlaySpecInsured}
                            inlaySpecUninsured={this.state.inlaySpecUninsured}
                            inlayMaterial= {this.state.inlayMaterial}
                            inlayShade={this.state.inlayShade}
                            crownInvolution={this.state.crownInvolution}
                            crownInvolutionBT={this.state.crownInvolutionBT}
                            crownShadeInsured={this.state.crownShadeInsured}
                            crownMaterialInsured={this.state.crownMaterialInsured}
                            crownMaterialUninsured={this.state.crownMaterialUninsured}
                            crownShadeUninsured={this.state.crownShadeUninsured}
                            BrInvolution={this.state.BrInvolution}
                            BrInvolutionBT={this.state.BrInvolutionBT}
                            BrMaterialInsured={this.state.BrMaterialInsured}
                            BrShadeInsured={this.state.BrShadeInsured }
                            BrMaterialUninsured={this.state.BrMaterialUninsured}
                            BrShadeUninsured={this.state.BrShadeUninsured}
                            oralDeviceInsured={this.state.oralDeviceInsured}
                            oralDeviceUninsured={this.state.oralDeviceUninsured}
                            dentureInsuredType={this.state.dentureInsuredType}
                            otherOptionInsured={this.state.otherOptionInsured}
                            otherOptionUninsured={this.state.otherOptionUninsured}
                            implantType={this.state.implantType}
                            implantMaterial={this.state.implantMateria}
                            implantTray={this.state.implantTray}
                            implantMaker={this.state.implantMaker}
                            implantMakerNobelOption={this.state.implantMakerNobelOption}
                            implantMakerCamlogOption={this.state.implantMakerCamlogOption}
                            implantMakerAnkylosOption={this.state.implantMakerAnkylosOption}
                            implantMakerAstraTechOption={this.state.implantMakerAstraTechOption}
                            implantShade={this.state.implantShade}
                            dentureInvolution={this.state.dentureInvolution}
                            dentureInvolutionBT={this.state.dentureInvolutionBT}
                            dentureInsured={this.state.dentureInsured}
                            dentureUninsured={this.state.dentureUninsured}
                            dentureArtificialInsured={this.state.dentureArtificialInsured}
                            dentureBarInsured={this.state.dentureBarInsured}
                            dentureBarUninsured={this.state.dentureBarUninsured}
                            dentureFloorInsured={this.state.dentureFloorInsured}
                            dentureOtherInsured={this.state.dentureOtherInsured}
                            mainComplaint={this.state.mainComplaint}
                            drawing={this.state.drawing}
                            diagram={this.state.diagram}
                        />
                    </div>
                )}
            </MyContext.Consumer>
        );
    }
}

export default CardInfo;
