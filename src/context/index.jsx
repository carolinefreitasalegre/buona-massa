import axios from "axios";
import { useEffect, useState } from "react";
import { createContext } from "react";

export const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [bebidas, setBebidas] = useState([]);
  const [lanches, setLanches] = useState([]);

  useEffect(() => {
    async function listPizza() {
      const api = await axios
        .get("/service/data.json")
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
      return api;
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

  function deletarItem(itemId) {
    const updatedList = list.filter((item) => item.id !== itemId);
    setList(updatedList);
    localStorage.setItem("itens", JSON.stringify(updatedList));
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
        deletarItem,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};

// export default { ApiContext, ApiProvider };
