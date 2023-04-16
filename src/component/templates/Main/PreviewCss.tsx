import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store'

function PreviewCss() {
  const {rangeVals,rangeVals02,submitText03,submitText04} = useSelector((state: RootState) => state.input);

  return (
    <div className="col-10 col-md-5">
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
  )
}

export default PreviewCss