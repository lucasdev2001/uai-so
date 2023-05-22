import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

export default () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = (e: any) => {
    const funcionario = { email, senha };
    e.preventDefault();
    axios
      .post("http://localhost:3001/funcionarios/login", funcionario)
      .then(response => {
        sessionStorage.setItem("funcionario", JSON.stringify(response.data));
        navigate("/funcionarios");
      })

      .catch(err => console.log(err));
  };

  return (
    <>
      <section className="container">
        <h1>Bem vindo funcionário</h1>
        <form action="#" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="email"
            onChange={e => setEmail(e.target.value)}
            className="form-control"
          />
          <input
            type="password"
            placeholder="senha"
            onChange={e => setSenha(e.target.value)}
            className="form-control"
          />
          <button type="submit" className="btn btn-primary">
            entrar
          </button>
        </form>
      </section>
    </>
  );
};
