import React from "react";
import "./Styles/MainContainer.css";
import { Header } from "./Header";
import SavingGoalContainer from "./SavingGoalContainer";
import InformationContainer from "./InformationContainer";
import Footer from "./Footer";

class MainContainer extends React.Component {
  render() {
    return (
      <div className="grid-container">
        <div className="grid-item grid-header">
          <Header />
        </div>
        <div className="grid-item grid-saving-goal-container">
          <SavingGoalContainer />
        </div>
        <div className="grid-item grid-information-container">
          <InformationContainer />
        </div>
        <div className="grid-item grid-footer-container">
          <Footer />
        </div>
      </div>
    );
  }
}

export default MainContainer;
