import React from 'react'
import { FormGroup, Label, Input } from "reactstrap";

function InlayOnlay({inlayOnlay, inlayMaterial, inlayShade, paymentType,inlaySpecUninsured, inlaySpecInsurance, handleChange }) {
  return (
    <FormGroup className="inlay-onlay form-box">
      <Label for="inlayOnlay">インレーとアンレー</Label>
        <Input type="select" name="inlayOnlay" value={inlayOnlay} onChange={handleChange} required>
          <option>クラウン</option>
          <option>クラウン&#8226;ポンティック</option>
          <option>インレーとアンレー</option>
          <option>べニア</option>
          <option>なし</option>        
        </Input>
        {
          paymentType === "保険" &&
          <div>
            <Label for="inlaySpecInsurance">Inlay Spec 保険 </Label>
              <Input type="select" name="inlaySpecInsurance" value={inlaySpecInsurance} onChange={handleChange} required>
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
            <option>ハイブリットインレー</option>
            <option>ハイブリットアンレー</option>     
          </Input>
          </div>
        }
      <Label for="inlayMaterial">補綴物インレー</Label>
        <Input type="select" name="inlayMaterial"  value={inlayMaterial} onChange={handleChange} required>
          <option>Emax</option>
          <option>Zirconia - monolithic</option>
          <option>Zirconia - veneered</option>       
        </Input>
      <Label for="inlayShade">シェード選択</Label>
        <Input type="select" name="inlayShade" value={inlayShade} onChange={handleChange} required>
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
    </FormGroup>
  )
}

export default InlayOnlay