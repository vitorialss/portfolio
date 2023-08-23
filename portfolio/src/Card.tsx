import styled from "styled-components";

export const Container = styled.div`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  background-color: #b9f3e4;
  padding: 40px 20px;
  align-items: center;
  gap: 20px;
  width: 100%;

  div {
    display: flex;
    gap: 10px;
    width: 100%;
  }
`;
export const Card = styled.div`
  background-color: #EA8FEA;
  border-radius: 5px;
  padding: 10px;
  gap: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: end;
  width: 20%;
  height: 100px;
  font-size: 1.2em;
  

`;
