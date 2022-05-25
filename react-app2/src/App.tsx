import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Home() {
  return <span>Home2</span>;
}

const About = () => {
  return <span>About2</span>;
};
function App() {
  return (
    <Router>
      <div className="container">
        <div className="menu">
          <Link to="/react2">Home</Link>
          <Link to="/react2/about">About</Link>
        </div>
        <div className="content">
          <Routes>
            <Route path="/react2/about" element={<About />}></Route>
            <Route path="/react2" element={<Home />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
