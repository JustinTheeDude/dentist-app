import React from 'react';
import {Button} from "reactstrap";
import takao from '../assets/takao.ttf';
import mouth from '../assets/mouth.png';
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
        let filename = this.props.filename;
        console.log(filename)
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
                        <Text>患者名: {this.props.contactName}</Text>
                        <Text>年齢: {this.props.age}</Text>
                        <Text>性別: {this.props.gender}</Text>
                        <Text>支払い: {this.props.paymentType}</Text>
                        <Text>主訴: {this.props.mainComplaint}</Text>
                        <Text>日付: {this.props.day}</Text>
                        <Text>月: {this.props.month}</Text>
                        <Text>年: {this.props.year}</Text>
                    </View>
                    <View style={this.styles.section}>
                        <Image src={mouth} />
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
