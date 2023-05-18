import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  async function handleSubmit(e: any) {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/clientes/login",
        { email, senha }
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
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="senha"
            onChange={(e) => setSenha(e.target.value)}
            required
          />
          <Link to={"/"}>
            <button type="submit">entrar</button>
          </Link>
        </form>
        <Link to={"/cadastro"}>ainda não pussí conta ?</Link>
      </section>
    </>
  );
}
export default Login;
