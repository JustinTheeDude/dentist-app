import React from 'react';
import  { FormGroup, Label, Input  } from 'reactstrap';

/* Need to add logic to the checkboxes or find a new way to do them with the svg teeth */
function Denture({ 
   paymentType, 
   dentureInvolution,
   dentureInvolutionBT,
   dentureInsured, 
   dentureUninsured, 
   dentureArtificialInsured,
   dentureBarInsured,
   dentureFloorInsured,
   dentureBarUninsured,
   dentureOtherInsured,
   dentureClaspInsuredNum,
   handleChange 
  }) {

  return (
    <FormGroup className="denture form-box">
        <Label for="dentureInvolution">対合</Label>
        <Input type="select" name="dentureInvolution" value={dentureInvolution} onChange={handleChange} required>
          　<option>Please Select a choice</option>
            <option>なし</option>
            <option>あり</option>     
          </Input>
        {
          dentureInvolution === "あり" &&
          <div>
            <Label for="dentureInvolutionBT">BT</Label>
            <Input type="select" name="dentureInvolutionBT" value={dentureInvolutionBT} onChange={handleChange} required>
            　<option>Please Select a choice</option>
              <option>なし</option>
              <option>あり</option>     
            </Input>
          </div> 
        }
    {
      paymentType === "保険" &&
      <div>
      <Label for="dentureInsured">義歯 保険</Label>
        <Input type="select" name="dentureInsured"  value={dentureInsured} onChange={handleChange} >
          <option>なし</option>
          <option>各個トレー</option>
          <option>PD義歯BT(咬合床)</option>
          <option>FD義歯BT(咬合床)</option> 
          <option>PD義歯GoA(顎運動関連検査)</option>
          <option>FD義歯GoA(顎運動関連検査)</option>
          <option>PD義歯TF</option>
          <option>FD義歯TF</option> 
          <option>PD義歯set</option>
          <option>FD義歯set</option>
        </Input>   
      </div>
    }
    {
      paymentType === "自費" &&
      <div>
      <Label for="dentureUninsured">義歯 自費</Label>
        <Input type="select" name="dentureUninsured"  value={dentureUninsured} onChange={handleChange} >
          <option>なし</option>
          <option>㉂各個トレー</option>
          <option>㉂PD義歯BT(咬合床)</option>
          <option>㉂FD義歯BT(咬合床)</option> 
          <option>㉂PD義歯GoA(顎運動関連検査)</option>
          <option>㉂FD義歯GoA(顎運動関連検査)</option>
          <option>㉂PD義歯TF</option>
          <option>㉂FD義歯TF</option> 
          <option>㉂PD義歯set</option>
          <option>㉂FD義歯set</option>
        </Input> 
      </div>
    }
    {
      dentureInsured.includes("FD") && !dentureInsured.includes("GoA") &&
      <div>
      <Label for="dentureArtificialInsured">人工歯 保険</Label>
        <Input type="select" name="dentureArtificialInsured"  value={dentureArtificialInsured} onChange={handleChange} >
          <option>なし</option> 
          <option>レジン</option>
          <option>硬質レジン</option>
          <option>スルフォン</option>
          <option>陶器</option>
        </Input>
        <Label for="dentureFloorInsured">床 保険</Label>
        <Input type="select" name="dentureFloorInsured"  value={dentureFloorInsured} onChange={handleChange} >
          <option>なし</option> 
          <option>レジン</option>
          <option>熱可塑性樹脂</option>
          <option>金属</option>
        </Input>
        <Label for="dentureClaspInsured">クラスプ 保険</Label>

        <Label for="dentureOtherInsured">その他 保険</Label>
        <Input type="select" name="dentureOtherInsured"  value={dentureOtherInsured} onChange={handleChange} >
          <option>なし</option> 
          <option>ケラター</option>
        </Input>
      </div>
    }
    {
      dentureInsured.includes("PD") && !dentureInsured.includes("GoA") &&
      <div>
          <Label for="dentureBarInsured">バー 保険</Label>
          <Input type="select" name="dentureBarInsured"  value={dentureBarInsured} onChange={handleChange} >
            <option>なし</option>
            <option>バーなし</option>  
            <option>金パラ</option>
            <option>コバルト</option>
          </Input>
          &nbsp;&nbsp;
          <h1>Clasp 保険</h1> 
                <FormGroup check inline>
                    <Label check for="dentureClaspInsuredAcresGPKin" >① 近心　エーカース(金パラ): </Label> &nbsp;&nbsp;
                    <Input type="checkbox" id="dentureClaspInsuredAcresGPKin" name="dentureClaspInsuredAcresGPKin"  onChange={handleChange} />    
                </FormGroup>
                <FormGroup check inline>
                    <Label check for="dentureClaspInsuredAcresGPEn" >② 遠心　エーカース(金パラ): </Label> &nbsp;&nbsp;
                    <Input type="checkbox" id="dentureClaspInsuredAcresGPEn" name="dentureClaspInsuredAcresGPEn"  onChange={handleChange} />    
                </FormGroup>
                <FormGroup check inline>
                    <Label check for="dentureClaspInsuredAcresCobaltKin">③ 近心 エーカース(コバルト): </Label> &nbsp;&nbsp;
                    <Input type="checkbox" id="dentureClaspInsuredAcresCobaltKin" name="dentureClaspInsuredAcresCobaltKin"  onChange={handleChange} />                   
                </FormGroup>
                <FormGroup check inline>
                    <Label check for="dentureClaspInsuredAcresCobaltEn">④ 遠心 エーカース(コバルト): </Label> &nbsp;&nbsp;
                    <Input type="checkbox" id="dentureClaspInsuredAcresCobaltEn" name="dentureClaspInsuredAcresCobaltEn"  onChange={handleChange} />                   
                </FormGroup>
                <FormGroup check inline>
                    <Label check for="dentureClaspInsuredAcres14kKin">⑤ 近心 エーカース(14K): </Label> &nbsp;&nbsp;
                    <Input type="checkbox" id="dentureClaspInsuredAcres14kKin" name="dentureClaspInsuredAcres14kKin"   onChange={handleChange}/>      
                </FormGroup>
                <FormGroup check inline>
                    <Label check for="dentureClaspInsuredAcres14kEn">⑥ 遠心 エーカース(14K): </Label> &nbsp;&nbsp;
                    <Input type="checkbox" id="dentureClaspInsuredAcres14kEn" name="dentureClaspInsuredAcres14kEn"   onChange={handleChange}/>      
                </FormGroup>
                <FormGroup check inline>
                    <Label check for="dentureClaspInsuredWAcresGP">⑦ Wエーカース(金パラ): </Label> &nbsp;&nbsp;
                    <Input type="checkbox" id="dentureClaspInsuredWAcresGP" name="dentureClaspInsuredWAcresGP"   onChange={handleChange}/>      
                </FormGroup>
                <FormGroup check inline>
                    <Label check for="dentureClaspInsuredWAcresCobalt">⑧ Wエーカース(コバルト): </Label> &nbsp;&nbsp;
                    <Input type="checkbox" id="dentureClaspInsuredWAcresCobalt" name="dentureClaspInsuredWAcresCobalt"   onChange={handleChange}/>      
                </FormGroup>
                <FormGroup check inline>
                    <Label check for="dentureClaspInsuredWAcres14k">⑨ Wエーカース(14K): </Label> &nbsp;&nbsp;
                    <Input type="checkbox" id="dentureClaspInsuredWAcres14k" name="dentureClaspInsuredWAcres14k"   onChange={handleChange}/>      
                </FormGroup>
                <FormGroup check inline>
                    <Label check for="dentureClaspInsuredComboGP">⑩ コンビネーション金パラ: </Label> &nbsp;&nbsp;
                    <Input type="checkbox" id="dentureClaspInsuredComboGP" name="dentureClaspInsuredComboGP"   onChange={handleChange}/>      
                </FormGroup>
                <FormGroup check inline>
                    <Label check for="dentureClaspInsuredComboCobalt">⑪ コンビネーションコバルト: </Label> &nbsp;&nbsp;
                    <Input type="checkbox" id="dentureClaspInsuredComboCobalt" name="dentureClaspInsuredComboCobalt"   onChange={handleChange}/>      
                </FormGroup>
                <FormGroup check inline>
                    <Label check for="dentureClaspInsuredWireClasp">⑫ wire clasp: </Label> &nbsp;&nbsp;
                    <Input type="checkbox" id="dentureClaspInsuredWireClasp" name="dentureClaspInsuredWireClasp"   onChange={handleChange}/>      
                </FormGroup>
                <FormGroup check inline>
                    <Label check for="dentureClaspInsuredTechGP">技工士と相談(金パラ): </Label> &nbsp;&nbsp;
                    <Input type="checkbox" id="dentureClaspInsuredTechGP" name="dentureClaspInsuredTechGP"   onChange={handleChange}/>      
                </FormGroup>
                <FormGroup check inline>
                    <Label check for="dentureClaspInsuredTechCobalt">技工士と相談(コバルト): </Label> &nbsp;&nbsp;
                    <Input type="checkbox" id="dentureClaspInsuredTechCobalt" name="dentureClaspInsuredTechCobalt"   onChange={handleChange}/>      
                </FormGroup>
                <FormGroup check inline>
                    <Label check for="dentureClaspInsuredTech14k">技工士と相談(14k): </Label> &nbsp;&nbsp;
                    <Input type="checkbox" id="dentureClaspInsuredTech14k" name="dentureClaspInsuredTech14k"   onChange={handleChange}/>      
                </FormGroup>
        </div>
    }
    {
      dentureUninsured.includes("㉂PD義歯BT(咬合床)")  &&
      <div>
      <Label for="dentureBarUninsured">バー 自費</Label>
          <Input type="select" name="dentureBarUninsured"  value={dentureBarUninsured} onChange={handleChange} >
            <option>なし</option> 
            <option>金パラ</option>
            <option>コバルト</option>
          </Input>
          &nbsp;&nbsp;
          <h1>Clasp 自費</h1> 
                <FormGroup check inline>
                    <Label check for="dentureClaspUninsuredAcresGPKin" >① 近心　エーカース(金パラ): </Label> &nbsp;&nbsp;
                    <Input type="checkbox" id="dentureClaspUninsuredAcresGPKin" name="dentureClaspUninsuredAcresGPKin"  onChange={handleChange} />    
                </FormGroup>
                <FormGroup check inline>
                    <Label check for="dentureClaspUninsuredAcresGPEn" >② 遠心　エーカース(金パラ): </Label> &nbsp;&nbsp;
                    <Input type="checkbox" id="dentureClaspUninsuredAcresGPEn" name="dentureClaspUninsuredAcresGPEn"  onChange={handleChange} />    
                </FormGroup>
                <FormGroup check inline>
                    <Label check for="dentureClaspUninsuredAcresCobaltKin">③ 近心 エーカース(コバルト): </Label> &nbsp;&nbsp;
                    <Input type="checkbox" id="dentureClaspUninsuredAcresCobaltKin" name="dentureClaspUninsuredAcresCobaltKin"  onChange={handleChange} />                   
                </FormGroup>
                <FormGroup check inline>
                    <Label check for="dentureClaspUninsuredAcresCobaltEn">④ 遠心 エーカース(コバルト): </Label> &nbsp;&nbsp;
                    <Input type="checkbox" id="dentureClaspUninsuredAcresCobaltEn" name="dentureClaspUninsuredAcresCobaltEn"  onChange={handleChange} />                   
                </FormGroup>
                <FormGroup check inline>
                    <Label check for="dentureClaspUninsuredAcres14kKin">⑤ 近心 エーカース(14K): </Label> &nbsp;&nbsp;
                    <Input type="checkbox" id="dentureClaspInsuredAcres14kKin" name="dentureClaspUninsuredAcres14kKin"   onChange={handleChange}/>      
                </FormGroup>
                <FormGroup check inline>
                    <Label check for="dentureClaspUninsuredAcres14kEn">⑥ 遠心 エーカース(14K): </Label> &nbsp;&nbsp;
                    <Input type="checkbox" id="dentureClaspInsuredAcres14kEn" name="dentureClaspUninsuredAcres14kEn"   onChange={handleChange}/>      
                </FormGroup>
                <FormGroup check inline>
                    <Label check for="dentureClaspUninsuredWAcresGP">⑦ Wエーカース(金パラ): </Label> &nbsp;&nbsp;
                    <Input type="checkbox" id="dentureClaspUninsuredWAcresGP" name="dentureClaspUninsuredWAcresGP"   onChange={handleChange}/>      
                </FormGroup>
                <FormGroup check inline>
                    <Label check for="dentureClaspUninsuredWAcresCobalt">⑧ Wエーカース(コバルト): </Label> &nbsp;&nbsp;
                    <Input type="checkbox" id="dentureClaspUninsuredWAcresCobalt" name="dentureClaspUninsuredWAcresCobalt"   onChange={handleChange}/>      
                </FormGroup>
                <FormGroup check inline>
                    <Label check for="dentureClaspUninsuredWAcres14k">⑨ Wエーカース(14K): </Label> &nbsp;&nbsp;
                    <Input type="checkbox" id="dentureClaspUninsuredWAcres14k" name="dentureClaspUninsuredWAcres14k"   onChange={handleChange}/>      
                </FormGroup>
                <FormGroup check inline>
                    <Label check for="dentureClaspUninsuredComboGP">⑩ コンビネーション金パラ: </Label> &nbsp;&nbsp;
                    <Input type="checkbox" id="dentureClaspUninsuredComboGP" name="dentureClaspUninsuredComboGP"   onChange={handleChange}/>      
                </FormGroup>
                <FormGroup check inline>
                    <Label check for="dentureClaspUninsuredComboCobalt">⑪ コンビネーションコバルト: </Label> &nbsp;&nbsp;
                    <Input type="checkbox" id="dentureClaspUninsuredComboCobalt" name="dentureClaspUninsuredComboCobalt"   onChange={handleChange}/>      
                </FormGroup>
                <FormGroup check inline>
                    <Label check for="dentureClaspUninsuredkerata">⑫ ケラター: </Label> &nbsp;&nbsp;
                    <Input type="checkbox" id="dentureClaspUninsuredKerata" name="dentureClaspUninsuredKerata"   onChange={handleChange}/>      
                </FormGroup>
                <FormGroup check inline>
                    <Label check for="dentureClaspUninsuredBA">⑬ バックアクション: </Label> &nbsp;&nbsp;
                    <Input type="checkbox" id="dentureClaspUninsuredBA" name="dentureClaspUninsuredBA"   onChange={handleChange}/>      
                </FormGroup>
                <FormGroup check inline>
                    <Label check for="dentureClaspUninsuredRBA">⑭ リバースバックアクション: </Label> &nbsp;&nbsp;
                    <Input type="checkbox" id="dentureClaspUninsuredRBA" name="dentureClaspUninsuredRBA"   onChange={handleChange}/>      
                </FormGroup>
                <FormGroup check inline>
                    <Label check for="dentureClaspUninsuredHAH">⑮ ハーフアンドハーフ: </Label> &nbsp;&nbsp;
                    <Input type="checkbox" id="dentureClaspUninsuredHAH" name="dentureClaspUninsuredHAH"   onChange={handleChange}/>      
                </FormGroup>
                <FormGroup check inline>
                    <Label check for="dentureClaspUninsuredRing">⑯ リング: </Label> &nbsp;&nbsp;
                    <Input type="checkbox" id="dentureClaspUninsuredRing" name="dentureClaspUninsuredRing"   onChange={handleChange}/>      
                </FormGroup>
                <FormGroup check inline>
                    <Label check for="dentureClaspUninsuredHP">⑰ ヘアピン: </Label> &nbsp;&nbsp;
                    <Input type="checkbox" id="dentureClaspUninsuredHP" name="dentureClaspUninsuredHP"   onChange={handleChange}/>      
                </FormGroup>
                <FormGroup check inline>
                    <Label check for="dentureClaspUninsuredRPI">⑱ RPI: </Label> &nbsp;&nbsp;
                    <Input type="checkbox" id="dentureClaspUninsuredRPI" name="dentureClaspUninsuredRPI"   onChange={handleChange}/>      
                </FormGroup>
                <FormGroup check inline>
                    <Label check for="dentureClaspUninsuredRoach">⑲ Roach: </Label> &nbsp;&nbsp;
                    <Input type="checkbox" id="dentureClaspUninsuredRoach" name="dentureClaspUninsuredRoach"   onChange={handleChange}/>      
                </FormGroup>
      </div>
    } 
    </FormGroup>
  )
}

export default Denture;