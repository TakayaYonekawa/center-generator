import React from 'react'

function SaveHtml({text}:any) {

  return (
    <div className="previewCodeContent">
    <p>HTMLプリビュー</p>
    <div className="previewHtml">
      &lt;div className="box"&gt;<br/>
      &lt;p className="innerText"&gt;<br/>
        <span className="previewHtmlText">{text}</span><br/>
      &lt;/p&gt;<br/>
      &lt;/div&gt;<br/>
    </div>
  </div>
  )
}

export default SaveHtml