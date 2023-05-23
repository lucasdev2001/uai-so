import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FormReserva from "./components/FormReserva";
import { IReserva, ICliente } from "../../types";
export default () => {
  const navigate = useNavigate();
  useEffect(() => {
    const clienteLocalStorage = localStorage.getItem("cliente");
    if (clienteLocalStorage) {
      setCliente(JSON.parse(clienteLocalStorage));
      console.log(cliente);
    } else {
      navigate("/clientes/login");
    }
  }, []);
  const [cliente, setCliente] = useState<ICliente>({
    _id: "",
    nome: "",
    email: "",
  });

  const [inputs, setInputs] = useState({
    qtdPessoas: "1",
    data: "",
  });

  const [reserva, setReserva] = useState<null | IReserva>(null);

  const handleInputChange = (e: any) => {
    const target = e.target;
    const { value, name } = target;

    setInputs({
      ...inputs,
      [name]: value,
    });

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
