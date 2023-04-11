import React from "react";
import InputArea from "../templates/Main/InputArea";
import PreviewArea from "../templates/Main/PreviewArea";
import PreviewHtml from "../templates/Main/PreviewHtml";
import PreviewCss from "../templates/Main/PreviewCss";

function Main() {
  return (
    <>
      <section className="jsArea">
        <InputArea />
        <PreviewArea />
      </section>

      <section className=" previewCodeArea">
        <PreviewHtml />
        <PreviewCss />
      </section>
    </>
  );
}

export default Main;
