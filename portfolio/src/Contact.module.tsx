import styled from "styled-components";
import Image from "./assets/image-from-rawpixel-id-3402398-jpeg.jpg"

const ContactBox = styled.div`
  display: flex;
  background-image: url(${Image});

  div {
    display: flex;
    flex-direction: column;
    width: 50%;
    padding: 1em;

    div {
      padding: 1rem;
    }
    p {
      font-size: 1.2rem;
    }
    .formlabel{
        font-size: 1.2rem;
        width: 100%;

    }
    form {
        display: flex;
        flex-direction: column;
    }

    .formlabel input{
        height: 2rem;
        width: 100%;

    }
     button{
            padding: 2rem;
            align-self: center;
     }


    h2 {
      margin: 1rem 0;
      font-size: 2rem;
    }
  }
`;

export default ContactBox;
