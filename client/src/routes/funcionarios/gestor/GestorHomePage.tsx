import FoodCard from "../../../components/FoodCard";

export default () => {
  return (
    <>
      <nav className="container">
        <ul></ul>
        <ul>
          <li>
            <a href="#">Link</a>
          </li>
          <li>
            <details role="list" dir="rtl">
              <summary aria-haspopup="listbox" role="link">
                Cardápio
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
      <main className="container-fluid">
        <article>
          <header>
            Lagosta{" "}
            <a href="#">
              <i className="bi bi-eye" />
            </a>
          </header>
          <input type="text" placeholder="nome" />
          <textarea name="" id="" placeholder="Descrição"></textarea>
          <input type="text" placeholder="preço" />
          <ul>
            <li>Lagosta</li>
            <li>Limão</li>
            <li>Sal</li>
          </ul>
          <input type="file" placeholder="foto" />
        </article>
        <figure>
          <table role="grid">
            <thead>
              <tr>
                <th scope="col">Foto</th>

                <th scope="col">Nome</th>
                <th scope="col">Ações</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>eye</td>
                <td>Lagosta</td>

                <td>
                  <a href="#">Editar</a>
                  <br />
                  <a href="#">Excluír</a>
                  <br />
                  <a href="#">Pendenciar</a>
                </td>
              </tr>
            </tbody>
          </table>
        </figure>
      </main>
    </>
  );
};
