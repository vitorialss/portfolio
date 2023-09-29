import styled from "styled-components";


const GradeBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgb(185, 243, 228);
  background: linear-gradient(
    180deg,
    rgba(185, 243, 228, 1) 0%,
    rgba(244, 218, 227, 1) 100%
  );

  h2 {
    margin: 1rem 0;
  }

  div {
    display: flex;
    width: 100%;
    padding: 2rem;
    gap: 5%;
    flex-wrap: wrap;
    height: auto;

    div {
      max-width: 30%;
      background-color: #d78aa6;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 10px;
      flex-wrap: nowrap;

      img {
        width: 100%;
        margin-bottom: 10px;
      }
    }
  }
`;

export default GradeBox;
