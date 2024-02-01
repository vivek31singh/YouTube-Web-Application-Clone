import React, { useState, useEffect } from "react";
import "./SignUp.css";
import axios from "axios";
import {useMutation, gql} from "@apollo/client";

const CREATE_NEW_USER = gql`

mutation CREATE_NEW_USER($input: createUserInput!){
  createUser(input: $input) {
     email
  phoneNumber
  password
  firstName
  lastName
  dob
  gender
  username
  }
}
`;


function SignUp() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    gender: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  
  const [createUser, { data }] = useMutation(CREATE_NEW_USER);
  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    // Add validation logic for each step if needed
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handleSubmit = async () => {
    try {
      // Use the createUser mutation function to send the request
      const result = await createUser({
        variables: { input: formData },
      });

      // Handle the result, which includes the data returned from the server
      console.log(result.data);

      // You can update your state or perform other actions based on the result
    } catch (error) {
      // Handle any errors that occur during the mutation
      console.error(error);
    }
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
    window.history.pushState(null, null,` #step${currentStep}`);
  }, [currentStep]);

  const handleChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const {
    firstName,
    lastName,
    dateOfBirth,
    gender,
    email,
    phone,
    password,
    confirmPassword,
  } = formData;


  console.log(formData);
  return (
    <div className="signup">
      <div className="signup__sub">
        {currentStep === 1 && (
          <div className="signup-step">
            <h2>Step 1: Enter First Name and Last Name</h2>
            <label>First Name:</label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => handleChange("firstName", e.target.value)}
            />
            <label>Last Name:</label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => handleChange("lastName", e.target.value)}
            />
            <button onClick={handleNext}>Next</button>
          </div>
        )}

        {currentStep === 2 && (
          <div className="signup-step">
            <h2>Step 2: Enter Date of Birth and Gender</h2>
            <label>Date of Birth:</label>
            <input
              type="date"
              value={dateOfBirth}
              onChange={(e) => handleChange("dateOfBirth", e.target.value)}
            />
            <label>Gender:</label>
            <input
              type="text"
              value={gender}
              onChange={(e) => handleChange("gender", e.target.value)}
            />
            <button onClick={handleBack}>Back</button>
            <button onClick={handleNext}>Next</button>
          </div>
        )}

        {currentStep === 3 && (
          <div className="signup-step">
            <h2>Step 3: Enter Email and Phone Number</h2>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => handleChange("email", e.target.value)}
            />
            <label>Phone:</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => handleChange("phone", e.target.value)}
            />
            <button onClick={handleBack}>Back</button>
            <button onClick={handleNext}>Next</button>
          </div>
        )}

        {currentStep === 4 && (
          <div className="signup-step">
            <h2>Step 4: Enter Password and Confirm Password</h2>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => handleChange("password", e.target.value)}
            />
            <label>Confirm Password:</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => handleChange("confirmPassword", e.target.value)}
            />
            <button onClick={handleBack}>Back</button>
            <button onClick={handleSubmit}>Submit</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default SignUp;