import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
export default () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [usuario, setUsuario] = useState<any>("");
  const handleLogin = async (e: any) => {
    e.preventDefault();
    axios
      .post(import.meta.env.VITE_HOST + "/funcionarios/login", {
        email,
        senha,
      })
      .then(res => {
        localStorage.setItem("usuario", JSON.stringify(res.data));
        setUsuario(res.data);
        if (usuario.grupo === "gestor") {
          navigate("/funcionario/gestor");
        }
        if (usuario.grupo === "cozinheiro") {
          navigate("/funcionario/cozinheiro");
        }
        if (usuario.grupo === "garçom") {
          navigate("/funcionario/garcom");
        }
      });
  };

  return (
    <>
      <header className="container">
        <img
          src="/images/funcionario-logo.svg"
          className="img-fluid mb-3 mt-3"
          width={350}
          style={{ padding: "30px" }}
        />
      </header>
      <section className="container">
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="E-mail"
            required
            onChange={e => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="código de acesso"
            required
            onChange={e => setSenha(e.target.value)}
          />
          <button type="submit">Login</button>
          <Link to={"./"}> voltar a cliente</Link>
          <br />
        </form>
      </section>
      <section className="container"></section>
    </>
  );
};
