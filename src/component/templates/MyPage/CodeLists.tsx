import React, { useEffect, useState } from "react";
import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { db } from "../../../firebase";

function CodeLists() {
  const [CodeLists, setCodeLists] = useState<any>([]);

  useEffect(() => {
    db.collection("save-code").onSnapshot((snapshot) => {
      setCodeLists(snapshot.docs.map((doc) => doc.data()));
    });
    
  }, []);

  return (
    <div className="mb-5">
      <ListGroup as="ol" numbered>
        {CodeLists.map((codeList:any) => (
        <ListGroup.Item as="li">
        <Link to="/" key={codeList.length}>保存コード</Link>
      </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}

export default CodeLists;
