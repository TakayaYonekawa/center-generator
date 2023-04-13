import React from "react";
import InputArea from "../templates/Main/InputArea";
import PreviewArea from "../templates/Main/PreviewArea";
import PreviewHtml from "../templates/Main/PreviewHtml";
import PreviewCss from "../templates/Main/PreviewCss";
import SaveBtn from "../templates/Main/SaveBtn";

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

      <SaveBtn/>
    </>
  );
}

export default Main;
