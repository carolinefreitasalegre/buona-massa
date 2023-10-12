import React, { useContext, useEffect, useState } from "react";
import { Container, ListPizza } from "./styles";
import HeaderCar from "../../components/headercar/index";
import { TitlleText } from "../../components/title/styles";
import { BsFillCartCheckFill } from "react-icons/bs";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Footer from "../../components/footer/index";
import { ApiContext, ApiProvider } from "../../context";

export default function Bebidas() {
  const { bebidas, handleClick, car } = useContext(ApiContext);
  console.log(bebidas);
  useEffect(() => {}, [bebidas, car]);

  console.log(car);
  // }

  return (
    <>
      <HeaderCar />
      <ApiProvider>
        <Container>
          <TitlleText>BEBIDAS</TitlleText>

          <ListPizza>
            {bebidas.map((item, index) => (
              <Card
                key={index}
                style={{
                  width: "18rem",
                  height: "25rem",
                  position: "relative",
                }}
              >
                <Card.Img
                  variant="top"
                  src={item.img}
                  style={{ maxWidth: "100%" }}
                />
                <Card.Body>
                  <Card.Title>{item.nome}</Card.Title>
                  <Card.Text
                    style={{
                      position: "absolute",
                      right: 10,
                      bottom: -10,
                      fontWeight: "700",
                      fontSize: "1.5em",
                    }}
                  >
                    {item.valor.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </Card.Text>
                  <Button
                    variant="primary"
                    style={{ position: "absolute", left: 10, bottom: 10 }}
                    onClick={() => handleClick(item)}
                  >
                    <BsFillCartCheckFill
                      style={{ color: "#0a770a" }}
                    ></BsFillCartCheckFill>
                  </Button>
                </Card.Body>
              </Card>
            ))}
          </ListPizza>
        </Container>
      </ApiProvider>
      <Footer />
    </>
  );
}
