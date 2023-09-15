import styled from "styled-components";

const Button = styled.button`
  background-color: #f6e6c2;
  color: #EA8FEA;
  padding: 20px;
  border: solid #EA8FEA;
  font-size: 1rem;
  border-radius: 50px;
  `
  

const MainButton = ({ name }: { name: string }) => {
  return <Button>{name}</Button>;
};

export default MainButton;