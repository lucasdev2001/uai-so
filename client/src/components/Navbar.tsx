export default () => {
  return (
    <>
      <nav className="container">
        <ul>
          <li>
            <a
              href="#"
              className="notification"
              style={{ position: "relative" }}
            >
              <i className="bi bi-bell"></i>
              <span className="badge">1</span>
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
    </>
  );
};
