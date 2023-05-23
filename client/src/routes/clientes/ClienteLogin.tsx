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
        navigate("/clientes");
      })
      .catch(err => console.log(err));
  };
  return (
    <>
      <br />
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
            placeholder="password"
            required
            onChange={e => setSenha(e.target.value)}
          />
          <button type="submit">login</button>
        </form>
      </section>
    </>
  );
};
