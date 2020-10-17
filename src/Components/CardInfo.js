import React, { Component } from "react";
import firebase from "firebase";
import {MyContext} from "./Context/AppProvider";
import CanvasDraw from "react-canvas-draw";

import mouth from '../assets/mouth.png';
import PDF from "../Components/InfoPDF";
import chart from '../assets/420px-Ptnadult.svg.png';
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
        specs: "",
        paymentType: "",
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
        otherOption:"",
        complete: false,
        drawing: "",
        brushRadius: 0.1,
        lazyRadius: 0.1,
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
                            treatmentPlanMaterials: items["treatmentPlanMaterials"],
                            mainComplaint: items["mainComplaint"],
                            deliveryTime: items["deliveryTime"],
                            otherOption: items["otherOption"],
                            complete: items["complete"],
                            drawing: items["drawing"],
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
                            {!this.state.otherOption && <h1>製品仕様: {this.state.specs}</h1>}
                            {this.state.otherOption && <h1>製品仕様 他: {this.state.otherOption}</h1>}
                            <h1>支払い: {this.state.paymentType}</h1>
                            {this.state.inlayOnlay && <h1>インレーとアンレー: {this.state.inlayOnlay}</h1>}
                            {this.state.inlayMaterial && <h1>補綴物インレー: {this.state.inlayMaterial}</h1>}
                            {this.state.inlayShade && <h1>インレーシェード: {this.state.inlayShade}</h1>}
                            {this.state.abutmentShade && <h1>補綴物アバットメント: {this.state.abutmentType}</h1>}
                            {this.state.touaregSystem !== "なし" && <h1>システムTouareg: {this.state.touaregSystem}</h1>}
                            {this.state.connectionSelect !== "なし" && <h1>接続選択: {this.state.connectionSelect}</h1>}
                            {this.state.abutmentShade && <h1>シェード選択: {this.state.abutmentShade}</h1>}
                            {this.state.insertionGroup && <h1>挿入グループ: {this.state.insertionGroup}</h1>}
                            {this.state.telescope && <h1>テレスコープ: {this.state.telescope}</h1>}
                            {this.state.telescopeMaterial && <h1>テレスコープ材料: {this.state.telescopeMaterial}</h1>}
                            {this.state.telescopeShade && <h1>テレスコープシェード: {this.state.telescopeShade}</h1>}
                            {this.state.bridgeType && <h1>ブリッジインレータイプ: {this.state.bridgeType}</h1>}
                            {this.state.localDentureFrame && <h1>局所義歯フレーム: {this.state.localDentureFrame}</h1>}
                            {this.state.localDentureFrameMaterials && <h1>局所義歯フレーム 材料: {this.state.localDentureFrameMaterials}</h1>}
                            {this.state.splint && <h1>スプリント: {this.state.splint}</h1>}
                            {this.state.splintMaterials && <h1>材料スプリント: {this.state.splintMaterials}</h1>}
                            {this.state.splintShade && <h1>スプリント シェード: {this.state.splintShade}</h1>}
                            {this.state.implantTreatment && <h1>インプラント治療計画: あり</h1>}
                            {this.state.surgicalGuide && <h1>サージカルガイド: あり</h1>}
                            {this.state.noTreatmentPlan && <h1>インプラント治療計画なし</h1>}
                            {this.state.treatmentPlanMaterials && <h1>インプラント治療計画材料: {this.state.treatmentPlanMaterials}</h1>}
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
                            />
                            <img src={chart} alt="zsigmondy diagram" />
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
                            mainComplaint={this.state.mainComplaint}
                            date={this.state.date}
                            deliveryDate={this.state.deliveryDate}
                            deliveryTime={this.state.deliveryTime}
                            specs={this.state.specs}
                            otherOption={this.state.otherOption}
                            filename={this.state.patientName}
                            inlayOnlay= {this.state.inlayOnlay}
                            inlayMaterial= {this.state.inlayMaterial}
                            inlayShade={this.state.inlayShade}
                            abutmentType={this.state.abutmentType}
                            touaregSystem={this.state.touaregSystem}
                            connectionSelect={this.state.connectionSelect}
                            abutmentShade={this.state.abutmentShade}
                            insertionGroup={this.state.insertionGroup}
                            telescope={this.state.telescope}
                            telescopeMaterial={this.state.telescopeMaterial}
                            telescopeShade={this.state.telescopeShade}
                            bridgeType={this.state.bridgeType}
                            localDentureFrame={this.state.localDentureFrame}
                            localDentureFrameMaterials={this.state.localDentureFrameMaterials}
                            splint={this.state.splint}
                            splintMaterials={this.state.splintMaterials}
                            splintShade={this.state.splintShade}
                            implantTreatment={this.state.implantTreatment}
                            surgicalGuide={this.state.surgicalGuide}
                            noTreatmentPlan={this.state.noTreatmentPlan}
                            treatmentPlanMaterials={this.state.treatmentPlanMaterials}
                            drawing={this.state.drawing}
                        />
                    </div>
                )}
            </MyContext.Consumer>
        );
    }
}

export default CardInfo;
