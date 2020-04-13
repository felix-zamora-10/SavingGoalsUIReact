import React from "react";
import "./Styles/Header.css";
import AddSG from "../Images/AddSG.png";

export class Header extends React.Component {
  addNewSavingGoal() {}

  render() {
    return (
      <div>
        <img
          className="image"
          src={AddSG}
          alt="Agregar objetivo de ahorro"
          onClick={this.addNewSavingGoal}
        />
      </div>
    );
  }
}
