import React from 'react'
import { FormGroup,Label,Input } from 'reactstrap';

function Telescope({ telescope,telescopeMaterial,telescopeShade, handleChange }) {
  return (
    <FormGroup>
    <Label for="telescope">テレスコープ</Label>
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
        </Input>
        <Label for="telescopeShade">シェード選択</Label>
        <Input type="select" name="telescopeShade" value={telescopeShade} onChange={handleChange} required>
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

export default Telescope;