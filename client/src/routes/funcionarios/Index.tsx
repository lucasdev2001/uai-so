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
            <a href="#">Link</a>
          </li>
          <li>
            <details role="list" dir="rtl">
              <summary aria-haspopup="listbox" role="link">
                Dropdown
              </summary>
              <ul role="listbox">
                <li>
                  <a>Action</a>
                </li>
                <li>
                  <a>Another action</a>
                </li>
                <li>
                  <a>Something else here</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </nav>
      <section className="container">
        <article>
          <header>Mesa</header>
          <input type="date" value="2001-08-17" readOnly aria-invalid="false" />
          <input type="time" value="18:00" readOnly aria-invalid="false" />
          <input type="text" value={"pessoas: 7"} aria-invalid="false" />
          <footer>
            <button>cancelar</button>
          </footer>
        </article>
      </section>
    </>
  );
};
