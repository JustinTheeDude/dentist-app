import React from 'react';
import {Button} from "reactstrap";
import takao from '../assets/takao.ttf';
import mouth from '../assets/mouth.png';
import diagram from '../assets/420px-Ptnadult.svg.png'
import {PDFDownloadLink, Document, Page, Text, View, StyleSheet, Font, Image } from '@react-pdf/renderer';
class PDF extends React.Component{
    state = {
        ready: false
    }

    toggle = () => {
        this.setState((prevState) => ({
            ready: false
        }), () => {     // THIS IS THE HACK 
            setTimeout(() => {
                this.setState({ ready: true });
            }, 1);
        });
    }

    
    componentDidMount() {
        Font.register({
            family: "takao",
            src: takao,
            weight: 'regular'
        });

    }

    styles = StyleSheet.create({
        page: {
            flexDirection: 'Column',
            backgroundColor: '#E4E4E4'
        },
        section: {
            fontFamily: "takao",
            fontWeight: 400,
            margin: 10,
            padding: 10
        },
    });



    render() {

        const doc = (
            <Document>
                <Page size="A4" style={this.styles.page}>
                    <View style={this.styles.section}>
                        <Text>歯科医名 :{this.props.name}</Text>
                        <Text>住所: {this.props.address}</Text>
                        <Text>郵便番号: {this.props.zip}</Text>
                        <Text>患者名: {this.props.patientName}</Text>
                        <Text>患者ID: {this.props.patientID}</Text>
                        <Text>年齢: {this.props.age}</Text>
                        <Text>性別: {this.props.gender}</Text>
                        <Text>製品仕様: {this.props.specs}</Text>
                        {
                        this.props.otherOption ? <Text>製品仕様 他: {this.props.otherOption}</Text> : null
                        }
                        <Text>支払い: {this.props.paymentType}</Text>
                        <Text>インレーとアンレー: {this.props.inlayOnlay}</Text>
                        <Text>補綴物インレー: {this.props.inlayMaterial}</Text>
                        <Text>シェード選択: {this.props.inlayShade}</Text>
                        <Text>補綴物アバットメン: {this.props.abutmentType}</Text>
                        <Text>システムTouareg: {this.props.touaregSystem}</Text>
                        <Text>接続選択: {this.props.connectionSelect}</Text>
                        <Text>シェード選択: {this.props.abutmentShade}</Text>
                        <Text>挿入グループ: {this.props.insertionGroup}</Text>
                        <Text>テレスコープ: {this.props.telescope}</Text>
                        <Text>テレスコープ材料: {this.props.telescopeMaterial}</Text>
                        <Text>テレスコープシェード: {this.props.telescopeShade}</Text>
                        <Text>ブリッジインレータイプ: {this.props.bridgeType}</Text>
                        <Text>局所義歯フレーム: {this.props.localDentureFrame}</Text>
                        <Text>局所義歯フレーム 材料 CoCr - veneered: {this.props.localDentureFrameMaterials}</Text>
                        <Text>スプリント: {this.props.splint}</Text>
                        <Text>材料スプリント: {this.props.splintMaterials}</Text>
                        <Text>スプリント シェード: {this.props.splintShade}</Text>
                        {this.props.implantTreatment ? <Text>インプラント治療計画: あり</Text> : null}
                        {this.props.surgicalGuide ? <Text>サージカルガイド: あり</Text> : null}
                        {this.props.noTreatmentPlan ? <Text>インプラント治療計画なし</Text> : null}
                        {this.props.treatmentPlanMaterials? <Text>インプラント治療計画材料: {this.props.treatmentPlanMaterials}</Text> : null}
                        <Text>主訴: {this.props.mainComplaint}</Text>
                        <Text>時間: {this.props.deliveryTime}</Text>
                        <Text>発注日: {this.props.date}</Text>
                        <Text>配送日: {this.props.deliveryDate}</Text>
                      
                    </View>
                    <View style={this.styles.section}>
                        <Image src={mouth} alt="teeth diagram" />
                        <Image src={diagram} alt="ptnadult diagram"  /> 
                    </View>
                </Page>
            </Document>
        );

        return (
            <>
            {this.state.ready && (
                <PDFDownloadLink document={doc} fileName={this.props.filename.split(' ').join('').toLowerCase()}>
                {({ blob, url, loading, error }) => (loading ? 'Loading document...' :
                <Button onClick={() => (this.setState({ ready: false }))}>
                    download pdf
                </Button>
                )}
                </PDFDownloadLink>
            )}

                {!this.state.ready && (
                    <Button onClick={() => this.toggle()}>
                        Create pdf
                    </Button>
                )}
            </>
        )
    }
}


export default PDF;
