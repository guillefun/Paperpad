import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import GNote from "./components/GNote";
import GNotePopup from "./components/GNotePopup";
import BurgerMenu from "./components/BurgerMenu";
class App extends React.Component {
  state = {
    shownote: false,
    popupmsg: "",
  };

  render() {
    const setShowNote = () => {
      this.setState({ shownote: !this.state.shownote });
    };
    const popupNote = (message) => {
      return <GNotePopup handlePop={() => setShowNote()} message={message} />;
    };
    return (
      <div className="App" id="outer-container">
        <BurgerMenu pageWrapId="page-wrap" container="outer-container" />
        <header className="App-header" id="page-wrap">
          <div className="tableContainer">
            <div className="popup-note">
              {this.state.shownote ? popupNote(this.state.popupmsg) : null}
            </div>
            <ul>
              <GNote message="Hola a todos" />
              <li
                onClick={() => {
                  this.setState({
                    shownote: true,
                    popupmsg:
                      "esto va a acabar estando dentro del propio GNote, vaya desastre de code",
                  });
                  console.log("w");
                }}
                className="note-li"
              >
                <GNote message="Hola a todos asddddddddasssssssssas asd   asdasd   asd sssssssssss" />
              </li>
              <li className="note-li">
                <GNote message="Hola a todos que tal estais aasas" />
              </li>
              <li className="note-li">
                <GNote message="Hola a todos" />
              </li>
              <li className="note-li">
                <GNote message="Hola a todos" />
              </li>
              <li className="note-li">
                <GNote message="Hola a todos" />
              </li>
              <li className="note-li">
                <GNote message="Hola a todos" />
              </li>
            </ul>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
