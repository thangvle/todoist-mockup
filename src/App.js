import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./layout/header";
import { Content } from "./layout/content";
function App() {
  return (
    <div className="App">
      <Header />
      <Content />
    </div>
  );
}

export default App;
