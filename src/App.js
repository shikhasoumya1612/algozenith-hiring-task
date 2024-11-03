import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Content from "./components/Content/Content";
import { useState } from "react";

function App() {
  const [showNavigation, setShowNavigation] = useState(true);

  return (
    <div className="container">
      <Header toggleNavigation={() => setShowNavigation((prev) => !prev)} />
      <div className="body">
        {showNavigation && (
          <div className="sidebar-navigation">
            <Navbar />
          </div>
        )}

        <div className={`content ${!showNavigation ? "full-width" : ""}`}>
          <Content />
        </div>
      </div>
    </div>
  );
}

export default App;
