import IMG from "../../assets/logo.svg";
import ShoppingCart from "../../components/ShoppingCart";
import { Container } from "./styles";

import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Container>
      <div className="header-nav">
        <Link to="/">
          <img src={IMG} alt="Logo marca" />
        </Link>
        <nav>
          <Link to="/pizzas">Pizzas 🍕</Link>
          <Link to="/lanches">Lanches 🍔</Link>
          <Link to="/bebidas">Bebidas 🧋 </Link>

          <ShoppingCart />
        </nav>
      </div>

      <Link to="/completo" className="btn-car">
        <button className="cta">
          <span>Cardápio Completo</span>
          <svg viewBox="0 0 13 10" height="10px" width="15px">
            <path d="M1,5 L11,5"></path>
            <polyline points="8 1 12 5 8 9"></polyline>
          </svg>
        </button>
      </Link>
    </Container>
  );
}
