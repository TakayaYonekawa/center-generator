import React, { useEffect, useState } from "react";
import SaveCss from "../templates/SaveCode/SaveCss";
import SaveHtml from "../templates/SaveCode/SaveHtml";
import { useParams } from "react-router-dom";
import { db } from "../../firebase";
import ToMyPage from "../parts/Bottons/ToLists";

function SaveCode() {
  const { savePageId } = useParams();
  const [currentCode, setCurrentCode] = useState<any>([]);

  useEffect(() => {
    db.collection("save-code").onSnapshot((snapshot) => {
      setCurrentCode(
        snapshot.docs
          .map((doc) => doc.data())
          .filter((code: any) => savePageId === code.id)
      );
    });
    console.log(currentCode);
  }, []);

  return (
    <>
      {currentCode.map((codeDetail: any) => (
        <section key={codeDetail.id} className="container m-auto mt-5 mb-5 gap-3 d-flex flex-wrap justify-content-center ">
          <SaveHtml {...codeDetail} />
          <SaveCss {...codeDetail} />
        </section>
      ))}

      <div className="text-center mb-5">
        <ToMyPage />
      </div>
    </>
  );
}

export default SaveCode;
