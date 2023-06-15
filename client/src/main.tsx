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
import ProtectedRoute from "./routes/ProtectedRoute";
import Cardapio from "./routes/funcionarios/Cardapio";
import Garcom from "./routes/funcionarios/Garcom";
import Cozinheiro from "./routes/funcionarios/Cozinheiro";
import Gestor from "./routes/funcionarios/Gestor";
import LoginFuncionario from "./routes/funcionarios/LoginFuncionario";
import ProtectedRouteGestor from "./routes/funcionarios/ProtectedRouteGestor";
import ClienteCadastro from "./routes/clientes/ClienteCadastro";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<ClienteLogin />} />

      {/* funcionários */}
      <Route path="funcionario">
        <Route path="cardapio" element={<Cardapio />} />
        <Route path="garcom" element={<Garcom />} />
        <Route path="cozinheiro" element={<Cozinheiro />} />
        <Route
          path="gestor"
          element={
            <ProtectedRouteGestor>
              <Gestor />
            </ProtectedRouteGestor>
          }
        />
        <Route path="login" element={<LoginFuncionario />} />
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
        <Route path="cadastrar" element={<ClienteCadastro />} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
