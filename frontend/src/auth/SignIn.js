import React, { useState, useEffect } from "react";
import "./SignIn.css";

import { PiUserCircleFill } from "react-icons/pi";
import GoogleIcon from "../assets/google_icon.png";

function SignIn() {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const [emailOrMobile, setEmailOrMobile] = useState("");
  const [password, setPassword] = useState("");
  const [showPasswordInput, setShowPasswordInput] = useState(false);

  const handleNext = () => {
    // Add any validation logic here before proceeding to the password input
    setShowPasswordInput(true);

    // Update the URL to indicate the change
    window.history.pushState({ showPasswordInput: true }, "", "/password");
  };

  const handleSubmit = () => {
    // Add logic to handle submission of email/phone and password
    console.log("Email or Mobile:", emailOrMobile);
    console.log("Password:", password);
  };

  const handleBack = () => {
    // Go back to the email/phone input
    setShowPasswordInput(false);

    // Update the URL to indicate the change
    window.history.pushState({ showPasswordInput: false }, "", "/");
  };

  useEffect(() => {
    // Handle the popstate event to update the UI based on the browser navigation
    const handlePopState = (event) => {
      setShowPasswordInput(event.state?.showPasswordInput || false);
    };

    window.addEventListener("popstate", handlePopState);

    // Cleanup: Remove event listener
    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  return (
    <div className="signin">
      <div className="signin__sub">
        {showPasswordInput ? (
          <div className="password-input">
            <img src={GoogleIcon} alt="Google"></img>
            <div className="signup__heading">
              <h2>Welcome</h2>
              <div className="signin__welcome__user">
                <PiUserCircleFill className="signin__welcome__user__icon" />
                <p>example123@gmail.com</p>
              </div>
            </div>
            <div className="signup__fields">
              {" "}
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="signup__texts">
              <label>
                <input
                  type="checkbox"
                  checked={showPassword}
                  onChange={toggleShowPassword}
                />
                Show Password
              </label>
            </div>
            <div className="signin__forgotpass">
              <p>Forgot password?</p>
            </div>
            <div className="signup__buttons">
              <button className="signup__back__btns" onClick={handleBack}>
                Back
              </button>
              <button className="signup__submit__btns" onClick={handleSubmit}>
                Submit
              </button>
            </div>
          </div>
        ) : (
          <div className="email-phone-input">
            <img src={GoogleIcon} alt="Google"></img>
            <div className="signup__heading">
              <h2>Sign in</h2>
              <h5>to continue to YouTube</h5>
            </div>
            <div className="signup__fields">
              <input
                type="text"
                placeholder="Email or phone"
                value={emailOrMobile}
                onChange={(e) => setEmailOrMobile(e.target.value)}
              />
            </div>
            <div className="signup__texts">
              <p>Forgot email?</p>
            </div>
            <div className="signin__texts">
              <p className="signin__text__one">
                Not your computer? Use Guest mode to sign in privately.
              </p>
              <p className="signin__text__two">
                Learn more about using Guest mode
              </p>
            </div>
            <div className="signup__buttons">
              <button className="signup__submit__btns" onClick={handleNext}>
                Next
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="signup__footer">
        <p>English (United States)</p>
        <div className="signup__footer__sub">
          <p>Help</p>
          <p>Privacy</p>
          <p>Terms</p>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
