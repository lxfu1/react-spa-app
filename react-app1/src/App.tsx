import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

function Home() {
  return <span>Home1</span>;
}

const About = () => {
  return <span>About1</span>;
};
function App() {
  return (
    <Router>
      <div className="container">
        <div className="menu">
          <Link to="/react1">Home</Link>
          <Link to="/react1/about">About</Link>
        </div>
        <div className="content">
          <Routes>
            <Route path="/react1/about" element={<About />}></Route>
            <Route path="/react1" element={<Home />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
