import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Content from "./components/Content/Content";
import { useState } from "react";
import { Logo } from "./assets/Icons";
import LogoContainer from "./components/LogoContainer/LogoContainer";

function App() {
  const [showNavigation, setShowNavigation] = useState(true);

  const toggleNavigation = () => {
    setShowNavigation((prev) => !prev);
  };

  return (
    <div className="container">
      <Header toggleNavigation={toggleNavigation} />

      <div className="body">
        {showNavigation && (
          <div className={`sidebar-navigation ${showNavigation ? "open" : ""}`}>
            <div className="sidebar-header">
              <LogoContainer toggleNavigation={toggleNavigation} />
            </div>
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
