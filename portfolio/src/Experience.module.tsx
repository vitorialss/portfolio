import styled from "styled-components";

const ExperienceBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  padding: 1.5rem;
  background: rgb(245, 219, 228);
  background: linear-gradient(
    180deg,
    rgba(245, 219, 228, 1) 0%,
    rgba(198, 77, 88, 1) 100%
  );
  width: 100%;

  .inverse img {
    order: 2;
  }
  .inverse div {
    align-items: center;
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
        margin-bottom: 1rem;
      }

      .buttons {
        display: flex;
        flex-direction: row;
        width: 100%;
        margin-top: 1rem;
      }
    }
  }

  @media screen and (max-width: 767px) {
    .box-experience {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 10px;

      img {
        width: 100%;
      }

      div {
        width: auto;
        align-items: center;

        .buttons {
          justify-content: initial;
        }
      }
    }
    .inverse img {
      order: 1;
    }
    .inverse div {
      align-items: center;
      order: 2;
    }
  }
`;

export default ExperienceBox;
