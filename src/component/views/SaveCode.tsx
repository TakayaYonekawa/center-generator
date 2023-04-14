import React from "react";
import SaveCss from "../templates/SaveCode/SaveCss";
import SaveHtml from "../templates/SaveCode/SaveHtml";

function SaveCode() {
  return (
    <section className=" previewCodeArea">
      <SaveHtml />
      <SaveCss />
    </section>
  );
}

export default SaveCode;
