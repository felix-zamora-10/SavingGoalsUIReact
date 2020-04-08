import React from "react";
import "./Styles/Header.css";
import AddSG from "../Images/AddSG.png";

class Header extends React.Component {
  render() {
    return (
      <div>
        <img className="image" src={AddSG} alt="Agregar objetivo de ahorro" />
      </div>
    );
  }
}

export default Header;
