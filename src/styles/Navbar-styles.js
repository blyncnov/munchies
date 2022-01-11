import styled from "styled-components";

export const NavbarContainer = styled.div`
  width: 100%;
  background-color: #ffffff;
`;

export const NavbarColumn = styled.div`
  width: 100%;
  max-width: 90%;
  margin: 0 auto;
  padding: 1em 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  //   background-color: red;

  h1 {
    color: #001f37;
    font-size: 2rem;
    font-weight: 500;
    cursor: pointer;
  }

  .global__item {
    flex-basis: 5;
  }

  li {
    font-weight: 500;
  }

  li:hover {
    color: #2289ff;
  }

  .navbar__widget {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2em;
  }

  .navbar__search {
    border-radius: 1px;
    padding: 1em 2em;
    color: #333333;
    background-color: rgb(238, 238, 238);
  }

  .flex {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  input {
    width: 100%;
    background-color: transparent;
    border: none;
    outline: none;
  }

  .navbar__gap {
    gap: 1em;
  }

  button {
    background-color: #001f37;
    border-radius: 4px;
    padding: 0.5em 1.5em;
    color: #ffffff;
    font-weight: 500;
    // font-family: "Montserrat", sans-serif;
  }

  .mobile {
    display: none;
  }

  @media (max-width: 1000px) {
    .navbar__list,
    .navbar__search {
      display: none;
    }

    .mobile {
      display: block;
    }
  }
`;

export const List = styled.div`
    cursor: pointer;
    display: flex;
    gap: 2em;
    color: #333333;

    li{
      margin: 1em 0;
    }

@media (max-width: 1000px){
      display: block;
      background-color: #001f37;
      position: absolute;
      top: 0;
      left: ${({ click }) => (click ? "-100%" : 0)};
      width: 50%;
      text-align: start;
      padding: 1em;
      height: 100vh;
      color: white;
      transition: all 1s ease-in-out;
    }
}
`;

export default NavbarContainer;
