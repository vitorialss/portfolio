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
  a {
    text-decoration: none;
    color: #18272f;
  }

  ul {
    display: flex;
    list-style: none;
    justify-content: space-around;
    margin-top: 2rem;
    gap: 60px;
  }
  li {
    position: relative;
  }

  li::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    border-radius: 4px;
    background-color: #18272f;
    bottom: 0;
    left: 0;
    transform-origin: right;
    transform: scaleX(0);
    transition: transform 0.3s ease-in-out;
  }

  li:hover::before {
    transform-origin: left;
    transform: scaleX(1);
  }

  li:hover {
    cursor: pointer;
    font-weight: 700;
  }

  #aboutMe {
    margin-top: 2rem;
    p {
      font-size: 1rem;
      margin-top: 0;
    }
  }
`;

export default MainHome;
