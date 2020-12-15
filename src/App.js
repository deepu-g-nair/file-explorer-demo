import React from "react";
import Windowbar from "./components/Windowbar";
import Header from "./components/Header";
import Addressbar from "./components/Addressbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div>
      <Windowbar />
      <Header />
      <Addressbar />
      <Sidebar />
    </div>
  );
}

export default App;
