import React from "react";
import "./Styles/Footer.css";

class Footer extends React.Component {
  render() {
    return (
      <div>
        <p className="footer-text">
          Desarrollada por{" "}
          <b>
            <i>Félix Zamora</i>
          </b>
          .
        </p>
      </div>
    );
  }
}

export default Footer;
