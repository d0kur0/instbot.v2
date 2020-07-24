import React from "react";
import "../styles/formElements.css";

function PuppeteerSettings() {
  return (
    <div className="card" style={{ marginTop: "30px" }}>
      <form>
        <label>
          Параметры запуска
          <input type="text" />
        </label>
        <label className="label-checkbox">
          Запускать в скрытом режиме
          <input type="checkbox" defaultChecked={true} />
        </label>
      </form>
    </div>
  );
}

export default PuppeteerSettings;
