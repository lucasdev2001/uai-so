import { IReserva } from "../../../types";

export default (props: { reserva: IReserva }) => {
  const data = new Date(props.reserva.data);
  return (
    <>
      <article className="text-center">
        <header>{props.reserva.tipo}</header>
        <input type="text" readOnly value={`senha: ${props.reserva.senha}`} />
        <input
          type="text"
          readOnly
          value={`${data.toLocaleDateString()} ás ${data.toLocaleTimeString()}`}
        />
        <input type="text" readOnly value={`${props.reserva.estado}`} />
      </article>
    </>
  );
};
