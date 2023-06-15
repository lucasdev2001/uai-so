import TabelaCardapio from "./components/TabelaCardapio";
import Dialog from "../../components/Dialog";
import AddPrato from "./components/AddPrato";
import axios from "axios";
import Swal from "sweetalert2";
import { useState } from "react";
import { io } from "socket.io-client";

const socket = io(import.meta.env.VITE_HOST);
socket.on("connection", () => {
  socket.emit("updatePratos", "fetch origin");
});
export default () => {
  socket.on("updatePratos", () => {
    axios(import.meta.env.VITE_HOST + "/pratos").then(res =>
      setCardapio(res.data)
    );
  });

  const [prato, setPrato] = useState<any>({});
  const [cardapio, setCardapio] = useState<any>([]);
  const handleAddPrato = (e: any) => {
    e.preventDefault();
    axios
      .postForm(import.meta.env.VITE_HOST + "/pratos", prato)
      .then(() => {
        Swal.fire({
          title: "Sucesso!",
          text: "O prato foi cadastro no sistema!",
          icon: "success",
          confirmButtonColor: "#e53935",
        });
        (document.getElementById("add-prato") as HTMLDialogElement).close();
      })
      .catch(error => {
        console.log(error);
        Swal.fire({
          title: "Erro",
          text: "Houve um erro" + `${error}`,
          icon: "error",
          confirmButtonColor: "#e53935",
        });
      });
  };

  const handleEditarPrato = (e: any) => {
    e.preventDefault();
    axios
      .putForm(import.meta.env.VITE_HOST + "/pratos/" + prato._id, prato)
      .then(() => {
        Swal.fire({
          title: "Sucesso!",
          text: "O prato foi cadastro no sistema!",
          icon: "success",
          confirmButtonColor: "#e53935",
        });
        (document.getElementById("add-prato") as HTMLDialogElement).close();
      })
      .catch(error => {
        console.log(error);
        Swal.fire({
          title: "Erro",
          text: "Houve um erro" + `${error}`,
          icon: "error",
          confirmButtonColor: "#e53935",
        });
      });
  };
  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    if (name === "foto") {
      setPrato({
        ...prato,
        foto: e.target.files[0],
      });
    } else {
      setPrato({
        ...prato,
        [name]: value,
      });
    }
    console.log(prato);
  };
  const handleOpenEditar = (e: any) => {
    const id = e.currentTarget.parentElement;
    setPrato(cardapio.find((e: any) => e._id === id));
    (document.getElementById("editar-prato") as HTMLDialogElement).show();
  };

  const handleExcluirPrato = (e: any) => {
    const id = e.currentTarget.parentElement.id;
    console.log(id);

    Swal.fire({
      title: "Tem certeza que deseja excluír esse prato?",
      showDenyButton: true,
      icon: "warning",
      confirmButtonText: "Sim",
      denyButtonText: "Não",
      denyButtonColor: "grey",
    }).then(result => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        axios
          .delete(import.meta.env.VITE_HOST + "/pratos/" + id)
          .then(res => console.log(res));
        Swal.fire("Excluído!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Não houve mudanças", "", "info");
      }
    });
  };
  return (
    <>
      <nav className="container">
        <ul>
          <li>
            <strong>uai sô</strong>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#">Início</a>
          </li>
        </ul>
      </nav>

      <main className="container">
        <nav aria-label="breadcrumb">
          <ul>
            <li>
              <a
                href="#"
                onClick={() =>
                  (
                    document.getElementById("add-prato") as HTMLDialogElement
                  ).show()
                }
              >
                adicionar prato
              </a>
            </li>
          </ul>
        </nav>
      </main>
      <section>
        <TabelaCardapio
          arrayCardapio={cardapio}
          clickEditar={handleOpenEditar}
          clickExcluir={handleExcluirPrato}
        />
      </section>

      <Dialog dialogId="add-prato" title={"título"}>
        <AddPrato
          onFormSubmit={handleAddPrato}
          onInputChange={handleInputChange}
        />
      </Dialog>

      <Dialog dialogId="editar-prato">
        <AddPrato
          fill={prato}
          onFormSubmit={handleEditarPrato}
          onInputChange={handleInputChange}
        />
      </Dialog>
    </>
  );
};
