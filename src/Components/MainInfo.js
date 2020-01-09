import React from "react";
import {Col, Form, FormGroup, Label, Input,Button} from "reactstrap";

const MainInfo = () => {
    return (
        <Form id="main_form" className="main-form">
            <FormGroup row>
                <Label >医院名住所</Label>
                <Col sm={10}>
                    <Input type="text" name="text" placeholder="〒 123-4567" />
                    <Input type="text" name="text" placeholder="住所" />
                </Col>
            </FormGroup>
            <FormGroup row >
                <Label >担当名</Label>
                <Col sm={10}>
                    <Input type="text" name="text" placeholder="名前" />
                </Col>
            </FormGroup>
            <FormGroup row >
                <Label>発注日</Label>   
                <Col sm={10}>
                <div>
                        年:
                        <Input type="text" name="text" placeholder="年" />
                        月:
                        <Input type="text" name="text" placeholder="月" />
                        日:
                        <Input type="text" name="text" placeholder="日" />
                </div>
                </Col>
            </FormGroup>
            <FormGroup row >
                <Label>年令</Label>
                <Col sm={10}>
                    <div>
                        <Input type="text" name="text" placeholder="番号" /> 才
                    </div>
                </Col>
            </FormGroup>
            <FormGroup check >
                <div>性別</div>
                <Label check>
                    <Input type="radio" name="radio1" /> 男
                </Label>
            </FormGroup>
            <FormGroup check >
                <Label check>
                    <Input type="radio" name="radio1" /> 女
                </Label>
            </FormGroup>
            <FormGroup check>
                <div>製品仕様</div>
                <Label check >
                    <Input type="radio" name="radio1" /> レジン床
                </Label>
            </FormGroup>
            <FormGroup check>
                <Label check >
                    <Input type="radio" name="radio1"  /> 金属床(Co-Cr. Ti. Gold)
                </Label>
            </FormGroup>
            <FormGroup check>
                <Label check >
                    <Input type="radio" name="radio1" />治療用義歯
                </Label>
            </FormGroup>
            <FormGroup row >
                <Col sm={10}>
                    <Input type="text" name="text" placeholder="他"  />
                </Col>
            </FormGroup>
            <FormGroup row >
                <Label>患者名</Label>
                <Col sm={10}>
                    <Input type="text" name="text" placeholder="名前" />
                </Col>
            </FormGroup>
            <FormGroup row >
                <Label>納期日</Label>
                <Col sm={10}>
                    <div>
                        月:
                        <Input  type="text" name="text" placeholder="月" />
                        日:
                        <Input type="text" name="text" placeholder="日" />
                    </div>
                    <div>
                        時:
                        <Input type="text" name="text" placeholder="時" />
                        分:
                        <Input type="text" name="text" placeholder="分" />
                    </div>
                </Col>
            </FormGroup>
            <FormGroup check >
                <Label check>
                    <Input type="radio" name="radio1" /> 保険
                </Label>
            </FormGroup>
            <FormGroup check >
                <Label check>
                    <Input type="radio" name="radio1" /> 自費
                </Label>
            </FormGroup>
            <FormGroup row>
                <Label>主訴</Label>
                <Col sm={10}>
                    <Input type="textarea" name="text" placeholder="主訴" />
                </Col>
            </FormGroup> 
             <Button>Submit</Button>
        </Form>
    );
};

export default MainInfo;
