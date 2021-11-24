import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {IpssProvider} from "./context/context";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

const auth0id = process.env.REACT_APP_ACCESS_KEY_AUTH0;
const auth0domain = `dev-lcmg-5hg.us.auth0.com`;

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain={auth0domain}
      clientId={`${auth0id}`}
      redirectUri={window.location.origin}
      cacheLocation='localstorage'
    >
      <IpssProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </IpssProvider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
