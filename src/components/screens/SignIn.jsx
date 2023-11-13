import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signIn, setAuthenticated } from "../../redux/actions/authAction";
import Image from "../../assets/images/illustration.png";
import SocialMedia from "./SocialMedia";

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    dispatch(signIn());
    dispatch(setAuthenticated(true));
    localStorage.setItem("auth", "true");
    navigate("/home");
  };
  const isButtonDisabled = !username || !password;

  return (
    <>
      <div className="mainContainer wrapper">
        <div className="rightContainer">
          <h2 className="head">Sign In</h2>
          <span className="right-span">
            New User ? <Link>Create an account</Link>
          </span>
          <div>
            <input
              type="text"
              placeholder="Username"
              className="login-input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              className="login-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="checkbox-div">
            <input type="checkbox" id="keepSignedIn" className="checkbox" />
            <label htmlFor="keepSignedIn" className="label">
              Keep me signed in
            </label>
          </div>
          <button
            className={`button ${isButtonDisabled ? "disabled-button" : ""}`}
            onClick={handleSignIn}
            disabled={isButtonDisabled}
          >
            Sign In
          </button>
          <div className="footer-signin">
            <div className="line">
              <span className="line-cls"></span>
              <span className="linenme">Or Sign In With</span>
              <span className="line-cls"></span>
            </div>
            <div className="social-sign">
              <SocialMedia />
            </div>
          </div>
        </div>
        <div className="leftContainer">
          <img src={Image} alt="" />
        </div>
      </div>
    </>
  );
};

export default SignIn;
