import React from 'react'
import { RootState, useSelector } from '../../../store';

function SaveHtml() {
    const {rangeVals05} = useSelector((state: RootState) => state.input);


  return (
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
  )
}

export default SaveHtml