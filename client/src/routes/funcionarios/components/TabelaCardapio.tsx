import { IPrato } from "../../../types";

export default (props: {
  arrayCardapio: [IPrato];
  clickVisualizar: any;
  clickEditar: any;
  clickExcluir: any;
  clickOcultar: any;
}) => {
  return (
    <>
      <figure>
        <table role="grid">
          <thead>
            <tr>
              <th scope="col">Foto</th>

              <th scope="col">Nome</th>
              <th scope="col">Status</th>
              <th scope="col">Ações</th>
            </tr>
          </thead>
          <tbody>
            {props.arrayCardapio.map((e, index) => (
              <tr key={index}>
                <td>
                  <a href="#" onClick={props.clickVisualizar}>
                    <i className="bi bi-eye" />
                  </a>
                </td>
                <td>{e.nome}</td>

                <td>O prato está atualmente visível</td>
                <td id={e._id ?? ""}>
                  <a href="#" onClick={props.clickEditar}>
                    Editar
                  </a>
                  <br />
                  <a href="#" onClick={props.clickExcluir}>
                    Excluír
                  </a>
                  <br />
                  <a href="#" onClick={props.clickOcultar}>
                    Ocultar
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </figure>
    </>
  );
};
