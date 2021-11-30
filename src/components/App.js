import React from "react";
import Header from "./Header";
import About from "./About";
import Home from "./Home";
import Image from "./Image";
import Education from "./Education";
import Skills from "./Skills";
import Experience from "./Experience";
import { BrowserRouter, Route } from "react-router-dom";

const App = () => (
  <BrowserRouter>
    <div>
      <Header />
      <div className="main">
        <Image />
        <div className="main-content">
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/education" component={Education} />
          <Route path="/skills" component={Skills} />
          <Route path="/experience" component={Experience} />
        </div>
      </div>
    </div>
  </BrowserRouter>
);

export default App;
