import styled from "styled-components";

const Button = styled.button`
  background-color: #f6e6c2;
  color: #EA8FEA;
  padding: 20px;
  border: solid #EA8FEA;
  font-size: 1rem;
  border-radius: 50px;
  `
  

const SecundaryButton = ({ name, type }: { name: string, type: "button"|"submit"|"reset"|undefined }) => {
  return <Button type={type} >{name}</Button>;
};

export default SecundaryButton;