import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import store from "./store/index";
import { Auth0Provider } from "@auth0/auth0-react";
import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_API || "http://localhost:5000";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <StrictMode>
      <BrowserRouter>
        <Auth0Provider
          domain="dev-jmd0tdig.us.auth0.com"
          clientId="1a12D4YPRwM3zKeP5sX00qkPyCogtbhB"
          redirectUri={window.location.origin}
        >
          <App />
        </Auth0Provider>
      </BrowserRouter>
    </StrictMode>
  </Provider>
);
