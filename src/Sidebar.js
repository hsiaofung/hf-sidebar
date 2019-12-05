import React, { Component } from "react";
import "./css/sidebar.css";
import ScrollableLightbox from "hf-lightbox";

export default class Sidebar extends Component {
  get contentShow() {
    const { show, moveIn } = this.props;
    if (show) {
      if (moveIn === "right") {
        return "sidebar-content sidebar-content-right-show";
      } else {
        return "sidebar-content sidebar-content-left-show";
      }
    } else {
      if (moveIn === "right") {
        return "sidebar-content sidebar-content-right-hidden";
      } else {
        return "sidebar-content sidebar-content-left-hidden";
      }
    }
  }
  render() {
    const { show, close, moveIn } = this.props;
    return (
      <div className={show ? "sidebar sidebar-show" : "sidebar sidebar-hidden"}>
        <div className={this.contentShow}>
          <button onClick={close}>close</button>
        </div>
      </div>
    );
  }
}
