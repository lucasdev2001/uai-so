import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();
  const handleLogin = (e: any) => {
    e.preventDefault();
    console.log(email);
    console.log(senha);

    axios
      .post("http://localhost:3001/clientes/login", {
        email,
        senha,
      })
      .then(res => {
        localStorage.setItem("cliente", JSON.stringify(res.data));
        navigate("/cliente");
      })
      .catch(err => console.log(err));
  };
  return (
    <>
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
            type="tel"
            placeholder="Número de telefone"
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
      <footer>
        <a href="#">faz parte da equipe ?</a>
      </footer>
    </>
  );
};
