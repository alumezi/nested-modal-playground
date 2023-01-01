import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import { NestedModal } from "nested-modal";

import { useState } from "react";

function App() {
  const [currentOpenedModal, setCurrentOpenedModal] = useState("first-modal");
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <NestedModal
          currentOpenedModal={currentOpenedModal}
          setCurrentOpenedModal={setCurrentOpenedModal}
          onClose={() => {}}
        >
          <div id="first-modal">
            Modal content
            <button onClick={() => setCurrentOpenedModal("second-modal")}>
              asd
            </button>
          </div>
          <div id="second-modal">Modal content 2</div>
        </NestedModal>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header>
    </div>
  );
}

export default App;
