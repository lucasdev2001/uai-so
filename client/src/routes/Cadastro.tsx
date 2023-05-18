import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

function Cadastro() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  async function handleSubmit(e: any) {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3000/clientes/cadastro",
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
            type="email"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="senha"
            onChange={(e) => setSenha(e.target.value)}
            required
          />

          <button type="submit">cadastrar</button>
        </form>
        <Link to={"/login"}>já pussí conta ?</Link>
      </section>
    </>
  );
}
export default Cadastro;
