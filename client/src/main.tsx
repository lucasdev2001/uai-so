import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Login from "./routes/funcionarios/Login";
import Dashboard from "./routes/funcionarios/Dashboard";
import ClienteHomePage from "./routes/clientes/ClienteHomePage";
import Index from "./routes/funcionarios/Index";
import ClienteLogin from "./routes/clientes/ClienteLogin";
import ClienteReserva from "./routes/clientes/ClienteReserva";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      {/* funcionários */}
      <Route path="funcionarios">
        <Route element={<Dashboard />}>
          <Route path="contatos" element={<>Hello conato</>} />
          <Route index element={<Index />} />
        </Route>
        <Route path="login" element={<Login />} />
      </Route>
      {/* clientes */}
      <Route path="clientes">
        <Route index element={<ClienteHomePage />} />
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
