import logo from "./logo.svg";
import { NestedModal, ModalChild } from "nested-modal";

import { useState } from "react";

function App() {
  const [currentOpenedModal, setCurrentOpenedModal] = useState("first-modal");
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <NestedModal
          currentOpenedModal={currentOpenedModal}
          setCurrentOpenedModal={setCurrentOpenedModal}
        >
          <ModalChild
            id="first-modal"
            onClose={async () => {
              if (window.confirm("Are you sure you want to close the first?")) {
                return true;
              }
              return false;
            }}
          >
            <>
              ModalChild content
              <button onClick={() => setCurrentOpenedModal("second-modal")}>
                asd
              </button>
            </>
          </ModalChild>
          <ModalChild id="second-modal">
            <button onClick={() => setCurrentOpenedModal("10th-modal")}>
              asd
            </button>
          </ModalChild>
          <ModalChild id="3d-modal">ModalChild content 2</ModalChild>
          <ModalChild id="4th-modal">ModalChild content 2</ModalChild>
          <ModalChild id="5th-modal">ModalChild content 2</ModalChild>
          <ModalChild id="6th-modal">ModalChild content 2</ModalChild>
          <ModalChild id="7th-modal">ModalChild content 2</ModalChild>
          <ModalChild
            id="8th-modal"
            onClose={async () => {
              if (
                window.confirm("Are you sure you want to close the 8th modal?")
              ) {
                return true;
              }
              return false;
            }}
          >
            ModalChild content 2
          </ModalChild>
          <ModalChild
            id="9th-modal"
            onClose={async () => {
              if (
                window.confirm("Are you sure you want to close the 9th modal?")
              ) {
                return true;
              }
              return false;
            }}
          >
            ModalChild content 2
          </ModalChild>
          <ModalChild
            id="10th-modal"
            onClose={async () => {
              if (
                window.confirm("Are you sure you want to close the last modal?")
              ) {
                return true;
              }
              return false;
            }}
          >
            ModalChild content 2222
          </ModalChild>
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
