import React from 'react'
import { FormGroup, Label, Input, Button } from "reactstrap";
import { useHistory } from 'react-router-dom';
function Inlay({
  inlayInvolution, 
  inlayInvolutionBT, 
  inlayMaterial, 
  inlayShade, 
  paymentType,
  inlaySpecUninsured, 
  inlaySpecInsured, 
  handleChange,
  id
}) {
  const history = useHistory();

  return (
    <div>
    <h2><strong>インレー</strong></h2> 
    <FormGroup className="inlay-onlay form-box">
        <Label for="inlayInvolution">対合</Label>
          <Input type="select" name="inlayInvolution" value={inlayInvolution} onChange={handleChange} required>
          　<option>Please Select a choice</option>
            <option>なし</option>
            <option>あり</option>     
          </Input>
        {
          inlayInvolution === "あり" &&
          <div>
            <Label for="inlayInvolutionBT">BT</Label>
            <Input type="select" name="inlayInvolutionBT" value={inlayInvolutionBT} onChange={handleChange} required>
            　<option>Please Select a choice</option>
              <option>なし</option>
              <option>あり</option>     
            </Input>
          </div> 
        }
        {
          paymentType === "保険" &&
          <div>
            <Label for="inlaySpecInsured">Inlay Spec 保険 </Label>
              <Input type="select" name="inlaySpecInsured" value={inlaySpecInsured} onChange={handleChange} required>
              　<option>なし</option>
                <option>金パラ</option>
                <option>銀合金</option>
                <option>レジン</option>      
              </Input>
          </div>
        }
        {
          paymentType === "自費" &&
          <div>
          <Label for="inlaySpecUninsured">Inlay Spec 自費</Label>
          <Input type="select" name="inlaySpecUninsured" value={inlaySpecUninsured} onChange={handleChange} required>
          　<option>なし</option>
            <option>ハイブリットインレー</option>
            <option>ハイブリットアンレー</option>     
          </Input>
          </div>
        }
      <Label for="inlayMaterial">補綴物インレー</Label>
        <Input type="select" name="inlayMaterial"  value={inlayMaterial} onChange={handleChange} required>
        　<option>なし</option>
          <option>Emax</option>
          <option>Zirconia - monolithic</option>
          <option>Zirconia - veneered</option>       
        </Input>
      {
       paymentType === "保険" && inlaySpecInsured ===  "レジン"  &&
        <div>
          <Label for="inlayShade">シェード選択</Label>
            <Input type="select" name="inlayShade" value={inlayShade} onChange={handleChange} required>
            　<option>なし</option>　
              <option>なし</option>
              <option>A 1</option>
              <option>A 2</option>
              <option>A 3</option>
              <option>A 3,5</option>
              <option>A 4</option>
              <option>B 1</option>
              <option>B 2</option>
              <option>B 3</option>
              <option>B 4</option>
              <option>C 1</option>
              <option>C 2</option>
              <option>C 3</option>
              <option>C 4</option>
            </Input>
        </div>
      }

    </FormGroup>
    

   {!id && <Button className="nav-btn"  onClick={() => history.push(`/form/delivery-time`)}>finish</Button>}
    { !id && <Button className="nav-btn"  onClick={() => history.push(`/form/treatment`)}>add order</Button>}
    {
      id ?
      <Button className="nav-btn"  onClick={() => history.push(`/form/${id}/confirm`)}>check order</Button>
      :
      <Button className="nav-btn"  onClick={() => history.push(`/form/confirm`)}>check order</Button>
    }

    </div>
  )
}

export default Inlay;