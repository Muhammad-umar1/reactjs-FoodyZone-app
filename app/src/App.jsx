import { useState } from "react";
import bgImage from "./assets/jimmy-dean-Yn0l7uwBrpw-unsplash-1.png";
import "./App.css";
import { Navbar, Main } from "./components";

function App() {
  return (
    <div
    // style={{ backgroundImage: `url(${bgImage})` }}
    >
      <Navbar />
      <Main />
    </div>
  );
}

export default App;
