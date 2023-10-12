import styled from "styled-components";

export const Container = styled.footer`
  margin-top: 2rem;
  padding: 2em 0;
  background-color: black;
  width: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  text-align: center;
  color: #f5f5f5;
  color: #0a770a;
`;
export const AllInfo = styled.div`
  background-color: black;
  width: 100%;
  height: 20vh;
  color: #ffff;
  display: flex;
  padding: 2em 0;
  justify-content: space-around;

  p {
    display: flex;
    gap: 5px;
    align-items: center;
  }
`;
export const Redes = styled.div`
  display: flex;
  flex-direction: column;

  p {
    margin: 0;
    color: #0a770a;
  }
`;
export const Links = styled.div`
  display: flex;
  flex-direction: column;
  text-align: justify;
  a {
    color: #0a770a;
    text-decoration: none;

    &:hover {
      color: #ffff;
    }
  }
`;
