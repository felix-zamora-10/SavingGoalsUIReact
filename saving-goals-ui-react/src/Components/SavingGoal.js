import React from "react";
import "./Styles/SavingGoal.css";
import DetailsSG from "../Images/DetailsSG.png";
import SavingCalculationImg from "../Images/SavingCalculation.png";
import UpdateSG from "../Images/UpdateSG.png";
import DeleteSG from "../Images/DeleteSG.png";

class SavingGoal extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="card">
          <h3 className="title">Card 1</h3>
          <div className="bar">
            <div className="emptybar"></div>
            <div className="filledbar"></div>
            <div>
              <img
                className="image-card"
                src={DetailsSG}
                alt="Agregar objetivo de ahorro"
              />
              <img
                className="image-card"
                src={SavingCalculationImg}
                alt="Agregar objetivo de ahorro"
              />
              <img
                className="image-card"
                src={UpdateSG}
                alt="Agregar objetivo de ahorro"
              />
              <img
                className="image-card"
                src={DeleteSG}
                alt="Agregar objetivo de ahorro"
              />
            </div>
          </div>
        </div>
        <div className="card">
          <h3 className="title">Card 2</h3>
          <div className="bar">
            <div className="emptybar"></div>
            <div className="filledbar"></div>
            <div>
              <img
                className="image-card"
                src={DetailsSG}
                alt="Agregar objetivo de ahorro"
              />
              <img
                className="image-card"
                src={SavingCalculationImg}
                alt="Agregar objetivo de ahorro"
              />
              <img
                className="image-card"
                src={UpdateSG}
                alt="Agregar objetivo de ahorro"
              />
              <img
                className="image-card"
                src={DeleteSG}
                alt="Agregar objetivo de ahorro"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SavingGoal;
