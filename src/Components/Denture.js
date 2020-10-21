import React from 'react';
import  { FormGroup, Label, Input  } from 'reactstrap';

function Denture({ 
   paymentType, 
   dentureInsured, 
   dentureUninsured, 
   dentureArtificialInsured,
   dentureBarInsured,
   dentureFloorInsured,
   dentureClaspInsured,
   dentureOtherInsured,
   handleChange 
  }) {

  return (
    <FormGroup className="denture form-box">
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
      dentureInsured.includes("FD") && 
      <div>
      <Label for="dentureArtificialInsured">人工歯 保険</Label>
        <Input type="select" name="dentureArtificialInsured"  value={dentureArtificialInsured} onChange={handleChange} >
          <option>なし</option> 
          <option>レジン</option>
          <option>硬質レジン</option>
          <option>スルフォン</option>
          <option>陶器</option>
        </Input>
        <Label for="dentureBarInsured">バー 保険</Label>
        <Input type="select" name="dentureBarInsured"  value={dentureBarInsured} onChange={handleChange} >
          <option>なし</option> 
          <option>金パラ</option>
          <option>コバルト</option>
          <option>スルフォン</option>
        </Input>
        <Label for="dentureFloorInsured">床 保険</Label>
        <Input type="select" name="dentureFloorInsured"  value={dentureFloorInsured} onChange={handleChange} >
          <option>なし</option> 
          <option>レジン</option>
          <option>熱可塑性樹脂</option>
          <option>金属</option>
        </Input>
        <Label for="dentureClaspInsured">クラスプ 保険</Label>
        <Input type="select" name="dentureClaspInsured"  value={dentureClaspInsured} onChange={handleChange} >
          <option>なし</option> 
          <option>エーカース(金パラ)</option>
          <option>エーカース(コバルト)</option>
          <option>エーカース(14K)</option>
          <option>Wエーカース(金パラ)</option>
          <option>Wエーカース(コバルト)</option>
          <option>Wエーカース(14K)</option>
          <option>コンビネーション金パラ</option>
          <option>コンビネーションコバルト</option>
        </Input>
        <Label for="dentureOtherInsured">その他 保険</Label>
        <Input type="select" name="dentureOtherInsured"  value={dentureOtherInsured} onChange={handleChange} >
          <option>なし</option> 
          <option>ケラター</option>
        </Input>
      </div>
    }
    </FormGroup>
  )
}

export default Denture;
