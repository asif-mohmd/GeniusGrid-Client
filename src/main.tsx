import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import appStore from "./redux/Store.ts";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "./utils/AuthContext.tsx";

const persistor = persistStore(appStore);


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
     <AuthProvider>
    <Provider store={appStore}>
      <PersistGate persistor={persistor}>
        <ToastContainer/>
        <App />
      </PersistGate>
    </Provider>
    </AuthProvider>
  </React.StrictMode>
);
