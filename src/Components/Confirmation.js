import React, { useState } from 'react'
import { Button } from "reactstrap";
import { useHistory} from 'react-router-dom'
import CanvasDraw from "react-canvas-draw";
import mouth from '../assets/mouth.png';
import diagram from '../assets/Ptnadult.svg.png'


function Confirmation({data, user, id, update}) {
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
                          {  id ?
                            <Button className="edit-btn" onClick={() => history.push(`/form/${id}/patient`)}>Edit</Button> 
                            :
                            <Button className="edit-btn" onClick={() => history.push(`/form/patient`)}>Edit</Button> 
                          }
                            {data.inlaySpecInsured || data.inlaySpecUninsured ? <h1><strong>Inlay</strong></h1> : null}          
                            {data.inlayInvolution && <h1>対合 : {data.inlayInvolution}</h1>}
                            {data.inlayInvolutionBT && <h1>対合 BT: {data.inlayInvolutionBT}</h1>}
                            {data.inlaySpecInsured && <h1>Inlay Spec 保険 : {data.inlaySpecInsured}</h1>}
                            {data.inlaySpecUninsured && <h1>Inlay Spec 自費 : {data.inlaySpecUninsured}</h1>}
                            {data.inlayMaterial && <h1>補綴物インレー: {data.inlayMaterial}</h1>}
                            {data.inlayShade && <h1>インレーシェード: {data.inlayShade}</h1>}
                            {data.crownInvolution && <h1>対合: {data.crownInvolution}</h1>}
                            { id  ? 
                              data.inlaySpecInsured || data.inlaySpecUninsured || data.inlayInvolutionBT ?
                              <Button className="edit-btn" onClick={() => history.push(`/form/${id}/inlay`)}>Edit</Button> : null : null}
                            { !id ? data.inlaySpecInsured || data.inlaySpecUninsured ? <Button className="edit-btn" onClick={() => history.push("/form/inlay")}>Edit</Button> : null : null}
                            {data.crownMaterialInsured || data.crownMaterialUninsured ? <h1><strong>Crown</strong></h1> : null}  
                            {data.crownInvolutionBT && <h1>対合 BT: {data.crownInvolutionBT}</h1>}
                            {data.crownMaterialInsured && <h1>クラウン 保険: {data.crownMaterialInsured}</h1>}
                            {data.crownShadeInsured && <h1>クラウン シェード選択 保険: {data.crownShadeInsured}</h1>}
                            {data.crownMaterialUninsured && <h1>クラウン 自費: {data.crownMaterialUninsured}</h1>}
                            {data.crownShadeUninsured && <h1>クラウン シェード選択 自費: {data.crownShadeUninsured}</h1>}
                            { id ? 
                              data.crownMaterialInsured || data.crownMaterialUninsured || data.BrInvolution ?
                                <Button className="edit-btn" onClick={() => history.push(`/form/${id}/crown`)}>Edit</Button> : null : null} 
                            {!id ? data.crownMaterialInsured || data.crownMaterialUninsured ?  <Button className="edit-btn" onClick={() => history.push("/form/crown")}>Edit</Button> : null : null} 
                            {data.BrMaterialInsured || data.BrMaterialUninsured ? <h1><strong>Br</strong></h1> : null}       
                            {data.BrInvolution && <h1>対合: {data.BrInvolution}</h1>}
                            {data.BrInvolutionBT && <h1>対合 BT: {data.BrInvolutionBT}</h1>}
                            {data.BrMaterialInsured && <h1>Br 保険: {data.BrMaterialInsured}</h1>}
                            {data.BrShadeInsured && <h1>Br シェード選択 保険: {data.BrShadeInsured}</h1>}
                            {data.BrMaterialUninsured && <h1>Br 自費: {data.BrMaterialUninsured}</h1>}
                            {data.BrShadeUninsured && <h1>Br シェード選択 自費: {data.BrShadeUninsured}</h1>}
                            { id ?
                              data.BrMaterialInsured || data.BrMaterialUninsured ?
                              <Button className="edit-btn" onClick={() => history.push(`/form/${id}/br`)}>Edit</Button> : null : null } 
                            { !id ?
                              data.BrMaterialInsured || data.BrMaterialUninsured ? <Button className="edit-btn" onClick={() => history.push("/form/br")}>Edit</Button> : null : null}
                            {data.otherOptionInsured || data.otherOptionUninsured ? <h1><strong>その他</strong></h1> : null}
                            {data.otherOptionInsured && <h1>その他 保険: {data.otherOptionInsured}</h1>}
                            {data.otherOptionUninsured && <h1>その他 自費: {data.otherOptionUninsured}</h1>}
                            { id ?
                               data.otherOptionInsured || data.otherOptionUninsured ?
                               <Button className="edit-btn" onClick={() => history.push(`/form/${id}/other`)}>Edit</Button> : null : null }
                            { !id ? data.otherOptionInsured || data.otherOptionUninsured ? <Button className="edit-btn" onClick={() => history.push("/form/other")}>Edit</Button> : null : null}
                            {data.oralDeviceInsured || data.oralDeviceUninsured ? <h1><strong>口腔内装置</strong></h1> : null}
                            {data.oralDeviceInsured && <h1>口腔内装置 保険: {data.oralDeviceInsured}</h1>}
                            {data.oralDeviceUninsured && <h1>口腔内装置 自費: {data.oralDeviceUninsured}</h1>}
                            {id ? data.oralDeviceInsured || data.oralDeviceUninsured  ? <Button className="edit-btn" onClick={() => history.push("/form/other")}>Edit</Button> : null : null}
                            {!id ? data.oralDeviceInsured || data.oralDeviceUninsured  ? <Button className="edit-btn" onClick={() => history.push("/form/other")}>Edit</Button> : null : null}
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
                            {id ? data.implantType ? <Button className="edit-btn" onClick={() => history.push(`/form/${id}/implant`)}>Edit</Button> : null : null }
                            {!id ? data.implantType ? <Button className="edit-btn" onClick={() => history.push("/form/implant")}>Edit</Button> : null : null }
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
                            { id ? data.dentureInsured || data.dentureUninsured ? <Button className="edit-btn" onClick={() => history.push(`/form/${id}/denture`)}>Edit</Button> : null : null}
                            { !id ? data.dentureInsured || data.dentureUninsured  ? <Button className="edit-btn" onClick={() => history.push("/form/denture")}>Edit</Button> : null : null}
                            <h1><strong>Order Date</strong></h1>
                            <h1>主訴: {data.mainComplaint }</h1>
                            <h1>発注日: {date}</h1>
                            <h1>時間: {deliveryTime}</h1>
                            { id &&  <Button className="edit-btn" onClick={() => history.push(`/form/${id}/delivery-time`)}>Edit</Button> }
                            { !id && <Button className="edit-btn" onClick={() => history.push("/form/delivery-time")}>Edit</Button> }
                            <h1><strong>Delivery Date</strong></h1>
                            <h1>配送日: {deliveryDate}</h1>
                            {id  && <Button className="edit-btn" onClick={() => history.push(`/form/${id}/delivery-date`)}>Edit</Button>} 
                            {!id && <Button className="edit-btn" onClick={() => history.push("/form/delivery-date")}>Edit</Button> }
                        </div>
                        <div className="teeth">
                            <h1><strong>Diagrams</strong></h1>
                            <CanvasDraw 
                                className="teeth-mouth"
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
                                brushRadius={brushRadius}
                                lazyRadius={lazyRadius}
                                canvasHeight={height}
                                canvasWidth={width}
                                immediateLoading={immediateLoading}
                            />
                            { id && <Button className="edit-btn" onClick={() => history.push(`/form/${id}/diagram`)}>Edit</Button>}
                            {!id && <Button className="edit-btn" onClick={() => history.push("/form/diagram")}>Edit</Button>}
                         </div> 
        </div>
        <div>
          {!id && <Button className="nav-btn" onClick={() => history.push(`/form/treatment`)}>add order</Button>}
          {
            id ?
          <Button className="nav-btn" onClick={()=> update()}>update</Button>
          :  
          <Button className="nav-btn">Submit</Button>  

          }
          <Button className="nav-btn" onClick={()=> history.push("/cards")}>Order List</Button>
        </div>
    </div>
  )
}
export default Confirmation;
