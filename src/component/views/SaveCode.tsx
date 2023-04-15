import React, { useEffect, useState } from "react";
import SaveCss from "../templates/SaveCode/SaveCss";
import SaveHtml from "../templates/SaveCode/SaveHtml";
import { useParams } from "react-router-dom";
import { db } from "../../firebase";
import ToMyPage from "../parts/Bottons/ToLists";

function SaveCode() {
  const { savePageId } = useParams();
  // const [allCodes, setAllCodes] = useState<any>([]);
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
        <section className=" previewCodeArea">
          <SaveHtml {...codeDetail} />
          <SaveCss {...codeDetail} />
        </section>
      ))}

      <div className="text-center mb-5">
        <ToMyPage/>
      </div>
    </>
  );
}

export default SaveCode;
