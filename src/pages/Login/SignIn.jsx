import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [inputId, setInputId] = useState("");
  const [inputPassword, setIsPassword] = useState("");

  const navigate = useNavigate();

  const checkId = () => {
    if (inputId === "jaewon" && inputPassword === "123123123") {
      navigate("/home");
    } else if (inputId === "seonghyun" && inputPassword === "123123123") {
      navigate("/home");
    } else {
      alert("아이디 또는 비밀번호가 틀렸습니다.");
    }
  };

  return (
    <div className="sign-in">
      <div className="sign-in__logo-container">
        <div className="sign-in__logo-container__logo-box">
          <div className="sign-in__logo-container__logo-box__plan">PLAN</div>
          <div className="sign-in__logo-container__logo-box__b">B</div>
        </div>
      </div>
      <div className="sign-in__login-container">
        <div className="sign-in__login-container__login-box">
          <div className="sign-in__login-container__login-box_title">LOGIN</div>
          <input
            className="sign-in__login-container__login-box_id-input"
            type="text"
            placeholder="ID"
            value={inputId}
            onChange={(e) => {
              setInputId(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                checkId();
              }
            }}
          />
          <input
            className="sign-in__login-container__login-box_password-input"
            type="text"
            placeholder="PASSWORD"
            value={inputPassword}
            onChange={(e) => {
              setIsPassword(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                checkId();
              }
            }}
          />
          <div
            onClick={() => checkId()}
            className="sign-in__login-container__login-box_login-btn"
          >
            로그인
          </div>
          <div className="sign-in__login-container__login-box__finds">
            <div>FIND ID</div>
            <div>FIND PASSWORD</div>
          </div>
          <div className="sign-in__login-container__login-box__sign-up-btn">
            SIGN UP
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
