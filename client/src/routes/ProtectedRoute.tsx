import { Navigate } from "react-router-dom";

export default (props: { children: any; redirectPath: string }) => {
  const clienteLocalStorage = localStorage.getItem("cliente");
  console.log(clienteLocalStorage);

  if (clienteLocalStorage) {
    return props.children;
  } else {
    return <Navigate to={props.redirectPath} />;
  }
};
