import styled from "styled-components";

const Button = styled.button`
  background-color: #f6e6c2;
  color: #EA8FEA;
  padding: 10px 20px;
  border: solid #EA8FEA;
  font-size: 1rem;
  border-radius: 50px;
  `
  

const MainButton = ({ name, type }: { name: string, type: "button"|"submit"|"reset"|undefined }) => {
  return <Button type={type} >{name}</Button>;
};

export default MainButton;