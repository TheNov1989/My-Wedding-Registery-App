import React, { Component } from "react";
import "./App.css";

class Profile extends Component {
  render() {
    let pantone = {
      PantoneID: "0",
      Code: null,
      Hex: null,
      R: "9",
      G: "9",
      B: "9"
    };

    if (this.props.pantone != null) pantone = this.props.pantone;

    return (
      <div className="profile">
        <div className="profile-color" style={{ backgroundColor: pantone.Hex }}>
          &nbsp;
        </div>
        <div>{pantone.Code}</div>
      </div>
    );
  }
}

export default Profile;
