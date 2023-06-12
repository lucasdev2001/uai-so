import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import ClienteHomePage from "./routes/clientes/ClienteHomePage";
import ClienteLogin from "./routes/clientes/ClienteLogin";
import ClienteReserva from "./routes/clientes/ClienteReserva";
import ProtectedRoute from "./routes/ProtectedRoute";
import GestorHomePage from "./routes/funcionarios/gestor/GestorHomePage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<ClienteLogin />} />

      {/* funcionários */}
      <Route path="funcionario">
        <Route path="gestor" element={<GestorHomePage />} />
      </Route>

      {/* clientes */}
      <Route path="cliente">
        <Route
          index
          element={
            <ProtectedRoute>
              <ClienteHomePage />
            </ProtectedRoute>
          }
        />
        <Route path="login" element={<ClienteLogin />} />
        <Route path="reserva" element={<ClienteReserva />} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
