import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function ToMyPage() {
  return (
    <Link to="/mypage" >
      <Button variant="primary">一覧に戻る</Button>
    </Link>
  );
}

export default ToMyPage;
