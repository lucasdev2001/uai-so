import AddPrato from "../components/AddPrato";

export default () => {
  return (
    <>
      <nav className="container">
        <ul></ul>
        <ul>
          <li>
            <details role="list" dir="rtl">
              <summary aria-haspopup="listbox" role="link">
                perfil
              </summary>
              <ul role="listbox">
                <li>
                  <a href="#">Adicionar Item</a>
                </li>
                <li>
                  <a>Remover Item</a>
                </li>
                <li>
                  <a>Something else here</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </nav>
      <main className="container">
        <details>
          <summary>Adicionar prato</summary>
          <AddPrato />
        </details>
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
              <tr>
                <td>
                  <center>
                    <a href="#">
                      <i className="bi bi-eye" />
                    </a>
                  </center>
                </td>
                <td>Lagosta</td>

                <td>O prato está atualmente visível</td>
                <td>
                  <a href="#">Editar</a>
                  <br />
                  <a href="#">Excluír</a>
                  <br />
                  <a href="#">Ocultar</a>
                </td>
              </tr>
            </tbody>
          </table>
        </figure>
        <dialog open>
          <article>
            <header>
              Lucas
              <a href="#close" aria-label="Close" className="close" />
            </header>
            <AddPrato />
          </article>
        </dialog>
        <dialog>
          <article>
            <header>
              name
              <a href="#close" aria-label="Close" className="close" />
            </header>
            <img
              src="https://images.pexels.com/photos/11713104/pexels-photo-11713104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </article>
        </dialog>
      </main>
    </>
  );
};
