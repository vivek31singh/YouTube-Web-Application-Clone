import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/layout/Header";
import Sidebar from "./components/layout/Sidebar";
import Home from "./components/pages/Home";
import SignIn from "./auth/SignIn";
import SignUp from "./auth/SignUp";
import {ApolloClient, InMemoryCache, ApolloProvider} from "@apollo/client"

function App() {

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri:"http://localhost:4000/graphql"
  })

  return (
    <div className="App">
      <ApolloProvider client={client}>
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

        <Route path="/SignIn" element={ <SignIn/>}/>
        <Route path="/SignUp" element={ <SignUp/>}/>
        </Routes>
      </Router>
      </ApolloProvider>
    </div>
  );
}

export default App;
