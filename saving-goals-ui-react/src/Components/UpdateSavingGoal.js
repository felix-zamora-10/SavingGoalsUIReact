import React from "react";
import "./Styles/UpdateSavingGoal.css";

class UpdateSavingGoal extends React.Component {
  render() {
    return (
      <div>
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
                  <input id="btnUpdate" type="button" value="Agregar" />
                </td>
              </tr>
            </table>
          </div>
        </div>
        <div className="information-panel-details">
          <table>
            <tr>
              <th className="td-text-details">Fecha del ahorro</th>
              <th className="td-text-details">Monto del ahorro</th>
              <th className="td-actions-details">Acciones</th>
            </tr>
            <tr></tr>
          </table>
        </div>
      </div>
    );
  }
}

export default UpdateSavingGoal;
