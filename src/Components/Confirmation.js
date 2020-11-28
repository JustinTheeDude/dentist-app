import React, { useState } from 'react'
import { Button } from "reactstrap";
import { useHistory} from 'react-router-dom'
import CanvasDraw from "react-canvas-draw";
import mouth from '../assets/mouth.png';
import pntAdult from '../assets/toothNotation.png';
import pntChild from '../assets/pntChild.png';


function Confirmation({data, user, id, update}) {
  const [brushRadius] = useState(0.1)
  const [lazyRadius] = useState(0.1)
  // const [height] = useState(300)
  // const [width] = useState(400)
  const [immediateLoading] = useState(true)
  const history = useHistory()
  const date = data.date.toString().slice(0,15)
  const deliveryDate = data.deliveryDate.toString().slice(0,15)
  const deliveryTime = data.deliveryTime
  const fontObj = {
    fontSize: 28,
    fontWeight: "bold",
    color: "#2A2A72"
  }
  return (
    <div>
        <div className="order-container">
                        <div className="order-info">
                            <h1 style={fontObj}>病院情報</h1>
                            <h1>歯科医名: {user}</h1>
                            <h1>住所: {data.address}</h1>
                            <h1>郵便番号: {data.zip}</h1>
                            <h1 style={fontObj}>患者情報</h1>
                            <h1>患者ID: {data.patientID}</h1>
                            <h1>患者名: {data.lNameKanji} {data.fNameKanji}</h1>
                            <h1>患者名 (フリガナ): {data.lNameKana} {data.fNameKana}</h1>
                            <h1>年齢: {data.age}</h1>
                            <h1>性別: {data.gender}</h1>
                            <h1>支払い: {data.paymentType}</h1>
                          {  id ?
                            <Button className="edit-btn" onClick={() => history.push(`/form/${id}/patient`)}>編集</Button> 
                            :
                            <Button className="edit-btn" onClick={() => history.push(`/form/patient`)}>編集</Button> 
                          }
                            {data.inlaySpecInsured || data.inlaySpecUninsured ? <h1 style={fontObj}>インレー</h1> : null}          
                            {data.inlayInvolution && <h1>対合 : {data.inlayInvolution}</h1>}
                            {data.inlayInvolutionBT && <h1>対合 BT: {data.inlayInvolutionBT}</h1>}
                            {data.inlaySpecInsured && <h1>Inlay Spec 保険 : {data.inlaySpecInsured}</h1>}
                            {data.inlaySpecUninsured && <h1>Inlay Spec 自費 : {data.inlaySpecUninsured}</h1>}
                            {data.inlayMaterial && <h1>補綴物インレー: {data.inlayMaterial}</h1>}
                            {data.inlayShade && <h1>インレーシェード: {data.inlayShade}</h1>}
                            { id  ? 
                              data.inlaySpecInsured || data.inlaySpecUninsured || data.inlayInvolutionBT ?
                              <Button className="edit-btn" onClick={() => history.push(`/form/${id}/inlay`)}>編集</Button> : null : null}
                            { !id ? data.inlaySpecInsured || data.inlaySpecUninsured ? <Button className="edit-btn" onClick={() => history.push("/form/inlay")}>編集</Button> : null : null}
                            {data.crownMaterialInsured || data.crownMaterialUninsured ? <h1 style={fontObj}>クラウン</h1> : null}
                            {data.crownInvolution && <h1>対合: {data.crownInvolution}</h1>}  
                            {data.crownInvolutionBT && <h1>対合 BT: {data.crownInvolutionBT}</h1>}
                            {data.crownMaterialInsured && <h1>クラウン 保険: {data.crownMaterialInsured}</h1>}
                            {data.crownShadeInsured && <h1>クラウン シェード選択 保険: {data.crownShadeInsured}</h1>}
                            {data.crownMaterialUninsured && <h1>クラウン 自費: {data.crownMaterialUninsured}</h1>}
                            {data.crownShadeUninsured && <h1>クラウン シェード選択 自費: {data.crownShadeUninsured}</h1>}
                            { id ? 
                              data.crownMaterialInsured || data.crownMaterialUninsured || data.BrInvolution ?
                                <Button className="edit-btn" onClick={() => history.push(`/form/${id}/crown`)}>編集</Button> : null : null} 
                            {!id ? data.crownMaterialInsured || data.crownMaterialUninsured ?  <Button className="edit-btn" onClick={() => history.push("/form/crown")}>編集</Button> : null : null} 
                            {data.BrMaterialInsured || data.BrMaterialUninsured ? <h1 style={fontObj}>Br</h1> : null}       
                            {data.BrInvolution && <h1>対合: {data.BrInvolution}</h1>}
                            {data.BrInvolutionBT && <h1>対合 BT: {data.BrInvolutionBT}</h1>}
                            {data.BrMaterialInsured && <h1>Br 保険: {data.BrMaterialInsured}</h1>}
                            {data.BrShadeInsured && <h1>Br シェード選択 保険: {data.BrShadeInsured}</h1>}
                            {data.BrMaterialUninsured && <h1>Br 自費: {data.BrMaterialUninsured}</h1>}
                            {data.BrShadeUninsured && <h1>Br シェード選択 自費: {data.BrShadeUninsured}</h1>}
                            { id ?
                              data.BrMaterialInsured || data.BrMaterialUninsured ?
                              <Button className="edit-btn" onClick={() => history.push(`/form/${id}/br`)}>編集</Button> : null : null } 
                            { !id ?
                              data.BrMaterialInsured || data.BrMaterialUninsured ? <Button className="edit-btn" onClick={() => history.push("/form/br")}>編集</Button> : null : null}
                            {data.otherOptionInsured || data.otherOptionUninsured ? <h1 style={fontObj}>その他</h1> : null}
                            {data.otherOptionInsured && <h1>その他 保険: {data.otherOptionInsured}</h1>}
                            {data.otherOptionUninsured && <h1>その他 自費: {data.otherOptionUninsured}</h1>}
                            { id ?
                               data.otherOptionInsured || data.otherOptionUninsured ?
                               <Button className="edit-btn" onClick={() => history.push(`/form/${id}/other`)}>Edit</Button> : null : null }
                            { !id ? data.otherOptionInsured || data.otherOptionUninsured ? <Button className="edit-btn" onClick={() => history.push("/form/other")}>編集</Button> : null : null}
                            {data.oralDeviceInsured || data.oralDeviceUninsured ? <h1 style={fontObj}>口腔内装置:</h1> : null}
                            {data.oralDeviceInsured && <h1>口腔内装置 保険: {data.oralDeviceInsured}</h1>}
                            {data.oralDeviceUninsured && <h1>口腔内装置 自費: {data.oralDeviceUninsured}</h1>}
                            {id ? data.oralDeviceInsured || data.oralDeviceUninsured  ? <Button className="edit-btn" onClick={() => history.push("/form/other")}>編集</Button> : null : null}
                            {!id ? data.oralDeviceInsured || data.oralDeviceUninsured  ? <Button className="edit-btn" onClick={() => history.push("/form/other")}>編集</Button> : null : null}
                            {data.implantType  && <h1 style={fontObj}>インプラント</h1> }
                            {data.implantType && <h1>インプラント: {data.implantType}</h1>} 
                            {data.implantMaterial && <h1>インプラントタイプ: {data.implantMaterial}</h1>}
                            {data.implantType && <h1>各個トレー: {data.implantTray}</h1>}
                            {data.implantMaker && <h1>インプラント メーカー: {data.implantMaker}</h1>}
                            {data.implantMakerNobelOption && <h1>ノーベル Option: {data.implantMakerNobelOption}</h1>}
                            {data.implantMakerCamlogOption && <h1>カムログ Option: {data.implantMakerCamlogOption}</h1>}
                            {data.implantMakerAnkylosOption && <h1>アンキロス Option: {data.implantMakerAnkylosOption}</h1>}
                            {data.implantMakerAstraTechOption && <h1>アストラテック Option: {data.implantMakerAstraTechOption}</h1>}
                            {data.implantShade && <h1>インプラント シェード選択: {data.implantShade}</h1>}
                            {id ? data.implantType ? <Button className="edit-btn" onClick={() => history.push(`/form/${id}/implant`)}>編集</Button> : null : null }
                            {!id ? data.implantType ? <Button className="edit-btn" onClick={() => history.push("/form/implant")}>編集</Button> : null : null }
                            {data.dentureInsured || data.dentureUninsured ?<h1 style={fontObj}>義歯</h1> : null}
                            {data.dentureInvolution && <h1>対合: {data.dentureInvolution}</h1>}
                            {data.dentureInvolutionBT && <h1>対合 BT: {data.dentureInvolutionBT}</h1>}
                            {data.dentureInsured && <h1>義歯 保険: {data.dentureInsured}</h1>}
                            {data.dentureUninsured && <h1>義歯 自費: {data.dentureUninsured}</h1>}
                            {data.dentureArtificialInsured && <h1>人工歯 保険: {data.dentureArtificialInsured}</h1>}
                            {data.dentureBarInsured && <h1>バー 保険: {data.dentureBarInsured}</h1>}
                            {data.dentureFloorInsured && <h1>床 保険: {data.dentureFloorInsured}</h1>}
                            {data.dentureBarUninsured && <h1>バー 自費: {data.dentureBarUninsured}</h1>}
                            {data.dentureOtherInsured && <h1>その他 保険: {data.dentureOtherInsured}</h1>}
                            { id ? data.dentureInsured || data.dentureUninsured ? <Button className="edit-btn" onClick={() => history.push(`/form/${id}/denture`)}>編集</Button> : null : null}
                            { !id ? data.dentureInsured || data.dentureUninsured  ? <Button className="edit-btn" onClick={() => history.push("/form/denture")}>編集</Button> : null : null}
                            <h1 style={fontObj}>注文日</h1>  
                            <h1>発注日: {date}</h1>
                            <h1>時間: {deliveryTime}</h1>
                            { id &&  <Button className="edit-btn" onClick={() => history.push(`/form/${id}/delivery`)}>編集</Button> }
                            { !id && <Button className="edit-btn" onClick={() => history.push("/form/delivery")}>編集</Button> }
                            <h1 style={fontObj}>納品日</h1>
                            <h1>配送日: {deliveryDate}</h1>
                            {id  && <Button className="edit-btn" onClick={() => history.push(`/form/${id}/delivery`)}>編集</Button>} 
                            {!id && <Button className="edit-btn" onClick={() => history.push("/form/delivery")}>編集</Button> }
                        </div>
                        <div>
                            <h1 style={fontObj}>図面</h1>
                            <CanvasDraw
                                imgSrc={mouth} alt="mouth diagram" 
                                saveData={data.drawing}  
                                brushColor={data.color}
                                brushRadius={brushRadius}
                                lazyRadius={lazyRadius}
                                immediateLoading={immediateLoading}
                                className="diagram"
                                canvasWidth={"100%"}
                            />
                              {
                                data.age > 14 
                                ?
                              <CanvasDraw 
                                imgSrc={pntAdult} alt="Ptnadult diagram" 
                                saveData={data.diagram}  
                                brushRadius={brushRadius}
                                lazyRadius={lazyRadius}
                                // canvasHeight={height}
                                // canvasWidth={width}
                                canvasWidth={"100%"}
                                immediateLoading={immediateLoading}
                                className="diagram"
                              />
                              :
                              <CanvasDraw 
                                imgSrc={pntChild} alt="PtnChild diagram" 
                                saveData={data.pntChild}  
                                brushRadius={brushRadius}
                                lazyRadius={lazyRadius}
                                immediateLoading={immediateLoading}
                                canvasWidth={"100%"}
                                className="diagram"
                              />
                              }
                            <h1 style={fontObj}>主訴</h1>
                            <h1>{data.mainComplaint }</h1>
                            { id && <Button className="edit-btn" onClick={() => history.push(`/form/${id}/diagram`)}>編集</Button>}
                            {!id && <Button className="edit-btn" onClick={() => history.push("/form/diagram")}>編集</Button>}
                         </div> 
        </div>
        <div>
          {!id && <Button className="nav-btn" onClick={() => history.push(`/form/treatment`)}>別の注文を追加</Button>}
          <Button className="nav-btn" onClick={()=> history.push("/cards")}>オーダーリスト</Button>
          {
            id ?
          <Button className="nav-btn" onClick={()=> update()}>更新</Button>
          :  
          <Button className="nav-btn">同じる</Button>  

          }
        </div>
    </div>
  )
}
export default Confirmation;
