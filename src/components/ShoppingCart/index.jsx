import React, { useContext, useEffect, useState } from "react";
import { BsFillCartCheckFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { ApiContext } from "../../context";

export default function ShoppingCart() {
  const { car, list } = useContext(ApiContext);
  const [soma, setSoma] = useState();

  useEffect(() => {
    const qtd = list.length;
    console.log(qtd);
    setSoma(qtd);
  }, [list, car]);

  return (
    <>
      <Link to="/carrinho" style={{ display: "flex" }}>
        <BsFillCartCheckFill
          style={{ color: "#0a770a", marginBottom: "5px" }}
        ></BsFillCartCheckFill>
        <span>{soma}</span>
      </Link>
    </>
  );
}
