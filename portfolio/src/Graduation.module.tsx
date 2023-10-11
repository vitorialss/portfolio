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

      
      }

      img {
        width: 100%;
        margin-bottom: 10px;
      }
    }
    @media screen and (min-width: 768px) and (max-width: 1023px) {
      .box {
        width: 100%;


        div {
          max-width: 45%;

        }
      }
    }

    @media screen and (max-width: 767px) {
      .box {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;


        div {
          max-width: 80%;

        }
      }


    }
`;

export default GradeBox;
