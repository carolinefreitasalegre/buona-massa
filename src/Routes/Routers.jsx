import { Route, Routes } from "react-router-dom";
import Home from "../containers/home";
import Pizza from "../containers/pizza";
import Bebidas from "../containers/refri";
import Lanches from "../containers/lanche";
import Carrinho from "../containers/car";
import CardapioCompleto from "../containers/completo";

export default function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pizzas" element={<Pizza />} />
      <Route path="/bebidas" element={<Bebidas />} />
      <Route path="/lanches" element={<Lanches />} />
      <Route path="/carrinho" element={<Carrinho />} />
      <Route path="/completo" element={<CardapioCompleto />} />
    </Routes>
  );
}
