import React, { useState } from 'react'
import { Button } from "reactstrap";
import { useHistory} from 'react-router-dom'
import CanvasDraw from "react-canvas-draw";
import mouth from '../assets/mouth.png';
import diagram from '../assets/Ptnadult.svg.png'
function Confirmation({data, user}) {
  const [brushRadius] = useState(0.1)
  const [lazyRadius] = useState(0.1)
  const [height] = useState(200)
  const [width] = useState(400)
  const [immediateLoading] = useState(true)
  const history = useHistory()
  const date = data.date.toString().slice(0,15)
  const deliveryDate = data.deliveryDate.toString().slice(0,15)
  const deliveryTime = data.deliveryTime
  return (
    <div>
        <div className="order-container">
                        <div className="order-info">
                            <h1><strong>Doctor</strong></h1>
                            <h1>歯科医名: {user}</h1>
                            <h1>住所: {data.address}</h1>
                            <h1>郵便番号: {data.zip}</h1>
                            <h1><strong>Patient</strong></h1>
                            <h1>患者名: {data.patientName}</h1>
                            <h1>患者ID: {data.patientID}</h1>
                            <h1>年齢: {data.age}</h1>
                            <h1>性別: {data.gender}</h1>
                            <h1>支払い: {data.paymentType}</h1>
                            <Button onClick={() => history.push("/form/patient")}>Edit</Button>
                            {data.otherOption && <h1>製品仕様 他: {data.otherOption}</h1>}
                            {data.inlaySpecInsured || data.inlaySpecUninsured ? <h1><strong>Inlay</strong></h1> : null}          
                            {data.inlayInvolution && <h1>対合 : {data.inlayInvolution}</h1>}
                            {data.inlayInvolutionBT && <h1>対合 BT: {data.inlayInvolutionBT}</h1>}
                            {data.inlaySpecInsured && <h1>Inlay Spec 保険 : {data.inlaySpecInsured}</h1>}
                            {data.inlaySpecUninsured && <h1>Inlay Spec 自費 : {data.inlaySpecUninsured}</h1>}
                            {data.inlayMaterial && <h1>補綴物インレー: {data.inlayMaterial}</h1>}
                            {data.inlayShade && <h1>インレーシェード: {data.inlayShade}</h1>}
                            {data.crownInvolution && <h1>対合: {data.crownInvolution}</h1>}
                            {data.inlaySpecInsured || data.inlaySpecUninsured  ? <Button onClick={() => history.push("/form/inlay")}>Edit</Button> : null}
                            {data.crownMaterialInsured || data.crownMaterialUninsured ? <h1><strong>Crown</strong></h1> : null}  
                            {data.crownInvolutionBT && <h1>対合 BT: {data.crownInvolutionBT}</h1>}
                            {data.crownMaterialInsured && <h1>クラウン 保険: {data.crownMaterialInsured}</h1>}
                            {data.crownShadeInsured && <h1>クラウン シェード選択 保険: {data.crownShadeInsured}</h1>}
                            {data.crownMaterialUninsured && <h1>クラウン 自費: {data.crownMaterialUninsured}</h1>}
                            {data.crownShadeUninsured && <h1>クラウン シェード選択 自費: {data.crownShadeUninsured}</h1>}
                            {data.crownMaterialInsured || data.crownMaterialUninsured  ? <Button onClick={() => history.push("/form/crown")}>Edit</Button> : null}
                            {data.BrMaterialInsured || data.BrMaterialUninsured ? <h1><strong>Br</strong></h1> : null}       
                            {data.BrInvolution && <h1>対合: {data.BrInvolution}</h1>}
                            {data.BrInvolutionBT && <h1>対合 BT: {data.BrInvolutionBT}</h1>}
                            {data.BrMaterialInsured && <h1>Br 保険: {data.BrMaterialInsured}</h1>}
                            {data.BrShadeInsured && <h1>Br シェード選択 保険: {data.BrShadeInsured}</h1>}
                            {data.BrMaterialUninsured && <h1>Br 自費: {data.BrMaterialUninsured}</h1>}
                            {data.BrShadeUninsured && <h1>Br シェード選択 自費: {data.BrShadeUninsured}</h1>}
                            {data.otherOptionInsured || data.otherOptionUninsured ? <h1><strong>Other</strong></h1> : null}
                            {data.otherOptionInsured && <h1>その他 保険: {data.otherOptionInsured}</h1>}
                            {data.otherOptionUninsured && <h1>その他 自費: {data.otherOptionUninsured}</h1>}
                            {data.oralDeviceInsured && <h1>口腔内装置 保険: {data.oralDeviceInsured}</h1>}
                            {data.oralDeviceUninsured && <h1>口腔内装置 自費: {data.oralDeviceUninsured}</h1>}
                            {data.BrMaterialInsured || data.BrMaterialUninsured  ? <Button onClick={() => history.push("/form/br")}>Edit</Button> : null}
                            {data.implantType  && <h1><strong>Implant</strong></h1> }
                            {data.implantType && <h1>インプラント: {data.implantType}</h1>} 
                            {data.implantMaterial && <h1>インプラントタイプ: {data.implantMaterial}</h1>}
                            {data.implantType && <h1>各個トレー: {data.implantTray}</h1>}
                            {data.implantMaker && <h1>インプラント メーカー: {data.implantMaker}</h1>}
                            {data.implantMakerNobelOption && <h1>ノーベル Option: {data.implantMakerNobelOption}</h1>}
                            {data.implantMakerCamlogOption && <h1>カムログ Option: {data.implantMakerCamlogOption}</h1>}
                            {data.implantMakerAnkylosOption && <h1>アンキロス Option: {data.implantMakerAnkylosOption}</h1>}
                            {data.implantMakerAstraTechOption && <h1>アストラテック Option: {data.implantMakerAstraTechOption}</h1>}
                            {data.implantShade && <h1>インプラント シェード選択: {data.implantShade}</h1>}
                            {data.implantType ? <Button onClick={() => history.push("/form/implant")}>Edit</Button> : null}
                            {data.dentureInsured || data.dentureUninsured ?<h1><strong>Denture</strong></h1> : null}
                            {data.dentureInvolution && <h1>対合: {data.dentureInvolution}</h1>}
                            {data.dentureInvolutionBT && <h1>対合 BT: {data.dentureInvolutionBT}</h1>}
                            {data.dentureInsured && <h1>義歯 保険: {data.dentureInsured}</h1>}
                            {data.dentureUninsured && <h1>義歯 自費: {data.dentureUninsured}</h1>}
                            {data.dentureArtificialInsured && <h1>人工歯 保険: {data.dentureArtificialInsured}</h1>}
                            {data.dentureBarInsured && <h1>バー 保険: {data.dentureBarInsured}</h1>}
                            {data.dentureFloorInsured && <h1>床 保険: {data.dentureFloorInsured}</h1>}
                            {data.dentureBarUninsured && <h1>バー 自費: {data.dentureBarUninsured}</h1>}
                            {data.dentureOtherInsured && <h1>その他 保険: {data.dentureOtherInsured}</h1>}
                            {data.dentureInsured || data.dentureUninsured  ? <Button onClick={() => history.push("/form/denture")}>Edit</Button> : null}
                             <h1>主訴: {data.mainComplaint }</h1>
                            <h1>発注日: {date}</h1> 
                            <h1>配送日: {deliveryDate}</h1> 
                            <h1>時間: {deliveryTime}</h1> 
                        </div>
                        <div className="teeth">
                            <CanvasDraw 
                                imgSrc={mouth} alt="mouth diagram" 
                                saveData={data.drawing}  
                                brushColor={data.color}
                                brushRadius={brushRadius}
                                lazyRadius={lazyRadius}
                                immediateLoading={immediateLoading}
                            />
                              <CanvasDraw 
                                imgSrc={diagram} alt="Ptnadult diagram" 
                                saveData={data.diagram}  
                                // brushColor={color}
                                brushRadius={brushRadius}
                                lazyRadius={lazyRadius}
                                canvasHeight={height}
                                canvasWidth={width}
                                immediateLoading={immediateLoading}
                            />
                         </div> 
        </div>
        <div>
          {/* <Button color="primary" variant="contained" onClick={() => history.push(`/form/patient`)}>  finish </Button> */}
          <Button className="nav-btn">Submit</Button>  
          <Button className="nav-btn" onClick={() => history.push(`/form/treatment`)}> add order</Button>
        </div>
    </div>
  )
}
export default Confirmation;
