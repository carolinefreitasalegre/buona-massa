import IMG from "/logo.svg";
import ShoppingCart from "../ShoppingCart";
import { Container } from "./styles";
import { Link } from "react-router-dom";

export default function HeaderCar() {
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
    </Container>
  );
}
