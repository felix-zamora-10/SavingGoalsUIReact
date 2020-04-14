import React from "react";
import "./Styles/DeleteSavingGoal.css";
import DetailsSG from "../Images/DetailsSG.png";

class DeleteSavingGoal extends React.Component {
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
      <div className="information-panel">
        <table>
          <tr>
            <td className="td-label">
              <label id="lblDescription" for="txtDescription">
                Descripción:
              </label>
            </td>
            <td className="td-text">
              <input id="txtDescription" type="text" disabled />
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
          <table className="table-details">
            <tr className="tr-details">
              <th className="th-details">Fecha del ahorro</th>
              <th className="th-details">Monto del ahorro</th>
            </tr>
            <tr className="tr-details">
              <td className="td-details">Foo1</td>
              <td className="td-details">Foo1</td>
            </tr>
            <tr className="tr-details">
              <td className="td-details">Foo2</td>
              <td className="td-details">Foo2</td>
            </tr>
            <tr className="tr-details">
              <td className="td-details">Foo3</td>
              <td className="td-details">Foo3</td>
            </tr>
            <tr className="tr-details">
              <td className="td-details">Foo4</td>
              <td className="td-details">Foo4</td>
            </tr>
          </table>
        </div>
        <div>
          <input id="btnDelete" type="button" value="Eliminar" />
          <input id="btnCancel" type="button" value="Cancelar" />
        </div>
      </div>
    );
  }
}

export default DeleteSavingGoal;
