import React from "react";
import {  DropdownButton, Dropdown } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../firebase";
import { MdAccountCircle } from "react-icons/md";
import { IconContext } from "react-icons";
import GoogleLogin from "../../parts/Bottons/GoogleLogin";
import { Link } from "react-router-dom";

function Header() {
  const [user] = useAuthState(auth as any);

  return (
    <header className="mb-4 py-4 bg-white">
      <div className="container d-flex justify-content-between align-items-center">
        <h1 className="header-ttl"><Link to="/">テキスト真ん中君</Link></h1>
        {user ? (
          <div className="d-flex align-items-center">
            <DropdownButton
              variant="secondary"
              id="dropdown-basic-button"
              title={
                <IconContext.Provider value={{ size: "30px" }}>
                  <MdAccountCircle />
                  <span className="align-middle">メニュー</span>
                </IconContext.Provider>
              }
            >
              <Dropdown.Item
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = '/';
                  auth.signOut();
                }}
              >
                ログアウト
              </Dropdown.Item>
              <Dropdown.Item href="#">
                <Link to="/mypage">マイページ</Link>
              </Dropdown.Item>
            </DropdownButton>
          </div>
        ) : (
          <GoogleLogin />
        )}
      </div>
    </header>
  );
}

export default Header;
