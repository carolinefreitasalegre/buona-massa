import React, { useContext, useEffect } from "react";
import { Container, ListPizza } from "./styles";
import HeaderCar from "../../components/headercar/index";
import { TitlleText } from "../../components/title/styles";
import { BsFillCartCheckFill } from "react-icons/bs";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Footer from "../../components/footer/index";
import { ApiContext, ApiProvider } from "../../context/index";

export default function Pizza() {
  const { data, handleClick, car } = useContext(ApiContext);
  // console.log(data);
  useEffect(() => {}, [data, car]);

  console.log(car);

  return (
    <>
      <HeaderCar />
      <ApiProvider>
        <Container>
          <TitlleText>PIZZAS</TitlleText>
          <ListPizza>
            {data.map((item, index) => (
              <Card
                style={{
                  width: "18rem",
                  height: "25rem",
                  position: "relative",
                }}
                key={index}
              >
                <Card.Img variant="top" src={item.img} />
                <Card.Body>
                  <Card.Title>{item.nome}</Card.Title>
                  <Card.Text>{item.ingredientes.join(", ")}</Card.Text>
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
                    actived
                    active={false}
                    variant="primary"
                    style={{ position: "absolute", left: 10, bottom: 10 }}
                    onClick={() => handleClick(item)}
                  >
                    <BsFillCartCheckFill
                      style={{ color: "#0A770A" }}
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
