import React from "react";
import logo from "./logo.svg";
import "./App.css";
import SideBarCart from "./SideBarCart";
import Lightbox from "./Lightbox";
import Sidebar from "./Sidebar";
import ScrollableLightbox from "hf-lightbox";

class App extends React.Component {
  state = {
    moveIn: false,
    showLightbox: false
  };
  click = () => {
    this.setState({
      moveIn: true
    });
  };
  clickShowLightbox = () => {
    this.setState({
      showLightbox: true
    });
  };
  moveOut = () => {
    this.setState({
      moveIn: false
    });
  };
  closeLightbox = () => {
    this.setState({
      showLightbox: false
    });
  };
  render() {
    return (
      <div className="App">
        {/* <SideBarCart /> */}
        {/* <Lightbox />       */}
        <div style={{ borderBottom: "1px solid grey" }}>
          <button onClick={this.click}>open right</button>
          {/* <button onClick={this.clickShowLightbox}>open Lightbox</button> */}
        </div>
        {/* <ScrollableLightbox
          show={this.state.showLightbox}
          close={this.closeLightbox}
        >
          loremloremloremloremloremloremloremloremloremlorem
          loremloremloremloremloremloremloremloremloremlorem
        </ScrollableLightbox> */}
        <Sidebar moveIn="right" show={this.state.moveIn} close={this.moveOut} />
        AAAAAA
        <button>KKKK</button>
      </div>
    );
  }
}

export default App;
