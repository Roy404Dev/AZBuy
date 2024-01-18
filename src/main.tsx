import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Auth0Provider } from "@auth0/auth0-react";

const clientId = process.env.AUTH0_CLIENT_ID || "";
const domain = process.env.AUTH0_BASE_URL || "";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {clientId ? (
          <Auth0Provider
          domain={clientId}
          clientId={domain}
          authorizationParams={{
            redirect_uri: window.location.origin,
          }}
        >
          <App />
        </Auth0Provider>
    ) : null}
    {/* <Auth0Provider
      domain={undefined}
      clientId={undefined}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <App />
    </Auth0Provider> */}
  </React.StrictMode>
);
