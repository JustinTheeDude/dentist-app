import React from 'react'
import { FormGroup,Label, Input, Button  } from "reactstrap";
import { useHistory } from 'react-router-dom';

function OralDevice({ handleChange, oralDeviceInsured, oralDeviceUninsured, paymentType, id }) {
  const history = useHistory();
  return(
    <div>
    <FormGroup className="OralDevice form-box">
     {
      paymentType === "保険" &&
      <div>
        <Label for="oralDeviceInsured">口腔内装置 保険</Label>
          <Input type="select" name="oralDeviceInsured" value={oralDeviceInsured} onChange={handleChange} >
          　<option>なし</option>
            <option>顎関節治療用1(アクリリック樹脂)</option>
            <option>顎関節治療用2(熱可塑性樹脂)</option>
            <option>Brx1(アクリリック樹脂)</option>
            <option>Brx2(熱可塑性樹脂)</option>
            <option>Brx3(熱可塑性樹脂)</option>
            <option>無呼吸症治療1(アクリリック樹脂)</option>
            <option>無呼吸症治療2(熱可塑性樹脂)</option>       
          </Input>
      </div> 
     }
     {
      paymentType === "自費" &&
      <div>
        <Label for="oralDeviceUninsured">口腔内装置 自費</Label>
          <Input type="select" name="oralDeviceUninsured" value={oralDeviceUninsured} onChange={handleChange} >
          　　<option>なし</option>   
              <option>スポーツマウスピース</option>      
              <option>ホワイトニング用マウスピース</option>
          </Input>
      </div>
     }
    </FormGroup>
    {!id && <Button className="nav-btn"  onClick={() => history.push(`/form/delivery-time`)}>次</Button>}
    { !id && <Button className="nav-btn"  onClick={() => history.push(`/form/treatment`)}>別の注文を追加</Button> }
    {
      id ?
      <Button className="nav-btn"  onClick={() => history.push(`/form/${id}/confirm`)}>注文詳細</Button>
      :
      <Button className="nav-btn"  onClick={() => history.push(`/form/confirm`)}>注文詳細</Button>
    }
    </div>
  )
} 

export default OralDevice;