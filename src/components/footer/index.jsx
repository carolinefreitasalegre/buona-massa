import React from "react";
import { Container, AllInfo, Redes, Links } from "./styles";
import { BsInstagram, BsFacebook } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <Container>
      <AllInfo>
        <Redes>
          <p>Contato: 3333-3333</p>
          <p>
            Nos siga nas redes:
            <BsInstagram style={{ color: "#0a770a" }} />
            <BsFacebook style={{ color: "#0a770a" }} />
          </p>
        </Redes>
        <Links>
          <Link to="/">Página Inicial</Link>
          <Link to="/completo">Cardápio Completo</Link>
          <Link to="/pizzas">Pizzas</Link>
          <Link to="/bebidas">Bebidas</Link>
          <Link to="/lanches">Lanches</Link>
        </Links>
      </AllInfo>
      <p>Endereço: Av Vaique Foi, 1299 - Bairro Pinanópoles</p>
    </Container>
  );
}
