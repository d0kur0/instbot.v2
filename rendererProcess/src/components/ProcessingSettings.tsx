import React from "react";
import "../styles/formElements.css";

function ProcessingSettings() {
  return (
    <div className="card">
      <form>
        <label className="label-checkbox">
          Удалять раздел "популярное"
          <input type="checkbox" defaultChecked={true} />
        </label>

        <label className="label-checkbox">
          Подписываться
          <input type="checkbox" defaultChecked={true} />
        </label>

        <label className="label-checkbox">
          Ставить лайк
          <input type="checkbox" defaultChecked={true} />
        </label>

        <label className="label-checkbox">
          Писать комментарии
          <input type="checkbox" defaultChecked={true} />
        </label>
      </form>
    </div>
  );
}

export default ProcessingSettings;
