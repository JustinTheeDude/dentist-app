import React from 'react'
import { FormGroup, Label, Input, Button } from 'reactstrap'
import { useHistory } from 'react-router-dom';
function Implant({ 
  handleChange, 
  implantType,
  implantMaterial, 
  implantTray,
  implantMaker, 
  implantMakerNobelOption,
  implantMakerCamlogOption,
  implantMakerAnkylosOption,
  implantMakerAstraTechOption,
  implantShade,
  id 
}) {
  const history = useHistory();
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
      implantType === "インプラントTF" || implantType === "インプラントset" ?
        <FormGroup>
          <Label for="implantMaterial">インプラントタイプ</Label>
            <Input type="select" name="implantMaterial" value={implantMaterial} onChange={handleChange} >
                <option>なし</option>  
                <option>スクリュー</option>      
                <option>セメント</option>
            </Input>
        </FormGroup>
        :
        null
    }
    {
      implantType !== "サージカルガイドプレート"  && implantType !==  "各個トレー"  && implantType !== "" ?
      <div>
        <FormGroup>
          <Label for="implantMaker">インプラント メーカー</Label>
            <Input type="select" name="implantMaker" value={implantMaker} onChange={handleChange} >
                <option>なし</option>  
                <option>ノーベル</option>      
                <option>カムログ</option>
                <option>アンキロス</option>      
                <option>ストローマン</option>
                <option>アストラテック</option>
                <option>バイオメット</option>
                <option>京セラ</option>
                <option>プローネマルク　(ノーベルバイオケア社)</option>  
                <option>POI インプラント</option>      
                <option>μ-one (ミューワン)</option>
                <option>AQBインプラント</option>      
                <option>ジンマー　・　バイオメットデンタル</option>
                <option>GC インプラント</option>
                <option>マイティスアローインプラント</option>
                <option>バイコンインプラント</option>
                <option>デンティウムインプラント</option>  
                <option>バイオホライスン</option>      
                <option>バイオテムインプラント</option>
                <option>オステムインプラント</option>      
                <option>Hiossenインプラント</option>
                <option>メガジェンインプラント</option>
                <option>Zシステムジルコニアインプラント</option>
                <option>インプラントダイレクト</option>
                <option>ヨシオカインプラント</option>      
                <option>ネオバイオテック</option>
                <option>エンドポア(innova)</option>
                <option>SPIインプラント</option>
                <option>トーメンメディカル社</option>
                <option>プロアクティブインプラント</option>
                <option>スウェーデン＆マルチナインプラント</option>
                <option>アルファタイトインプラント</option>
                <option>IAT  EXAインプラント</option>
                <option>その他</option>
            </Input>
        </FormGroup>   
      </div>
      :
      null
    }
    {
      implantMaker === "その他" &&
      <FormGroup>
        <Label for="implantMakerOther">Type the maker name</Label>
        <Input type="textarea" name="implantMakerOther" id="implantMakerOther" />
      </FormGroup>
    }
    {
      implantMaker === "ノーベル" &&
      <div>
      <FormGroup>
          <Label for="implantMakerNobelOption">ノーベル Option</Label>
            <Input type="select" name="implantMakerNobelOption" value={implantMakerNobelOption} onChange={handleChange} >
                <option>なし</option>  
                <option>3.0</option>      
                <option>NP</option>    
                <option>RP</option>
                <option>WP</option>
            </Input>
        </FormGroup>  
      </div>
    }
    {
      implantMaker === "カムログ" &&
      <div>
      <FormGroup>
          <Label for="implantMakerCamlogOption">カムログ Option</Label>
            <Input type="select" name="implantMakerCamlogOption" value={implantMakerCamlogOption} onChange={handleChange} >
                <option>なし</option>  
                <option>white: Φ3.3mm</option>      
                <option>yellow: Φ3.8mm</option>
                <option>red: Φ4.3mm</option>      
                <option>blue: Φ5.0mm</option>
                <option>green: Φ6.0mm</option>
            </Input>
        </FormGroup>  
      </div>
    }
    {
      implantMaker === "アンキロス" &&
      <div>
      <FormGroup>
          <Label for="implantMakerAnkylosOption">アンキロス Option</Label>
            <Input type="select" name="implantMakerAnkylosOption" value={implantMakerAnkylosOption} onChange={handleChange} >
                <option>なし</option>  
                <option>/C(旧タイプ)</option>      
                <option>/X(新タイプ)</option>
            </Input>
        </FormGroup>  
      </div>
    }
    {
      implantMaker === "アストラテック" &&
      <div>
      <FormGroup>
          <Label for="implantMakerAstraTechOption">アストラテック Option</Label>
            <Input type="select" name="implantMakerAstraTechOption" value={implantMakerAstraTechOption} onChange={handleChange} >
                <option>なし</option>  
                <option>イエロー</option>      
                <option>アクア</option>
                <option>ライラック</option>
            </Input>
        </FormGroup>  
      </div>
    }
    {
      implantType === "各個トレー" && 
      <div>
      <FormGroup>
          <Label for="implantTray">Type</Label>
            <Input type="select" name="implantTray" value={implantTray} onChange={handleChange} >
                <option>なし</option>  
                <option>Open</option>      
                <option>Close</option>
            </Input>
        </FormGroup> 
      </div>
    }
    <FormGroup>
      <Label for="implantShade">シェード選択</Label>
          <Input type="select" name="implantShade" value={implantShade} onChange={handleChange} required>
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
    </FormGroup>
    {!id && <Button className="nav-btn" onClick={() => history.push(`/form/delivery-time`)}>次</Button>}
    {!id && <Button className="nav-btn" variant="contained" onClick={() => history.push(`/form/treatment`)}>add order</Button>}
    {
      id ?
      <Button className="nav-btn"  onClick={() => history.push(`/form/${id}/confirm`)}>check order</Button>
      :
      <Button className="nav-btn"  onClick={() => history.push(`/form/confirm`)}>check order</Button>
    }
  </div>
  )
}

export default Implant;