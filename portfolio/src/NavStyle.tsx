import styled from "styled-components";

const NavStyle = styled.div`
  display: flex;
  height: 90px;
  background-color: #ffaacf;
  justify-content: space-between;
  align-items: center;
  padding: 0 3rem;
  font-size: 1.1rem;

  > p:first-child {
    font-family: "Rancho", cursive;
    font-size: 1.5rem;
  }

  ul {
    display: flex;
    list-style: none;
    gap: 2rem;
  }

  li:hover {
    cursor: pointer;
    font-weight: 700;
  }

  > p:last-child {
    font-weight: 700;
  }
`;

export default NavStyle;
