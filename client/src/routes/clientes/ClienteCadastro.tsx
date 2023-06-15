import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
export default () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmaSenha, setConfirmaSenha] = useState("");
  const [message, setMessage] = useState("");
  const handleLogin = async (e: any) => {
    e.preventDefault();
    if (confirmaSenha !== senha) window.alert("As enhas não são iguais");
    const usuario = await axios.post(import.meta.env.VITE_HOST + "/clientes/", {
      email,
      senha,
    });
    await localStorage.setItem("usuario", JSON.stringify(usuario.data));
    await setMessage(JSON.stringify(usuario.data));
    navigate("/cliente");
  };

  return (
    <>
      {message && localStorage.getItem("usuario")}
      <header className="container">
        <img
          src="/images/logo.svg"
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
            placeholder="Senha"
            required
            onChange={e => setSenha(e.target.value)}
          />
          <input
            type="password"
            placeholder="confirmpassword"
            required
            onChange={e => setConfirmaSenha(e.target.value)}
          />
          <button type="submit">cadastrar</button>
          <Link to={"/"}>Já possuí conta ?</Link>
        </form>
      </section>
    </>
  );
};
