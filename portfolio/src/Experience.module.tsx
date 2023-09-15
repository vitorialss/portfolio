import styled from "styled-components";

const ExperienceBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  padding: 1.5rem;
  margin: 2rem 0 4rem 1rem;
 

  .inverse img {
    order: 2;
  }
  .inverse div {
    align-items: flex-end;
    order: 1;

    .buttons {
      justify-content: flex-end;
    }
  }

  div {
    display: flex;
    align-items: center;
    gap: 5%;

    img {
      width: 60%;
    }

    div {
      display: flex;
      flex-direction: column;
      width: 30%;
      align-items: flex-start;

      h5 {
        font-size: 1.5rem;
      }

      .buttons {
        display: flex;
        flex-direction: row;
        width: 100%;
        margin-top: 1rem;
      }
    }
  }
`;

export default ExperienceBox;
