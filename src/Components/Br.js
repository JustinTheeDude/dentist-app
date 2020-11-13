import React from 'react'
import { FormGroup,Label,Input, Button } from 'reactstrap';
import { useHistory } from 'react-router-dom';
function Br({ 
  paymentType,
  BrInvolution,
  BrInvolutionBT,
  BrMaterialInsured, 
  BrShadeInsured,
  BrMaterialUninsured, 
  BrShadeUninsured, 
  handleChange,
  id 
}) {
  const history = useHistory();
  return (
    <div>
      <h2><strong>Br</strong></h2>
        <FormGroup>
        <Label for="BrInvolution">対合</Label>
            <Input type="select" name="BrInvolution" value={BrInvolution} onChange={handleChange} required>
              　<option>Please Select one</option>
                <option>なし</option>
                <option>あり</option>     
              </Input>
            {
              BrInvolution === "あり" &&
              <div>
                <Label for="BrInvolutionBT">BT</Label>
                <Input type="select" name="BrInvolutionBT" value={BrInvolutionBT} onChange={handleChange} required>
                　<option>Please Select a choice</option>
                  <option>なし</option>
                  <option>あり</option>     
                </Input>
              </div> 
            }
          {
          paymentType === "保険" &&
          <div>
            <Label for="BrMaterialInsured">Br 保険</Label>
              <Input type="select" name="BrMaterialInsured" value={BrMaterialInsured} onChange={handleChange} required>
              　<option>なし</option>
                <option>Br BT(咬合床)</option>
                <option>金パラ</option>
                <option>銀合金</option>
                <option>14K</option>
                <option>高強度硬質レジン</option>         
              </Input><Label for="BrShadeInsured">Br シェード選択 保険</Label>
              <Input type="select" name="BrShadeInsured" value={BrShadeInsured} onChange={handleChange} required>
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
                    <Label for="BrShadeUninsured">Br シェード選択 自費</Label>
                        <Input type="select" name="BrShadeUninsured" value={BrShadeUninsured} onChange={handleChange} required>
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
       { !id && <Button className="nav-btn"  onClick={() => history.push(`/form/delivery-time`)}>finish </Button>}
        { !id && <Button className="nav-btn"  onClick={() => history.push(`/form/treatment`)}>add order</Button> }
        {
          id ?
          <Button className="nav-btn"  onClick={() => history.push(`/form/${id}/confirm`)}>check order</Button>
          :
          <Button className="nav-btn"  onClick={() => history.push(`/form/confirm`)}>check order</Button>
        }
    </div>
  )
}

export default Br;