import React, { useState, useEffect } from "react";
import "./SignIn.css";

function SignIn() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [showPasswordInput, setShowPasswordInput] = useState(false);

  const handleNext = () => {
    // Add any validation logic here before proceeding to the password input
    setShowPasswordInput(true);

    // Update the URL to indicate the change
    window.history.pushState({ showPasswordInput: true }, "", "/password");
  };

  const handleSubmit = () => {
    // Add logic to handle submission of email, phone, and password
    console.log("Email:", email);
    console.log("Phone:", phone);
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
            <h2>Enter Password</h2>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleSubmit}>Submit</button>
            <button onClick={handleBack}>Back</button>
          </div>
        ) : (
          <div className="email-phone-input">
            <h2>Enter Email and Phone</h2>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Phone:</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <button onClick={handleNext}>Next</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default SignIn;