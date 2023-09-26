import styled from "styled-components";
import Image from "./assets/image-from-rawpixel-id-3402398-jpeg.jpg";

const GradeBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    margin: 1rem 0;
  }

  div {
    display: flex;
    width: 100%;
    padding: 2rem;
    gap: 5%;

    div {
      width: 30%;
      background-color: pink;
      display: flex;
      flex-direction: column;
      align-items: center;


      img{
        width: 100%;
        margin-bottom: 10px;
      }
    }
  }
`;

export default GradeBox;
