import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [message, setMessage] = useState("");
  const handleLogin = async (e: any) => {
    e.preventDefault();
    const usuario = await axios.post(
      import.meta.env.VITE_HOST + "/clientes/login",
      {
        email,
        senha,
      }
    );
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
          <button type="submit">Login</button>
          <a href="#">Ainda não possuí conta ?</a>
        </form>
      </section>
      <section className="container"></section>
    </>
  );
};
