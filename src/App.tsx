import React from 'react';
import './App.css';

import {Program} from "./components/Program/Program";
import {Started} from "./components/Started/Started";
import {Footer} from "./components/Footer/Footer";
import {Header} from "./components/Header/Header";
import About from "./components/About/About";
import Lesson from "./components/Lesson/Lesson";
import {Platform} from "./components/Platform";
import {Teacher} from "./components/Teacher/Teacher";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Lesson />
      <Platform />
      <Teacher />
    </div>
  );
}

export default App;
