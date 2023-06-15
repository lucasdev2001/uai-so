import { Link } from "react-router-dom";

export default () => {
  return (
    <>
      <nav className="container">
        <ul>
          <li>
            <strong>Uai Sô</strong>
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
                  <Link to={"/"} onClick={() => localStorage.clear()}>
                    Sair
                  </Link>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </nav>
    </>
  );
};
