import axios from "axios";
import { useState } from "react";
import FormReserva from "./components/FormReserva";

export default () => {
  const [cliente, setCliente] = useState({
    _id: "646b5bd72d5b4a9f61e64ea6",
    nome: "",
    email: "",
  });

  const [inputs, setInputs] = useState({
    qtdPessoas: "1",
    data: "",
  });

  interface IReserva {
    data: Date;
    _id: String;
    estado: String;
    tipo: String;
    cliente: String;
    qtdPessoas: String;
    senha: String;
  }

  const [reserva, setReserva] = useState<null | IReserva>(null);

  const handleInputChange = (e: any) => {
    const target = e.target;
    const { value, name } = target;

    setInputs({
      ...inputs,
      [name]: value,
    });
    console.log(inputs.qtdPessoas);

    if (name === "qtdPessoas") {
      const rangeOutPut = document.getElementById("qtd-pessoas-output");
      if (rangeOutPut) rangeOutPut.innerText = value;
    }
  };

  const handleFormSubmit = (e: any) => {
    e.preventDefault();
    console.log(inputs);

    axios
      .post("http://localhost:3001/reservas", {
        data: inputs.data,
        qtdPessoas: inputs.qtdPessoas,
        tipo: "Mesa",
        cliente: cliente._id,
      })
      .then(res => setReserva(res.data))
      .catch(err => console.log(err));
  };

  const Sucesso = (props: { reserva: IReserva }) => {
    const data = new Date(props.reserva.data);
    return (
      <>
        <h1>
          <ins>Reserva:</ins>
        </h1>
        <article>
          <header>{props.reserva.tipo}</header>
          <input type="text" readOnly value={`senha: ${props.reserva.senha}`} />
          <input
            className="text-center"
            type="text"
            readOnly
            value={`${data.toLocaleDateString()} ás ${data.toLocaleTimeString()}`}
          />
          <input type="text" readOnly value={`${props.reserva.estado}`} />
        </article>
      </>
    );
  };

  return (
    <>
      <br />
      <section className="container">
        {reserva === null ? (
          <FormReserva
            onChange={handleInputChange}
            onSubmit={handleFormSubmit}
          />
        ) : (
          <Sucesso reserva={reserva} />
        )}
      </section>
    </>
  );
};
