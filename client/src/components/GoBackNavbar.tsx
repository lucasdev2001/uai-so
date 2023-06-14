import { useNavigate } from "react-router-dom";

export default () => {
  const navigate = useNavigate();

  return (
    <>
      <nav className="container">
        <ul>
          <li>
            <a href="#" onClick={() => navigate(-1)}>
              <i className="bi bi-arrow-left" />
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};
