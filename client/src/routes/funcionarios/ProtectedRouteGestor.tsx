import { Navigate } from "react-router-dom";

export default (props: { children: any }) => {
  const clienteLocalStorage = localStorage.getItem("usuario");
  if (
    clienteLocalStorage &&
    JSON.parse(clienteLocalStorage).grupo === "gestor"
  ) {
    return props.children;
  } else {
    return <Navigate to={"/"} />;
  }
};
