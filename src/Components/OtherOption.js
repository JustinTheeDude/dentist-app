import React from 'react'
import { FormGroup, Label, Input, Button } from "reactstrap";
import { useHistory } from 'react-router-dom';

function OtherOption({ paymentType, otherOptionInsured, otherOptionUninsured,handleChange, id }) {

  const history = useHistory();

  return (
    <div>
    <FormGroup className="otherOption form-box">
    {
      paymentType === "保険" &&
      <div>
        <Label for="otherOptionInsured">その他 保険</Label>
          <Input type="select" name="otherOptionInsured"  value={otherOptionInsured} onChange={handleChange} required>
          　<option>なし</option>
            <option>根面板(金パラ)</option>      
            <option>根面板(銀合金)</option>
            <option>メタルコア</option>      
            <option>ファイバーポストコア</option>
          </Input>
      </div>
    }
    {
      paymentType === "自費" &&
      <div>
        <Label for="otherOptionUninsured">その他 自費</Label>
          <Input type="select" name="otherOptionUninsured" value={otherOptionUninsured} onChange={handleChange} required>
              <option>なし</option>    
              <option>TeC</option>      
          </Input>
      </div>
    }
    </FormGroup>
    {!id && <Button className="nav-btn"  onClick={() => history.push(`/form/delivery`)}>次</Button>}
    { !id && <Button className="nav-btn"  onClick={() => history.push(`/form/treatment`)}>別の注文を追加</Button>}
    {
      id ?
      <Button className="nav-btn"  onClick={() => history.push(`/form/${id}/confirm`)}>注文詳細</Button>
      :
      <Button className="nav-btn"  onClick={() => history.push(`/form/confirm`)}>注文詳細</Button>
    }
    </div>
  )
}
export default OtherOption;