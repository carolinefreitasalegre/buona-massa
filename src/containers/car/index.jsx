import { Container, ListCar, Btn } from "./styles";
import HeaderCar from "../../components/headercar/index";
import { TitlleText } from "../../components/title/styles";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import { useContext, useEffect, useState } from "react";
import { ApiContext } from "../../context/index.jsx";
import { BsTrash } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

export default function Carrinho() {
  const Img = styled("img")({
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  });

  const { car, list, deletarItem } = useContext(ApiContext);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    function calcTotal() {
      const sum = list.reduce((acc, item) => {
        return acc + item.valor;
      }, 0);
      setTotal(sum);
    }
    calcTotal();
  }, [list, car]);

  const navigate = useNavigate();
  function handleFinish() {
    if (list.length < 1) {
      alert("Seu carrinho ainda está vazio...😕");
    } else {
      alert("Obrigada por comprar com a gente! 😊");
      location.reload();
      localStorage.removeItem("itens");
      navigate("/");
    }
  }

  return (
    <>
      <HeaderCar />
      <Container>
        <TitlleText>CONFIRA SEU CARRINHO</TitlleText>
        <ListCar>
          <Paper
            sx={{
              p: 2,
              columnGap: 5,
              rowGap: 5,
              margin: "auto",
              marginTop: 5,
              marginBottom: 5,
              maxWidth: 1020,
              flexGrow: 1,
              backgroundColor: (theme) =>
                theme.palette.mode === "dark" ? "#1A2027" : "#fff",
            }}
          >
            {list.map((item, index) => (
              <Grid container gap={5} spacing={2} key={index}>
                <Grid item>
                  <ButtonBase sx={{ width: 128, height: 128 }}>
                    <Img alt="complex" src={item.img} />
                  </ButtonBase>
                </Grid>

                <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={10}>
                    <Grid item xs mt={6}>
                      <Typography
                        gutterBottom
                        variant="subtitle1"
                        component="div"
                      >
                        {item.nome}
                      </Typography>
                      <Typography variant="body2" gutterBottom></Typography>
                    </Grid>
                  </Grid>
                  <Grid item display={"flex"} gap={5} mr={5} mt={5}>
                    <Typography variant="subtitle1" component="div">
                      {item.valor.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </Typography>
                    <Typography
                      sx={{ cursor: "pointer" }}
                      variant="body2"
                      marginBottom={5}
                    >
                      <BsTrash onClick={() => deletarItem(item.id)} />
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            ))}
          </Paper>
        </ListCar>
        <TitlleText
          style={{
            marginTop: 0,
            marginBottom: "2em",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: "1.2em",
            padding: "0 10px",
          }}
        >
          Total
          <p
            style={{
              marginTop: "15px",
              height: "100%",
              padding: "5px",
              color: "black",
            }}
          >
            {total.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </p>
        </TitlleText>

        <Btn onClick={() => handleFinish()}>Finalizar</Btn>
      </Container>
    </>
  );
}
