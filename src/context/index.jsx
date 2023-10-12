import axios from "axios";
import { useEffect, useState } from "react";
import { createContext } from "react";

export const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [bebidas, setBebidas] = useState([]);
  const [lanches, setLanches] = useState([]);

  useEffect(() => {
    async function listPromo() {
      const api = await axios
        .get("src/api/data.json")
        .then((res) => {
          const listPizza = res.data.pizza;
          const listRefri = res.data.refrigerantes;
          const abs = listPizza.forEach((element) => {
            element.sabores;
            console.log(abs);
          });
          setPromo();
        })
        .catch((err) => console.log("Nao rodou!"));
    }
  }, []);

  useEffect(() => {
    async function listPizza() {
      const api = await axios
        .get("src/api/data.json")
        .then((response) => {
          const res = response.data.pizzas;
          const resBebidas = response.data.refrigerantes;
          const resLanches = response.data.lanches;
          setBebidas(resBebidas);
          setData(res); // Define os dados no estado
          setLanches(resLanches);
        })
        .catch((error) => {
          console.error("Erro ao buscar os dados:", error);
        });
    }
    listPizza();
  }, []);

  /* AQUI TODA A FUNCIONALIDADE DO CARRINHO */

  const [car, setCar] = useState([]);
  const [list, setList] = useState([]);

  function handleClick(item) {
    setCar((prevCar) => [...prevCar, item]);

    localStorage.setItem("itens", JSON.stringify([...car, item]));
    alert(`Item adicionado com sucesso! 😉`);
  }

  function handleFinish() {
    alert("Obrigada por comprar com a gente! 😊");
    location.reload();
    localStorage.removeItem("itens");
  }

  useEffect(() => {
    async function buscarLista() {
      const carList = await JSON.parse(localStorage.getItem("itens"));
      setList(() => carList || []);
    }
    buscarLista();
  }, [car]);

  return (
    <ApiContext.Provider
      value={{
        data,
        setData,
        bebidas,
        setBebidas,
        lanches,
        setLanches,
        handleClick,
        setCar,
        car,
        list,
        setList,
        handleFinish,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};
