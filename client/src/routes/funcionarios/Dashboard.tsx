import axios from "axios";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
export default () => {
  const [funcionario, setFuncionario] = useState({
    _id: "",
    nome: "",
    email: "",
  });
  const [funcionarios, setFuncionarios] = useState([funcionario]);
  useEffect(() => {
    setFuncionario(JSON.parse(sessionStorage.getItem("funcionario") ?? ""));
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:3001/funcionarios")
      .then(response => setFuncionarios(response.data))
      .catch(err => console.log(err));
  }, []);
  return (
    <>
      <Outlet />
    </>
  );
};
