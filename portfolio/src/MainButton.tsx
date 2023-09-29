import styled from "styled-components";

const Button = styled.button`
  background-color: #065E52;
  color: #F0CBD0;
  padding: 10px 20px;
  border: solid #F0CBD0;
  font-size: 1rem;
  border-radius: 50px;
  cursor: pointer;
  `
  
  

const MainButton = ({ name, type }: { name: string, type: "button"|"submit"|"reset"|undefined }) => {
  return <Button type={type} >{name}</Button>;
};

export default MainButton;