import styled from "styled-components";
import BackGroung from "../../../public/assets/backimage.png";

export const Container = styled.header`
  /* z-index: 100000; */
  min-height: 35vh;
  left: 0;
  right: 0;
  top: 0;
  padding-right: 5rem;
  width: 99.5vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15rem;
  align-items: center;
  background-image: url(${BackGroung});
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: 100%;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;

  .header-nav {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 5rem;
  }
  nav {
    width: 35rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    padding: 2px 4px;
    height: 2rem;

    a {
      text-decoration: none;
      color: rgb(10, 119, 10);
      font-weight: 700;
      font-size: 1.2rem;
      transition: all 0.5s;
      padding: 2px 5px;
      border-radius: 5px;
      background-color: rgb(255, 255, 255, 20%);

      &:hover {
        color: rgb(188, 20, 20);
      }
    }
  }

  .cta {
    position: relative;
    margin: auto;
    padding: 12px 18px;
    transition: all 0.2s ease;
    border: none;
    background: none;
    cursor: pointer;
  }

  .cta:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    border-radius: 50px;
    background: rgb(10, 119, 10);
    width: 45px;
    height: 45px;
    transition: all 0.3s ease;
  }

  .cta span {
    position: relative;
    font-family: "Ubuntu", sans-serif;
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 0.05em;
    color: #ffff;
  }

  .cta svg {
    position: relative;
    top: 0;
    margin-left: 10px;
    fill: none;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke: rgb(10, 119, 10);
    stroke-width: 2;
    transform: translateX(-5px);
    transition: all 0.3s ease;
  }

  .cta:hover:before {
    width: 100%;
    background: rgb(188, 20, 20);
  }

  .cta:hover svg {
    transform: translateX(0);
  }

  .cta:active {
    transform: scale(0.95);
  }
`;
export default Container;
