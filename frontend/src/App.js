import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/layout/Header";
import Sidebar from "./components/layout/Sidebar";
import Home from "./components/pages/Home";
import SignIn from "./auth/SignIn";
import SignUp from "./auth/SignUp";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Sidebar />
                <Home />
              </>
            }
          />
<<<<<<< HEAD
          <Route
            path="/signin"
            element={
              <>
                <SignIn />
              </>
            }
          />
          <Route
            path="/signup"
            element={
              <>
                <SignUp />
              </>
            }
          />
=======

        <Route path="/SignIn" element={ <SignIn/>}/>
        <Route path="/SignUp" element={ <SignUp/>}/>
>>>>>>> 44ded5cb4c05d0de47004864de4d29129a770d6e
        </Routes>
      </Router>
    </div>
  );
}

export default App;
