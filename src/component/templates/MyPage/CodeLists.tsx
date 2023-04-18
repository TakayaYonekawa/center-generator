import React, { useEffect, useState } from "react";
import { Button,  ListGroup,  } from "react-bootstrap";
import { Link } from "react-router-dom";
import { db, useAuth } from "../../../firebase";
import { useDispatch } from "react-redux";
import {deleteList} from "../../../redux/firebase/buttonSlice"

function CodeLists() {
  const dispatch = useDispatch();
  const [CodeLists, setCodeLists] = useState<any>([]);
  const currentUser = useAuth();

  useEffect(() => {
    db.collection("save-code").onSnapshot((snapshot) => {
      setCodeLists(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  return (
    <div className="mb-5">
      <ListGroup as="ol" numbered>
        {CodeLists.filter((list: any) => currentUser.uid === list.uid).map(
          (codeList: any) => (
            <ListGroup.Item
              as="li"
              key={codeList.id}
              className="position-relative col-lg-8 mx-lg-auto"
            >
              <Link to={`/save-code/${codeList.id}`}>保存コード</Link>
              <Button
                variant="secondary"
                size="sm"
                className="position-absolute"
                onClick={() => {dispatch(deleteList(codeList.id))}}
                style={{
                  top: "50%",
                  right: "10px",
                  transform: "translateY(-50%)",
                }}
              >
                削除
              </Button>{" "}
            </ListGroup.Item>
          )
        )}
      </ListGroup>
    </div>
  );
}

export default CodeLists;
