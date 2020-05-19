import React, { Component } from "react";
import { push as Menu } from "react-burger-menu";

import "../assets/css/BurgerMenu.css";

import ThemeSwitch from "./ThemeSwitch.js";

class BurgerMenu extends Component {
  showSettings(event) {
    event.preventDefault();
  }

  render() {
    return (
      <Menu
        disableAutoFocus
        className="bm-menu"
        pageWrapId={this.props.pageWrapId}
        outerContainerId={this.props.container}
      >
        <nav className="bm-item-list">
          <h2 className="bm-item" tabIndex="0">
            <span> PaperPad</span>
          </h2>
          <div id="notes-item" className="menu-item">
            <i className="fa fa-fw fas fa-info-circle"></i>
            <span>Notes</span>
          </div>
          <ThemeSwitch />
        </nav>
      </Menu>
    );
  }
}

export default BurgerMenu;
