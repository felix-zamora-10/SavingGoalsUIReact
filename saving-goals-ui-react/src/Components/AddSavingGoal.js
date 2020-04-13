import React from "react";
import "./Styles/AddSavingGoal.css";

class AddSavingGoal extends React.Component {
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
              <input id="txtDescription" type="text" />
            </td>
          </tr>
        </table>
        <div class="content">
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
                <input id="btnAdd" type="button" value="Agregar" />
                <input id="btnCancel" type="button" value="Cancelar" />
              </td>
            </tr>
          </table>
        </div>
      </div>
    );
  }
}

export default AddSavingGoal;
