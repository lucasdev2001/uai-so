import { useState } from "react";
import GoBackNavbar from "../../../components/GoBackNavbar";
import axios from "axios";

export default () => {
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [preco, setPreco] = useState("");
  const [foto, setFoto] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios
      .postForm("http://localhost:3001/pratos", {
        nome,
        descricao,
        preco,
        foto,
      })
      .then(response => console.log(response.data))
      .catch(error => console.log(error));
  };
  return (
    <>
      <form method="POST" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="nome"
          onChange={e => setNome(e.target.value)}
        />
        <textarea
          placeholder="Descrição"
          onChange={e => setDescricao(e.target.value)}
        ></textarea>
        <input
          type="text"
          placeholder="preço"
          onChange={e => setPreco(e.target.value)}
        />

        <label htmlFor="">
          foto
          <input
            type="file"
            placeholder="foto"
            multiple={false}
            accept="image/*"
            onChange={e => setFoto(e.target.files![0])}
          />
        </label>
        <button type="submit">Cadastrar</button>
      </form>
    </>
  );
};
