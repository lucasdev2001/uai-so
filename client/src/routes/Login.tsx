import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [telefone, setTelefone] = useState("");
  const [senha, setSenha] = useState("");

  async function handleSubmit(e: any) {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/clientes/login",
        { telefone, senha }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <section className="container">
        <form action="#" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="telefone"
            onChange={(e) => setTelefone(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="senha"
            onChange={(e) => setSenha(e.target.value)}
            required
          />
          <button type="submit">entrar</button>
        </form>
        <Link to={"/cadastro"}>ainda não pussí conta ?</Link>
      </section>
    </>
  );
}
export default Login;
