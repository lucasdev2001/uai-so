import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Dashboard from "./routes/funcionarios/Dashboard";
import ClienteHomePage from "./routes/clientes/ClienteHomePage";
import Index from "./routes/funcionarios/Index";
import ClienteLogin from "./routes/clientes/ClienteLogin";
import ClienteReserva from "./routes/clientes/ClienteReserva";
import ProtectedRoute from "./routes/ProtectedRoute";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<ClienteLogin />} />

      {/* funcionários */}
      <Route path="funcionario">
        <Route element={<Dashboard />}>
          <Route path="contatos" element={<>Hello conato</>} />
          <Route index element={<Index />} />
        </Route>
      </Route>

      {/* clientes */}
      <Route path="cliente">
        <Route
          index
          element={
            <ProtectedRoute redirectPath="/">
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
