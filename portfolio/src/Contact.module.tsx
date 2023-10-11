import styled from "styled-components";

const ContactBox = styled.div`
  display: flex;
  background-color: #039995;

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
            align-self: center;
     }


    h2 {
      margin: 1rem 0;
      font-size: 2rem;
    }
  }
  @media screen and (max-width: 767px) {
    flex-direction: column;


    div {
      width: 100%;
    }
  }
`;

export default ContactBox;
