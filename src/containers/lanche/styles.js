import styled from "styled-components";

export const Container = styled.section`
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

export const ListPizza = styled.div`
  width: 67%;
  padding: 5rem 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  gap: 3rem;
  background-color: #ffff;
  padding: 2rem;
  border-radius: 5px;

  .card {
    background-color: #e8e8e8;
    border: none;
    font-size: 0.8rem;
    text-transform: capitalize;

    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

    button {
      cursor: pointer;
      background-color: #f5f5f5;
      border: none;
    }
  }
`;
