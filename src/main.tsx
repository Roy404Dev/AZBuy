import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Auth0Provider } from "@auth0/auth0-react";

// const clientId = process.env.AUTH0_CLIENT_ID || "";
// const domain = process.env.AUTH0_BASE_URL || "";
const clientId = "dnvrDGOv2BOf8gxPmgXX5bHUiEHj86VC";
const domain = "tsgroy.eu.auth0.com";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
