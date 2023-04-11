import './App.css';
import styled from 'styled-components';
import {  ChangeEvent, FormEvent, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/scss/style.scss'
import { Spinner } from 'react-bootstrap';
import Header from './component/templates/Header/Header';
import Footer from './component/templates/Footer/Footer';


function App() {
  var [rangeVals, setRangeVals] = useState('500');
  var [rangeVals02, setRangeVals02] = useState('500');
  var [rangeVals03, setRangeVals03] = useState('00ff7f');
  var [rangeVals04, setRangeVals04] = useState('333333');
  var [rangeVals05, setRangeVals05] = useState('テキストを変更しよう');

  var [submitText03, setSubmitText03] = useState('00ff7f');
  var [submitText04, setSubmitText04] = useState('333333');

  const [loading, setLoading] = useState(true);


const regex =  /^[0-9a-zA-Z]+$/;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const rangeVal = e.target.value;
    setRangeVals(rangeVal);

  }


  
  const handleChange02 = (e: ChangeEvent<HTMLInputElement>) => {
    const rangeVal02 = e.target.value;
    setRangeVals02(rangeVal02);
  }

  const handleEnter03 =  (e: { key: any; target: { value: any; }; }) => {
    if(e.key === "Enter"){
    const rangeVal03 = e.target.value;
    if(rangeVal03.length > 6){
      return;
    }
    setLoading(false);

    setTimeout(function(){
      setLoading(true);
      setSubmitText03(rangeVals03);
    },500);

      
    // setRangeVals03(rangeVal03);
    }

  }
  
  const handleEnter04 = (e: { key: string; target: { value: any; }; }) => {
    if(e.key === "Enter"){
    const rangeVal04 = e.target.value;
    if(rangeVal04.length > 6){
      return;
    }
    setLoading(false);

    setTimeout(function(){
      setLoading(true);
      setSubmitText04(rangeVals04);
    },500);
  }
}
  
  
  const handleChange05 = (e: FormEvent<HTMLTextAreaElement>) => {
    const rangeVal05 = (e.target as HTMLInputElement).value;
    if(rangeVal05.length > 30){
      return;
    }
    setRangeVals05(rangeVal05);
  }

  const hanldeSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(rangeVals03.length < 6 || rangeVals04.length < 6){
      alert('文字コードは6文字です。');
      return;
    } else if(!regex.test(rangeVals03) || !regex.test(rangeVals04) ){
      alert('半角英数字で書きましょう');
      return;

    }
    

  }

  
  const Box = styled.div`
  width:${rangeVals}px;
  height:${rangeVals02}px;
  background-color: #${submitText03};
  display: flex;
  align-items: center;
  justify-content:center;
  `
  const BoxText = styled.p`
  font-size: 16px;
  color: #${submitText04};
  `
  


  return (

    <>
{/* <GlobalStyle /> */}
<Header/>

<section className="jsArea">

    
<div className="inputArea">
  <div>
    Width:<input type="range" name="width" onChange={(e)=> handleChange(e)} className="rangeWidth" min='0' max='500' value={rangeVals}/>  <span className="rangeNo">{rangeVals}</span>px<br/>
  </div>
  <div>
    Height:<input type="range" name="height" onChange={(e)=> handleChange02(e)} className="rangeHeight" min='0' max='500' value={rangeVals02}/>  <span className="rangeNo">{rangeVals02}</span>px<br/>
  </div>
  <form onSubmit={(e) => hanldeSubmit(e)}>
  <div>
    背景色（16進）:#<input type="text" className="rangeBgColor" onChange={(e)=> setRangeVals03(e.target.value)} onKeyDown={() => handleEnter03}  value={rangeVals03}/> (enterで変更されます)
  </div>
  <div>
    文字の色（16進）:#<input type="text" className="rangeTextColor" onChange={(e)=> setRangeVals04(e.target.value)} onKeyDown={() => handleEnter04} value={rangeVals04}/> (enterで変更されます)
  </div>
  <input type="submit" className='hidden' value="" />

  </form>
  <div>
    テキスト（30字以内）:<br/><br/><textarea className="rangeText" onInput={(e)=> handleChange05(e)}  value={rangeVals05}></textarea>
  </div>
</div>


<div className='preview_area'>
  <div className='spinner_box'>
  { loading ? null : <Spinner className='js-spinner' animation='border'/> }
  </div>
  <Box>
    <BoxText>
        {rangeVals05}
    </BoxText>
  </Box>
</div>

</section>


<section className=" previewCodeArea">

    <div className="previewCodeContent">
      <p>HTMLプリビュー</p>
      <div className="previewHtml">

        &lt;div className="box"&gt;<br/>
        &lt;p className="innerText"&gt;<br/>
          <span className="previewHtmlText">{rangeVals05}</span><br/>
        &lt;/p&gt;<br/>
        &lt;/div&gt;<br/>

      </div>
    </div>
    <br/>

    <div className="previewCodeContent">
      <p>CSSプリビュー</p>
      <div className="previewCss">

        .box{'{'}<br/>
          width: {rangeVals}px;<br/>
          height: {rangeVals02}px;<br/>
          background-color: #{submitText03};<br/>
          display: flex;<br/>
          align-items: center;<br/>
          justify-content:center;<br/>
    
          {'}'}<br/>
          <br/>
        .box .innerText{'{'}<br/>
          font-size: 16px;<br/>
          color: #{submitText04};<br/>
          {'}'}<br/>

      </div>
    </div>
</section>


<Footer/>
</>


  );
}

export default App;
