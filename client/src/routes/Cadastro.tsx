import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

function Cadastro() {
  const [telefone, setTelefone] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: any) {
    e.preventDefault();
    if (senha !== confirmarSenha) {
      setErrorMessage("As senhas não são iguais");
    } else {
      try {
        const response = await axios.post(
          "http://localhost:3000/clientes/cadastro",
          { telefone, senha }
        );
        console.log(response);
      } catch (error) {
        console.log(error);
      }
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
          <input
            type="text"
            placeholder="senha"
            onChange={(e) => setConfirmarSenha(e.target.value)}
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
