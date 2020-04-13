import React from "react";
import "./Styles/UpdateSavingGoal.css";
import DetailsSG from "../Images/DetailsSG.png";

class UpdateSavingGoal extends React.Component {
  applyCollapsible() {
    var collapsible = document.getElementsByClassName("collapsible");
    var divCollapsible = document.getElementById("divCollapsible");
    var element;

    for (element = 0; element < collapsible.length; element++) {
      if (divCollapsible.style.display === "block") {
        divCollapsible.style.display = "none";
      } else {
        divCollapsible.style.display = "block";
      }
    }
  }

  render() {
    return (
      <div className="information-panel input-box">
        <table>
          <tr>
            <td className="td-label">
              <label id="lblDescription" for="txtDescription">
                Descripción:
              </label>
            </td>
            <td className="td-text">
              <input id="txtDescription" type="text" />
            </td>
          </tr>
        </table>
        <img
          className="collapsible"
          src={DetailsSG}
          alt="Detalles del ahorro"
          onClick={this.applyCollapsible}
        />
        <div id="divCollapsible" class="content">
          <table>
            <tr>
              <td className="td-label">
                <label id="lblDate" for="txtDate">
                  Fecha del ahorro:
                </label>
              </td>
              <td className="td-text">
                <input id="txtDate" type="date" />
              </td>
            </tr>
            <tr>
              <td className="td-label">
                <label id="lblAmount" for="txtAmount">
                  Monto del ahorro:
                </label>
              </td>
              <td className="td-text">
                <input id="txtAmount" type="text" />
              </td>
            </tr>
            <tr>
              <td className="td-label" />
              <td className="td-text">
                <input id="btnUpdate" type="button" value="Actualizae" />
                <input id="btnCancel" type="button" value="Cancelar" />
              </td>
            </tr>
          </table>
        </div>
      </div>
    );
  }
}

export default UpdateSavingGoal;
