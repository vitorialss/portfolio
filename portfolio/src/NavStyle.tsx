import styled from "styled-components";

const NavStyle = styled.div`
  display: flex;
  height: 90px;
  background-color: #ffaacf;
  justify-content: space-between;
  align-items: center;
  padding: 0 3rem;
  font-size: 1.1rem;

  > p:first-child {
    font-family: "Rancho", cursive;
    font-size: 2rem;
  }

  ul {
    display: flex;
    list-style: none;
    gap: 2rem;
  }
  li {
    text-decoration: none;
    position: relative;

    a {
      text-decoration: none;
      color: #18272f;
    }
  }
  li::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    border-radius: 4px;
    background-color: #18272f;
    bottom: 0;
    left: 0;
    transform-origin: right;
    transform: scaleX(0);
    transition: transform 0.3s ease-in-out;
  }

  li:hover::before {
    transform-origin: left;
    transform: scaleX(1);
  }

  li:hover {
    cursor: pointer;
    font-weight: 700;

    
  }

  > p:last-child {
    font-weight: 700;
  }


@media screen and (min-width: 768px) and (max-width: 1023px){
  .email {
    display:none;
  }


}

@media screen and (max-width: 767px) {
  width: 100%;
  flex-direction: column;
  gap: 1rem;
  height: auto;

  ul{
    flex-direction: column;
  }


 
}

`;

export default NavStyle;
