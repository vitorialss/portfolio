import styled from "styled-components";

const MainHome = styled.div`
  display: flex;
  padding: 2rem;
  background-color: #ffaacf;
  justify-content: center;
  text-align: center;

  h1 {
    font-family: "Laila", sans-serif;
    font-size: 3rem;
  }

  p {
    margin-top: 2rem;
    font-size: 1.5rem;

  }

  ul {
    display: flex;
    list-style: none;
    justify-content: space-around;
    margin-top: 2rem;
    gap: 60px;
  }
`;

export default MainHome;
