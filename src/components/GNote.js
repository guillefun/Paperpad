import React, { Component } from "react";
import "../assets/css/GNote.css";
import GNotePopup from "./GNotePopup";
export default class GNote extends Component {
  state = {
    focus: false,
    note: {},
  };
  popupNote() {
    return <GNotePopup message={this.props.message} />;
  }
  render() {
    const { focus, note } = this.state;
    const { updateOnly } = this.props;
    return (
      <div>
        <div className="note-paper">
          <div className="note-header">This is a note header</div>
          <p className="note-text">{this.props.message}</p>
        </div>
      </div>
    );
  }
}
