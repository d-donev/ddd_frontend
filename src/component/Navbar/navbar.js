import { Link } from 'react-router-dom';
import navbarCss from './navbar.css';

const Navbar = props => {
  return (
    <nav style={{ height: '83px' }} className="navbar navbar-expand-lg navbar-light bg-light ps-5">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo03"
        aria-controls="navbarTogglerDemo03"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <Link
        className="navbar-brand fw-bold text-dark text"
        style={{
          fontSize: '1.5rem',
          padding: '25px 25px',
        }}
        to="/home"
      >
        AutoPartShop
      </Link>

      <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item active ">
            <Link
              className="navbar-brand fw-bold text-dark text"
              style={{
                fontSize: '1.2rem',
                display: 'table-cell',
                verticalAlign: 'middle',
                padding: '28px 25px',
              }}
              to="/list"
            >
              Products <span className="sr-only"></span>
            </Link>
          </li>

          <li className="nav-item active">
            <Link
              className="navbar-brand fw-bold text-dark text"
              style={{
                fontSize: '1.2rem',
                padding: '28px 25px',
                display: 'table-cell',
                verticalAlign: 'middle',
              }}
              to="/orders"
            >
              Orders <span className="sr-only"></span>
            </Link>
          </li>
          <li className="nav-item active" style={{ marginLeft: '700px' }}>
            <Link
              className="navbar-brand fw-bold text-dark text"
              style={{
                fontSize: '1.2rem',
                display: 'table-cell',
                verticalAlign: 'middle',
                padding: '23px 25px',
              }}
              to="/cart"
            >
              Cart
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="40"
                fill="currentColor"
                class="bi bi-cart-check-fill"
                viewBox="0 0 16 16"
              >
                <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-1.646-7.646-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8 8.293l2.646-2.647a.5.5 0 0 1 .708.708z" />
              </svg>
              <span className="sr-only"></span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
