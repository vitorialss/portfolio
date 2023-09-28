import styled from "styled-components";

const Rodape = styled.div`
    display: flex;
    height: 100px;
    justify-content:center;
    align-items: center;

`


const Footer = () => {
    return (
        <Rodape>
            <h4> Desenvolvido por <span>Vitoria Leilanea dos Santos</span></h4>
        </Rodape>

    )
}

export default Footer;