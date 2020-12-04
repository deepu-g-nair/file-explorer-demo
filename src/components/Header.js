import React, { Component } from "react";
import ComputerMenu from "./ComputerMenu";
import ViewMenu from "./ViewMenu";
import "../css/header.css";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menu: true,
    };
  }

  changeMenuComputer = () => {
    this.setState({
      menu: true,
    });
  };
  changeMenuView = () => {
    this.setState({
      menu: false,
    });
  };

  render() {
    return (
      <div>
        <div className="header">
          <div className="file cursor">
            <p>File</p>
          </div>
          <div
            className="computer cursor"
            onClick={this.changeMenuComputer}
            style={{
              background: this.state.menu ? "rgb(245, 246, 247)" : "#ffffff",
            }}
          >
            <p>Computer</p>
          </div>
          <div
            className="view cursor"
            style={{
              background: this.state.menu ? "#ffffff" : "rgb(245, 246, 247)",
            }}
            onClick={this.changeMenuView}
          >
            <p>View</p>
          </div>
          <div className="arrow-up">
            <i class="fa fa-angle-up" aria-hidden="true"></i>
          </div>
          <div className="help">
            <i class="fa fa-question-circle" aria-hidden="true"></i>
          </div>
        </div>
        <div>{this.state.menu ? <ComputerMenu /> : <ViewMenu />}</div>
      </div>
    );
  }
}

export default Header;
