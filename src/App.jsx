import React, { Component } from "react";
import Home from "./Pages/Home";
import About from "./Pages/About";
import { BrowserRouter, Routes, Route } from "react-router";
import Contact from "./Pages/Contact";
import Error404 from "./Pages/Error404";

class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="*" element={<Error404/>} />
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
