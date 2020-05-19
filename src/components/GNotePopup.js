import React, { Component } from "react";
import "../assets/css/GNotePopup.css";
export default class GNotePopup extends Component {
  state = {
    focus: false,
    note: {},
  };

  componentWillMount() {
    document.addEventListener("mousedown", this.handleClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClick, false);
  }

  handleClick = (e) => {
    if (this.node.contains(e.target)) {
      return;
    }
    this.props.handlePop();
  };
  render() {
    const { focus, note } = this.state;
    const { updateOnly } = this.props;
    return (
      <div ref={(node) => (this.node = node)} className="notepopup-container">
        <div className="notepopup-paper">
          <span onClick={() => this.props.handlePop()} className="close-popup">
            X
          </span>
          <div className="notepopup-header">This is a note header</div>
          <p className="notepopup-text">{this.props.message}</p>
        </div>
      </div>
    );
  }
}
