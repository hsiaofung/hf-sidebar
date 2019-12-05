import React, { Component } from "react";
import "./css/sideBarCart.css";

export default class SideBarCart extends Component {
  state = { show: false };
  open = () => {
    this.setState({
      show: true
    });
  };
  close = () => {
    this.setState({
      show: false
    });
  };
  render() {
    return (
      <div>
        <button onClick={this.open}>cart</button>
        <hr />
        {/* 陰影 */}
        <div className={this.state.show ? "sidebar" : "sidebar-close"}>
          {/* 內容 */}
          <div
            className={
              this.state.show ? "sidebar-content" : "sidebar-content-close"
            }
          >
            <button onClick={this.close}>close</button>
            lorem
          </div>
        </div>
      </div>
    );
  }
}
