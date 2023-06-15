import axios from "axios";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import Swal from "sweetalert2";
import FuncionariosNavbar from "../../components/FuncionariosNavbar";

export default () => {
  const socket = io(import.meta.env.VITE_HOST);

  socket.on("funcionario", () => {
    axios(import.meta.env.VITE_HOST + "/funcionarios").then(res => {
      setFuncionarios(res.data);
      console.log(res.data);
    });
    console.log("sinal");
  });
  const [funcionario, setFuncionario] = useState<any>({});
  const [funcionarios, setFuncionarios] = useState<any>([]);
  useEffect(() => {
    if (funcionarios.length === 0) {
      axios(import.meta.env.VITE_HOST + "/funcionarios").then(res => {
        setFuncionarios(res.data);
        console.log(res.data);
      });
    }
  }, []);
  const handleInputChange = (e: any) => {
    const name = e.target.name;
    const value = e.target.value;
    setFuncionario({
      ...funcionario,
      [name]: value,
    });
    console.log(funcionario);
  };
  const handleFormSubmit = (e: any) => {
    e.preventDefault();
    axios
      .post(import.meta.env.VITE_HOST + "/funcionarios", funcionario)
      .then(() =>
        Swal.fire({
          icon: "success",
          title: "Sucesso",
          text: "Editado!",
        })
      )
      .catch(err =>
        Swal.fire({
          icon: "error",
          title: "Erro",
          text: err,
        })
      );
  };

  const prepareEdit = (e: any) => {
    const id = e.target.id;
    const editarFuncionario = funcionarios.find((e: any) => e._id === id);
    setFuncionario(editarFuncionario);
    (document.getElementById("edit-dialog") as HTMLDialogElement).show();
  };

  const handleEditSubmit = (e: any) => {
    e.preventDefault();
    axios
      .put(
        import.meta.env.VITE_HOST + "/funcionarios/" + funcionario._id,
        funcionario
      )
      .then(() =>
        Swal.fire({
          icon: "success",
          title: "Sucesso",
          text: "Editado!",
        })
      )
      .catch(err =>
        Swal.fire({
          icon: "error",
          title: "Erro",
          text: err,
        })
      );
  };
  return (
    <>
      <FuncionariosNavbar />
      <main className="container">
        <>
          <details>
            <summary>Cadastrar Funcionário</summary>
            <form onSubmit={handleFormSubmit}>
              <input
                type="text"
                placeholder="nome"
                name="nome"
                onChange={handleInputChange}
                required
              />
              <input
                type="email"
                placeholder="email"
                name="email"
                onChange={handleInputChange}
                required
              />
              <>
                <select onChange={handleInputChange} name="grupo" required>
                  <option disabled selected value={undefined}>
                    grupo
                  </option>
                  <option value="garçom">Garçom</option>
                  <option value="gestor">Gestor</option>
                  <option value="cozinheiro">Cozinheiro</option>
                </select>
              </>
              <input
                type="password"
                placeholder="código de acesso"
                name="senha"
                onChange={handleInputChange}
                required
              />
              <button type="submit">Cadastrar</button>
            </form>
          </details>

          <table>
            <thead>
              <tr>
                <th scope="col">nome</th>
                <th scope="col">email</th>
                <th scope="col">grupo</th>
                <th scope="col">ações</th>
              </tr>
            </thead>
            <tbody>
              {funcionarios &&
                funcionarios.map((e: any) => (
                  <tr>
                    <td>{e.nome}</td>
                    <td>{e.email}</td>
                    <td>{e.grupo}</td>
                    <td>
                      <a href="#" id={e._id} onClick={prepareEdit}>
                        editar
                      </a>
                      <br />
                      <a
                        href="#"
                        id={e._id}
                        onClick={(e: any) =>
                          Swal.fire({
                            title: "Tem certeza que deseja excluír esse prato?",
                            showDenyButton: true,
                            icon: "warning",
                            confirmButtonText: "Sim",
                            denyButtonText: "Não",
                            denyButtonColor: "grey",
                          }).then(result => {
                            if (result.isConfirmed) {
                              axios
                                .delete(
                                  import.meta.env.VITE_HOST +
                                    "/funcionarios/" +
                                    e.target.id
                                )
                                .then(res => console.log(res));
                              Swal.fire("Excluído!", "", "success");
                            } else if (result.isDenied) {
                              Swal.fire("Não houve mudanças", "", "info");
                            }
                          })
                        }
                      >
                        deletar
                      </a>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
          <dialog id="edit-dialog">
            <article>
              <header>
                <a
                  href="#close"
                  aria-label="Close"
                  className="close"
                  onClick={() =>
                    (
                      document.getElementById(
                        "edit-dialog"
                      ) as HTMLDialogElement
                    ).close()
                  }
                />
                Editar Funcionário
              </header>
              <form onSubmit={handleEditSubmit}>
                <input
                  type="text"
                  placeholder="nome"
                  name="nome"
                  onChange={handleInputChange}
                  required
                  defaultValue={funcionario.nome}
                />
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  onChange={handleInputChange}
                  defaultValue={funcionario.email}
                  required
                />
                <>
                  <select
                    onChange={handleInputChange}
                    name="grupo"
                    required
                    defaultValue={funcionario.grupo}
                  >
                    <option disabled selected>
                      {funcionario.grupo}
                    </option>
                    <option value="garçom">Garçom</option>
                    <option value="gestor">Gestor</option>
                    <option value="cozinheiro">Cozinheiro</option>
                  </select>
                </>
                <input
                  type="password"
                  placeholder="código de acesso"
                  name="senha"
                  onChange={handleInputChange}
                  required
                />
                <button type="submit">Editar</button>
              </form>
            </article>
          </dialog>
        </>
      </main>
    </>
  );
};
