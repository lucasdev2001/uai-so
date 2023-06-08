import { useEffect, useState } from "react";
import { ICliente } from "../../types";

export default () => {
  useEffect(() => {
    const clienteLocalStorage = localStorage.getItem("cliente") ?? null;
    if (clienteLocalStorage) {
      setCliente(JSON.parse(clienteLocalStorage));
    }
  }, []);
  const [cliente, setCliente] = useState<ICliente | null>(null);
  console.log(cliente);

  return (
    <>
      <nav className="container">
        <ul>
          <li>
            <a href="#">
              <i className="bi bi-cart"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bi bi-bell"></i>
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <details role="list" dir="rtl">
              <summary aria-haspopup="listbox" role="link">
                perfil
              </summary>
              <ul role="listbox">
                <li>
                  <a>Minhas reservas</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </nav>
      <section className="container">
        <input
          type="search"
          id="search"
          name="search"
          placeholder="pesquisar"
        />
      </section>
      <header className="container">
        <hgroup>
          <h1>Bem vindo Lucas</h1>
          <h2>Escolha um prato e agende sua reserva!</h2>
        </hgroup>
      </header>
      <br />

      <section className="container">
        <div className="text-center">
          <div className="row">
            <div className="col">
              <button className="rounded-pill outline">Massas</button>
            </div>
            <div className="col">
              <button className="rounded-pill outline">Carnes</button>
            </div>
            <div className="col">
              <button className="rounded-pill outline">Risotos</button>
            </div>
          </div>
        </div>
      </section>
      <section className="container">
        <div className="row">
          <div className="col d-flex">
            <img
              src="https://images.pexels.com/photos/14701529/pexels-photo-14701529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className=" rounded-3 flex-fill img-fluid"
            />
          </div>
          <div className="col">
            <div>
              <strong>Lorem ipsum dolor</strong>, sit amet consectetur
              adipisicing <br />
              <a href="#" className="text-decoration-none">
                saber mais...
              </a>
            </div>
            <br />
            <div>
              <input type="range" min={0} defaultValue={0} />
              <a
                href="#"
                className="float-end p-3 rounded-4 text-decoration-none"
              >
                +
              </a>
            </div>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col d-flex">
            <img
              src="https://images.pexels.com/photos/14701529/pexels-photo-14701529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className=" rounded-3 flex-fill img-fluid"
            />
          </div>
          <div className="col">
            <div>
              <strong>Lorem ipsum dolor</strong>, sit amet consectetur
              adipisicing <br />
              <a href="#" className="text-decoration-none">
                saber mais...
              </a>
            </div>
            <br />
            <div>
              <input type="range" min={0} defaultValue={0} />
              <a
                href="#"
                className="float-end p-3 rounded-4 text-decoration-none"
              >
                +
              </a>
            </div>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col d-flex">
            <img
              src="https://images.pexels.com/photos/14701529/pexels-photo-14701529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className=" rounded-3 img-fluid"
            />
          </div>
          <div className="col">
            <div>
              <strong>Lorem ipsum dolor</strong>, sit amet consectetur
              adipisicing <br />
              <a href="#" className="text-decoration-none">
                saber mais...
              </a>
            </div>
            <br />
            <div>
              <input type="range" min={0} defaultValue={0} />
              <a href="#" className="float-end rounded-4 text-decoration-none">
                +
              </a>
              <a href="#">4</a>
            </div>
          </div>
        </div>
      </section>
      <div className="sticky-bottom contrast container-fluid bg-dark p-1">
        <hgroup className="p-2">
          <h4>você selecionou</h4>
          <h5>2 pratos</h5>
        </hgroup>
        <button className="rounded-pill">reservar mesa</button>
      </div>
    </>
  );
};
