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
  padding-bottom:80px;

  div {
    display: flex;
    gap: 10px;
    width: 100%;
  }

  h2 {
    margin-bottom: 15vh;
  }
`;
export const Card = styled.div`
  background-color: #EA8FEA;
  border-radius: 5px;
  padding: 15px;
  gap: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: end;
  width: 20%;
  height: 20vh;
  font-size: 1.2em;
  text-align: end;
  

`;