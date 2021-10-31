import React from 'react';
import './App.css';

import {Header} from "./components/Header/Header";
import {Program} from "./components/Program/Program";
import {Started} from "./components/Started/Started";
import {Footer} from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
        <Header />
        <Program />
        <Started />
        <Footer />
    </div>
  );
}

export default App;
