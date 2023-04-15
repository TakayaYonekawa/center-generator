import React from 'react'

function SaveCss({bgColor, color, height,width}:any) {

  return (
    <div className="previewCodeContent">
    <p>CSSプリビュー</p>
    <div className="previewCss">

      .box{'{'}<br/>
        width: {width}px;<br/>
        height: {height}px;<br/>
        background-color: #{bgColor};<br/>
        display: flex;<br/>
        align-items: center;<br/>
        justify-content:center;<br/>

        {'}'}<br/>
        <br/>
      .box .innerText{'{'}<br/>
        font-size: 16px;<br/>
        color: #{color};<br/>
        {'}'}<br/>

    </div>
  </div>
  )
}

export default SaveCss