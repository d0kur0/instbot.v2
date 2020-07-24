import React, { useState } from "react";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import "../styles/authSettings.css";
import "../styles/formElements.css";
import "../styles/alerts.css";
import "../styles/card.css";

function AuthSettings() {
  const [showPasswordState, setShowPasswordState] = useState(false);
  const togglePasswordState = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    setShowPasswordState(state => !state);
  };

  return (
    <div className="card auth-settings">
      <div className="alert alert-warning">Авторизация не удалась</div>
      <form>
        <label>
          Логин
          <input type="text" />
        </label>
        <label>
          Пароль
          <div className="input-with-icon">
            <input type={showPasswordState ? "text" : "password"} />
            <button onClick={togglePasswordState}>{showPasswordState ? <IoIosEyeOff /> : <IoIosEye />}</button>
          </div>
        </label>
      </form>
    </div>
  );
}

export default AuthSettings;
