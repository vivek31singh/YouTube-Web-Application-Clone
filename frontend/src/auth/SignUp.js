import React, { useState, useEffect } from "react";
import "./SignUp.css";
import GoogleIcon from "../assets/google_icon.png";
import { useMutation, gql } from "@apollo/client";

const CREATE_NEW_USER = gql`
  mutation createUser($input: createUserInput!) {
    createUser(input: $input) {
      email
      phoneNumber
      password
      firstName
      lastName
      dob
      gender
    }
  }
`;

function SignUp() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    birthMonth: "",
    birthDay: "",
    birthYear: "",
    gender: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  const [createUser, { data ,error}] = useMutation(CREATE_NEW_USER);
  const [currentStep, setCurrentStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleNext = () => {
    // Add validation logic for each step if needed
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const {
    firstName,
    lastName,
    birthMonth,
    birthDay,
    birthYear,
    dob,
    gender,
    email,
    phoneNumber,
    password,
    confirmPassword,
  } = formData;

  const handleSubmit = () => {
    createUser({
      variables: {
        input: {
          email,
          phoneNumber: parseInt(phoneNumber),
          password,
          firstName,
          lastName,
          dob,
          gender,
        },
      },
    });
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prevStep) => prevStep - 1);
    }
  };

  useEffect(() => {
    // Handle the popstate event to update the step based on the browser navigation
    const handlePopState = () => {
      const hashStep = parseInt(window.location.hash.replace("#step", ""), 10);
      if (!isNaN(hashStep)) {
        setCurrentStep(hashStep);
      }
    };

    window.addEventListener("popstate", handlePopState);

    // Cleanup: Remove event listener
    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  useEffect(() => {
    // Update the URL hash to indicate the current step
    window.history.pushState(null, null, `#step${currentStep}`);
  }, [currentStep]);

  const handleChange = (field, value) => {
    if (field === "phoneNumber") {
      // Validate that the entered value is a number
      if (!isNaN(value)) {
        setFormData((prevData) => ({
          ...prevData,
          [field]: value,
        }));
      }
    } else if (
      field === "birthMonth" ||
      field === "birthDay" ||
      field === "birthYear"
    ) {
      const updatedDob = `${formData.birthMonth}-${formData.birthDay}-${
        field === "birthYear" ? value : formData.birthYear
      }`;
      setFormData((prevData) => ({
        ...prevData,
        dob: updatedDob,
        [field]: value,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [field]: value,
      }));
    }
  };
console.log(data ,error);
  return (
    <div className="signup">
      <div className="signup__sub">
        {currentStep === 1 && (
          <div className="signup-step">
            <img src={GoogleIcon} alt="Google"></img>
            <div className="signup__heading">
              <h2>Create a Google Account</h2>
              <h5>Enter your name</h5>
            </div>
            <div className="signup__fields">
              <input
                type="text"
                placeholder="First name"
                value={firstName}
                onChange={(e) => handleChange("firstName", e.target.value)}
              />
              <input
                type="text"
                placeholder="Last name (optional)"
                value={lastName}
                onChange={(e) => handleChange("lastName", e.target.value)}
              />
            </div>
            <div className="signup__buttons">
              {" "}
              <button className="signup__submit__btns" onClick={handleNext}>
                Next
              </button>
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div className="signup-step">
            <img src={GoogleIcon} alt="Google"></img>
            <div className="signup__heading">
              <h2>Basic information</h2>
              <h5>Enter your birthday and gender</h5>
            </div>
            <div className="signup__fields">
              <div className="dob-input">
                <div className="dob-input-select">
                  {" "}
                  <select
                    value={birthMonth}
                    onChange={(e) => handleChange("birthMonth", e.target.value)}
                  >
                    <option value="" disabled>
                      Month
                    </option>
                    <option value="01">January</option>
                    <option value="02">February</option>
                    <option value="03">March</option>
                    <option value="04">April</option>
                    <option value="05">May</option>
                    <option value="06">June</option>
                    <option value="07">July</option>
                    <option value="08">August</option>
                    <option value="09">September</option>
                    <option value="10">October</option>
                    <option value="11">November</option>
                    <option value="12">December</option>
                  </select>
                </div>

                <input
                  type="number"
                  placeholder="Day"
                  value={birthDay}
                  onChange={(e) => handleChange("birthDay", e.target.value)}
                />
                <input
                  type="number"
                  placeholder="Year"
                  value={birthYear}
                  onChange={(e) => handleChange("birthYear", e.target.value)}
                />
              </div>
              <div className="gender-input">
                <div className="gender-input-select">
                  {" "}
                  <select
                    value={formData.gender}
                    onChange={(e) => handleChange("gender", e.target.value)}
                  >
                    <option value="" disabled>
                      Gender
                    </option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Rather not say</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="signup__texts">
              <p>Why we ask for birthday and gender</p>
            </div>
            <div className="signup__buttons">
              {" "}
              <button className="signup__back__btns" onClick={handleBack}>
                Back
              </button>
              <button className="signup__submit__btns" onClick={handleNext}>
                Next
              </button>
            </div>
          </div>
        )}

        {currentStep === 3 && (
          <div className="signup-step">
            <img src={GoogleIcon} alt="Google"></img>
            <div className="signup__heading">
              <h2>Personal information</h2>
              <h5>
                Enter the email address and phone number you want to use for
                your Google Account
              </h5>
            </div>
            <div className="signup__fields">
              {" "}
              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => handleChange("email", e.target.value)}
              />
              <input
                type="number"
                placeholder="phone number"
                value={phoneNumber}
                onChange={(e) => handleChange("phoneNumber", e.target.value)}
              />
            </div>
            <div className="signup__buttons">
              {" "}
              <button className="signup__back__btns" onClick={handleBack}>
                Back
              </button>
              <button className="signup__submit__btns" onClick={handleNext}>
                Next
              </button>
            </div>
          </div>
        )}

        {currentStep === 4 && (
          <div className="signup-step">
            <img src={GoogleIcon} alt="Google"></img>
            <div className="signup__heading">
              <h2>Create a strong password</h2>
              <h5>
                Create a strong password with a mix of letters, numbers and
                symbols
              </h5>
            </div>
            <div className="signup__fields">
              {" "}
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => handleChange("password", e.target.value)}
              />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Confirm"
                value={confirmPassword}
                onChange={(e) =>
                  handleChange("confirmPassword", e.target.value)
                }
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
            <div className="signup__buttons">
              {" "}
              <button className="signup__back__btns" onClick={handleBack}>
                Back
              </button>
              <button className="signup__submit__btns" onClick={handleSubmit}>
                Submit
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

export default SignUp;
