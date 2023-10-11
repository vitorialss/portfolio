import styled from "styled-components";
import Image from "./assets/gif.gif";

const Rodape = styled.div`
  display: flex;
  height: auto;
  justify-content: center;
  align-items: center;
  background-color: #002f2c;
  color: #fff;
  gap: 2rem;
  padding-top: 0.8rem;

  h4 {
    font-weight: 400;
  }
  span {
    font-weight: 700;
  }

  @media screen and (max-width: 767px) {
    flex-direction: column;
    padding: 1rem;
  }
`;

const Footer = () => {
  return (
    <Rodape>
      <h4>
        {" "}
        Desenvolvido por <span>Vitoria Leilanea dos Santos</span>
      </h4>
      <img src={Image}></img>
    </Rodape>
  );
};

export default Footer;
