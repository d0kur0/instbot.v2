import React from "react";
import PuppeteerSettings from "./components/PuppeteerSettings";
import AuthSettings from "./components/AuthSettings";
import ProcessingSettings from "./components/ProcessingSettings";
import Expander from "./components/Expander";
import Logs from "./components/Logs";
import Limits from "./components/Limits";
import "./styles/app.css";

export default function App() {
  return (
    <div className="layout">
      <div className="layout-left">
        <Expander title="Логи работы бота">
          <Logs />
        </Expander>
        <Expander title="Дневные лимиты">
          <Limits />
        </Expander>
      </div>
      <div className="layout-right">
        <Expander title="Настройки авторизации">
          <AuthSettings />
        </Expander>
        <Expander title="Настройки Puppeteer">
          <PuppeteerSettings />
        </Expander>
        <Expander title="Настройки процессинга">
          <ProcessingSettings />
        </Expander>
      </div>
    </div>
  );
}
