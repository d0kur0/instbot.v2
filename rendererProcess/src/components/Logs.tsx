import React from "react";
import "../styles/logsHighlight.css";
import "../styles/card.css";

function Logs() {
  return (
    <div className="card logs">
      <div className="logs-message logs-header">Начинаю авторизацию</div>
      <div className="logs-message logs-info">Ожидание отрисовки формы авторизации</div>
      <div className="logs-message logs-success">Поле для ввода имени пользователя отрисовано, заполнение</div>
      <div className="logs-message logs-success">Поле для ввода пароля пользователя отрисовано, заполнение</div>
      <div className="logs-message logs-info">Открытие instagram.com для проверки авторизации</div>
      <div className="logs-message logs-info">Ожидание отрисовки элемента с селектором div.mt3GC &gt; button.a00lW</div>
      <div className="logs-message logs-success">
        Авторизация пройдена успешно{" "}
        <span role="img" aria-label="Heart image">
          ❤️
        </span>
      </div>

      <div className="logs-message logs-header">Открытие страницы ХешТега "Ноготочки"</div>
      <div className="logs-message logs-success">Посты успешно отрендерились</div>
      <div className="logs-message logs-success">Кнопка открытия поста успешно отрендерилась</div>

      <div className="logs-message logs-header">Начало итерации #0</div>
      <div className="logs-message logs-success">Пост успешно открыт</div>
      <div className="logs-message logs-info">Ожидание отрисовки кнопки лайка</div>
      <div className="logs-message logs-success">Кнопка лайка отрисована, кликаем</div>

      <div className="logs-message logs-header">Начало итерации #1</div>
      <div className="logs-message logs-success">Пост успешно открыт</div>
      <div className="logs-message logs-info">Ожидание отрисовки кнопки лайка</div>
      <div className="logs-message logs-success">Кнопка лайка отрисована, кликаем</div>

      <div className="logs-printing">...</div>
    </div>
  );
}

export default Logs;
