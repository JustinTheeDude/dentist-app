import React from 'react'
import { FormGroup,Label,Input } from 'reactstrap';

function Br({ paymentType,BrMaterialInsured, BrInsuredShade,BrMaterialUninsured, BrShadeUninsured, handleChange }) {
  return (
    <FormGroup>
      {
      paymentType === "保険" &&
      <div>
        <Label for="BrMaterialInsured">Br 保険</Label>
          <Input type="select" name="BrMaterialInsured" value={BrMaterialInsured} onChange={handleChange} required>
            <option>BrBT(咬合床)</option>
            <option>金パラ</option>
            <option>銀合金</option>
            <option>14K</option>
            <option>高強度硬質レジン</option>         
          </Input><Label for="BrInsuredShade">Br シェード選択 保険</Label>
          <Input type="select" name="BrInsuredShade" value={BrInsuredShade} onChange={handleChange} required>
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
      {
        paymentType === "自費" &&
        <div>
          <Label for="BrMaterialUninsured">Br 自費</Label>
            <Input type="select" name="BrMaterialUninsured" value={BrMaterialUninsured} onChange={handleChange} required>
                <option>なし</option>
                <option>ジルコニア+ポーセレン</option>
                <option>ジルコニア</option>
                <option>メタルボンド</option>
                <option>ゴールド</option>
            </Input>
        </div> 
      }
      {   
            paymentType === "自費" ?
            BrMaterialUninsured !== "ゴールド" && BrMaterialUninsured !== ""  ?
            <div>
                <Label for="crownShadeUninsured">Br シェード選択 自費</Label>
                    <Input type="select" name="crownShadeUninsured" value={BrShadeUninsured} onChange={handleChange} required>
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
            :
            null
            :
            null
        }

    {/* <Label for="telescope">テレスコープ</Label>
        <Input type="select" name="telescope" value={telescope} onChange={handleChange} required>
            <option>ポストアンドコア</option>
            <option>アナトミカルポストアンドコア</option>
            <option>スクリュ－固定式クラウン&#8226;ポストアンドコア</option>
            <option>なし</option>
        </Input>
        <Label for="telescopeMaterial">材料</Label>
        <Input type="select" name="telescopeMaterial" value={telescopeMaterial} onChange={handleChange} required>
            <option>Chrome-Cobalt</option>
            <option>Titanium</option>
            <option>Precious</option>
            <option>Zirconia</option>
        </Input> */}
        
    </FormGroup>
  )
}

export default Br;