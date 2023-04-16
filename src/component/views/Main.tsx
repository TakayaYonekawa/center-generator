import React from "react";
import InputArea from "../templates/Main/InputArea";
import PreviewArea from "../templates/Main/PreviewArea";
import PreviewHtml from "../templates/Main/PreviewHtml";
import PreviewCss from "../templates/Main/PreviewCss";
import SaveBtn from "../templates/Main/SaveBtn";

function Main() {
  return (
    <>
      <section className="container m-auto d-flex gap-3 flex-wrap justify-content-center  align-items-center ">
        <InputArea />
        <PreviewArea />
      </section>

      <section className="container m-auto mt-5 mb-5 gap-3 d-flex flex-wrap justify-content-center">
        <PreviewHtml />
        <PreviewCss />
      </section>

      <SaveBtn/>
    </>
  );
}

export default Main;
