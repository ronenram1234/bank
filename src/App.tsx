import React from "react";
import "./App.css";
import Totals from "./components/Totals";
import Details from "./components/Details";

function App() {
  return (
    <div className="container" style={{ border: "3px solid red" }}>
      
        <img
          src="https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFua2luZyUyMHN2Z3xlbnwwfDB8MHx8fDA%3D"
          className="img-fluid"
          alt="Bank"
        />

        <Totals />
        <Details />
      
    </div>
  );
}

export default App;
