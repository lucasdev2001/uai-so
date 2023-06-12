import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();
  const handleLogin = (e: any) => {
    e.preventDefault();
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
      <header className="container text-center">
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
            type="email"
            placeholder="email"
            required
            onChange={e => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="senha"
            required
            onChange={e => setSenha(e.target.value)}
          />
          <button type="submit">login</button>
          <a href="#">Ainda não possuí conta ?</a>
        </form>
      </section>
      <footer className="text-center position-absolute bottom-0 w-100 container p-3">
        <small>
          <a href="#">Faz parte da equipe ?</a>
        </small>
      </footer>
    </>
  );
};
