import React from 'react'
import { FormGroup, Label, Input } from 'reactstrap'

function Implant({ handleChange, implantType, implantMaker }) {
  return (
  <div>
    <FormGroup>
      <Label for="implantType">インプラント</Label>
        <Input type="select" name="implantType" value={implantType} onChange={handleChange} >
            <option>なし</option>  
            <option>サージカルガイドプレート</option>      
            <option>各個トレー</option>
            <option>インプラントTF</option>      
            <option>インプラントset</option>
        </Input>
    </FormGroup>
    {
      implantType !== "サージカルガイドプレート" &&  implantType !== "" &&
      <div>
        <FormGroup>
          <Label for="implantMaker">インプラント メーカー</Label>
            <Input type="select" name="implantMaker" value={implantMaker} onChange={handleChange} >
                <option>なし</option>  
                <option>ノーベル</option>      
                <option>カムログ</option>
                <option>アンキロス</option>      
                <option>ストローマン</option>
                <option>バイオメット</option>
                <option>京セラ</option>
                <option>その他30種類以上</option>
            </Input>
        </FormGroup>   
      </div>
    }
  </div>
  )
}

export default Implant;