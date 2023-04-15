import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../../firebase";
import { Button, Card } from "react-bootstrap";
import GoogleLogin from "../../parts/Bottons/GoogleLogin";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";

function SaveBtn() {
  const {rangeVals, rangeVals02, rangeVals03, rangeVals04, rangeVals05} = useSelector((state:RootState) => state.input)
  const [user] = useAuthState(auth as any);
  const uid = auth.currentUser?.uid;

  
  

  const SaveCode = () => {
    const saveCollection = db.collection("save-code").doc();
    
    saveCollection.set({
      uid,
      id: saveCollection.id,
      bgColor: rangeVals03,
      color: rangeVals04,
      width: rangeVals,
      height: rangeVals02,
      text: rangeVals05,
    });

    alert('保存が完了しました。')
  };

  return (
    <div>
      <div className="mb-5 text-center">
        {user ? (
          <Button
            variant="primary"
            size="lg"
            onClick={() => {
              SaveCode();
            }}
          >
            保存する
          </Button>
        ) : (
          <>
            <Card style={{ width: "30rem", margin: "0 auto" }}>
              <Card.Body>
                <Card.Title>ログインするとコードを保存できます。</Card.Title>
                <GoogleLogin />
              </Card.Body>
            </Card>
          </>
        )}
      </div>
    </div>
  );
}

export default SaveBtn;
