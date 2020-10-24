import React from 'react';
import {Button} from "reactstrap";
import takao from '../assets/takao.ttf';
import mouth from '../assets/mouth.png';
import diagram from '../assets/Ptnadult.svg.png'
import {PDFDownloadLink, Document, Page, Text, View, StyleSheet, Font, Image } from '@react-pdf/renderer';
class PDF extends React.Component{
    state = {
        ready: false,
        images: []
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

    updateImages = () => {
        let canvas = document.getElementsByTagName('canvas');
        let localImages = []

        for(let c of canvas) {
            localImages.push(c.toDataURL())
        }

        this.setState({
            images : localImages
        })
    }

    handlePdf = () => {
        this.toggle();
        this.updateImages();
    }

    
    componentDidMount() {
        Font.register({
            family: "takao",
            src: takao,
            weight: 'regular'
        });

    }

    MouthStyles = StyleSheet.create({
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
        imageSection: {
            fontFamily: "takao",
            fontWeight: 400,
            position: 'relative',
            margin: 10,
            padding: 10,
        },
        image: {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: 423,
            width: 418.5,
        },
        drawing: {
            top: 0,
            left: 0,
            right: 0,
            height: 400,
            width: 400,
        }
    });

    DiagramStyles = StyleSheet.create({
        image: {
            position: 'absolute',
            top: 0,
            left: 10,
            right: 0,
            height: 400,
            width: "80%",
        },
        diagram: {
            top: 0,
            left: 0,
            right: 0,
            height: 400,
            width: "80%",
        }
    });


    render() {

        const doc = (
            <Document>
                <Page size="A4" style={this.MouthStyles.page}>
                    <View style={this.MouthStyles.section}>
                        <Text>歯科医名 :{this.props.name}</Text>
                        <Text>住所: {this.props.address}</Text>
                        <Text>郵便番号: {this.props.zip}</Text>
                        <Text>患者名: {this.props.patientName}</Text>
                        <Text>患者ID: {this.props.patientID}</Text>
                        <Text>年齢: {this.props.age}</Text>
                        <Text>性別: {this.props.gender}</Text>
                        {
                        this.props.otherOption ? <Text>製品仕様 他: {this.props.otherOption}</Text> : null
                        }
                        <Text>治療の種類: {this.props.treatmentType}</Text>
                        <Text>支払い: {this.props.paymentType}</Text>
                        { this.props.inlayInvolution ? <Text>対合: {this.props.inlayInvolution }</Text> : null }
                        { this.props.inlayInvolutionBT ? <Text>対合 BT: {this.props.inlayInvolutionBT }</Text> : null }
                        { this.props.inlaySpecInsured ? <Text>Inlay Spec 保険 : {this.props.inlaySpecInsured }</Text> : null }
                        { this.props.inlaySpecUninsured ? <Text>Inlay Spec 自費  : {this.props.inlaySpecUninsured  }</Text> : null }
                        { this.props.inlayMaterial ? <Text>補綴物インレー: {this.props.inlayMaterial}</Text> : null }
                        { this.props.inlayShade ? <Text>シェード選択: {this.props.inlayShade}</Text> : null }
                        { this.props.crownInvolution ? <Text>対合 : {this.props.crownInvolution }</Text> : null }
                        { this.props.crownInvolutionBT ? <Text>対合 BT : {this.props.crownInvolutionBT }</Text> : null }
                        { this.props.crownMaterialInsured ? <Text>クラウン 保険: {this.props.crownMaterialInsured}</Text> : null }
                        { this.props.crownShadeInsured ? <Text>クラウン シェード選択 保険: {this.props.crownShadeInsured}</Text> : null }
                        { this.props.crownMaterialUninsured ?  <Text>クラウン 自費: {this.props.crownMaterialUninsured}</Text> : null }
                        { this.props.crownShadeUninsured ? <Text>クラウン シェード選択 自費: {this.props.crownShadeUninsured}</Text> : null }
                        { this.props.BrInvolution ? <Text>対合: {this.props.BrInvolution }</Text> : null }
                        { this.props.BrInvolutionBT ? <Text>対合 BT: {this.props.BrInvolutionBT }</Text> : null }
                        { this.props.BrMaterialInsured ? <Text>Br 保険: {this.props.BrMaterialInsured}</Text> : null }
                        { this.props.BrShadeInsured ? <Text>Br シェード選択 保険: {this.props.BrShadeInsured}</Text> : null }
                        { this.props.BrMaterialUninsured ? <Text>Br 自費: {this.props.BrMaterialUninsured}</Text> : null }
                        { this.props.BrShadeUninsured ? <Text>Br シェード選択 自費: {this.props.BrShadeUninsured}</Text> : null }
                        { this.props.otherOptionInsured ? <Text>その他 保険: {this.props.otherOptionInsured}</Text> : null }
                        { this.props.otherOptionUninsured ? <Text>その他 自費: {this.props.otherOptionUninsured}</Text> : null }
                        { this.props.bridgeType ? <Text>ブリッジインレータイプ: {this.props.bridgeType}</Text> : null }
                        { this.props.oralDeviceInsured ? <Text>口腔内装置 保険: {this.props.oralDeviceInsured}</Text> : null }
                        { this.props.oralDeviceUninsured ? <Text>口腔内装置 自費: {this.props.oralDeviceUninsured}</Text> : null }
                        { this.props.implantType ? <Text>インプラント: {this.props.implantType}</Text> : null }
                        { this.props.implantMaterial ? <Text>インプラントタイプ: {this.props.implantMaterial}</Text> : null }
                        { this.props.implantTray ? <Text>各個トレー: {this.props.implantTray}</Text> : null }
                        { this.props.implantMaker ? <Text>インプラント メーカー: {this.props.implantMaker}</Text> : null }
                        { this.props.implantMakerNobelOption ? <Text>ノーベル Option: {this.props.implantMakerNobelOption}</Text> : null }
                        { this.props.implantMakerCamlogOption ? <Text>カムログ Option: {this.props.implantMakerCamlogOption}</Text> : null }
                        { this.props.implantMakerAnkylosOption ? <Text>アンキロス Option: {this.props.implantMakerAnkylosOption}</Text> : null }
                        { this.props.implantMakerAstraTechOption ? <Text>アストラテック Option: {this.props.implantMakerAstraTechOption}</Text> : null }
                        { this.props.implantShade? <Text>インプラント シェード選択:  {this.props.implantShade}</Text> : null }
                        { this.props.dentureInvolution  ? <Text>対合: {this.props.dentureInvolution}</Text> : null}
                        { this.props.dentureInvolutionBT? <Text>対合 BT: {this.props.dentureInvolutionBT}</Text> : null }
                        { this.props.dentureInsured ? <Text>義歯 保険: {this.props.dentureInsured}</Text> : null}
                        { this.props.dentureUninsured ? <Text>義歯 自費: {this.props.dentureUninsured}</Text> : null }
                        { this.props.dentureArtificialInsured ? <Text>人工歯 保険: {this.props.dentureArtificialInsured}</Text> : null }
                        { this.props.dentureBarInsured ? <Text>バー 保険: {this.props.dentureBarInsured}</Text> : null }
                        { this.props.BarUninsured ? <Text>バー 自費: {this.props.BarUninsured}</Text> : null }
                        { this.props.dentureFloorInsured ? <Text>床 保険: {this.props.dentureFloorInsured}</Text> : null }
                        { this.props.dentureOtherInsured ? <Text>その他 保険: {this.props.dentureOtherInsured}</Text> : null }
                        <Text>主訴: {this.props.mainComplaint}</Text>
                        <Text>発注日: {this.props.date}</Text>
                        <Text>配送日: {this.props.deliveryDate}</Text>
                        <Text>時間: {this.props.deliveryTime}</Text>
                      
                    </View>
                    <View style={this.MouthStyles.imageSection}>
                        <Image style={this.MouthStyles.image} src={mouth} alt="teeth diagram"  />
                        <Image style={this.MouthStyles.drawing} src={this.state.images[1]} alt="teeth diagram"  />
                    </View>
                    <View style={this.MouthStyles.imageSection}>
                    <Image style={this.DiagramStyles.image} src={diagram} alt="ptnadult diagram"  />
                        <Image style={this.DiagramStyles.diagram} src={this.state.images[5]} alt="ptnadult diagram"  />
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
                    <Button onClick={() => this.handlePdf()}>
                        Create pdf
                    </Button>
                )}
            </>
        )
    }
}


export default PDF;
