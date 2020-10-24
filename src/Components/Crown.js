import React from 'react'
import { FormGroup, Label, Input } from "reactstrap";

function Crown({ 
    paymentType,
    crownInvolution,
    crownInvolutionBT,
    crownMaterialInsured, 
    crownShadeInsured, 
    crownMaterialUninsured, 
    crownShadeUninsured, 
    handleChange
}) {

  return (
    <FormGroup className="Crown form-box">
        <Label for="crownInvolution">対合</Label>
          <Input type="select" name="crownInvolution" value={crownInvolution} onChange={handleChange} required>
          　<option>Please Select a choice</option>
            <option>なし</option>
            <option>あり</option>     
          </Input>
        {
          crownInvolution === "あり" &&
          <div>
            <Label for="crownInvolutionBT">BT</Label>
            <Input type="select" name="crownInvolutionBT" value={crownInvolutionBT} onChange={handleChange} required>
            　<option>Please Select a choice</option>
              <option>なし</option>
              <option>あり</option>     
            </Input>
          </div> 
        }
        {
            paymentType === "保険" &&
            <div>
            <Label for="crown">クラウン 保険</Label>
                <Input type="select" name="crownMaterialInsured" value={crownMaterialInsured} onChange={handleChange} required>
                    <option>なし</option>
                    <option>レジン前装金属冠</option>
                    <option>FMC(金パラ)</option>
                    <option>4/5冠(金パラ)</option>
                    <option>FMC(銀合金)</option>
                    <option>4/5冠(銀合金)</option>
                    <option>FMC(チタン)</option>
                    <option>CAD/CAM冠</option>
                    <option>HJC</option>
                </Input>
            </div>
        }
        {
            paymentType === "保険" ?
            crownMaterialInsured === "レジン前装金属冠" || crownMaterialInsured === "CAD/CAM冠" ?
            <div>
                <Label for="crownShadeInsured">クラウン シェード選択 保険</Label>
                    <Input type="select" name="crownShadeInsured" value={crownShadeInsured} onChange={handleChange} required>
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
        {
            paymentType === "自費" &&
            <div>
            <Label for="crownMaterialUninsured">クラウン 自費</Label>
                <Input type="select" name="crownMaterialUninsured" value={crownMaterialUninsured} onChange={handleChange} required>
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
            crownMaterialUninsured !== "ゴールド" && crownMaterialUninsured !== ""  ?
            <div>
                <Label for="crownShadeUninsured">クラウン シェード選択 自費</Label>
                    <Input type="select" name="crownShadeUninsured" value={crownShadeUninsured} onChange={handleChange} required>
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
    </FormGroup>

  )
};

export default Crown;
