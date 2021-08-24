import React from "react";
import { GlobalStyles } from "./components/GlobalStyles";
import Home from "./pages/Home";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Header />
      <Home />
    </div>
  );
}

export default App;
