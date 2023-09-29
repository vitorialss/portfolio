import ExperienceBox from "./Experience.module";
import MainButton from "./MainButton";
import SecundaryButton from "./SecundaryButton";
import Projeto1 from "./assets/projeto2.png";
import Projeto2 from "./assets/projeto.png";
import Projeto3 from "./assets/projeto1.png";
import Projeto4 from "./assets/projeto3.png";

const Experience = () => {
  return (
    <ExperienceBox id="projetos">
      <h2>Experiência</h2>
      <div>
        <img src={Projeto1} alt="" />
        <div>
          <h5>E-commerce</h5>
          <p>Projeto loja virtual utilizando bootstrap</p>
          <div className="buttons">
            <a
              href="https://github.com/vitorialss/eCommerceDesco"
              target="_blank"
              rel="noreferrer"
            >
              <SecundaryButton type="button" name="Repositório" />
            </a>
            <a
              href="https://e-commerce-desco.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <MainButton type="button" name="Ver demo" />
            </a>
          </div>
        </div>
      </div>
      <div className="inverse">
        <img src={Projeto2} alt="" />
        <div>
          <h5>Formulário de cadastro</h5>
          <p>Formulário de cadastro simples utilizando React.JS e Chakra UI</p>
          <div className="buttons">
            <a
              href="https://github.com/vitorialss/formulario-react"
              target="_blank"
              rel="noreferrer"
            >
              <SecundaryButton type="button" name="Repositório" />
            </a>
            <a
              href="https://formulario-react-jade.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <MainButton type="button" name="Ver demo"></MainButton>
            </a>
          </div>
        </div>
      </div>
      <div>
        <img src={Projeto3} alt="" />
        <div>
          <h5>Jogo da velha</h5>
          <p>criado com React, vite e styled components</p>
          <div className="buttons">
            <a
              href="https://github.com/vitorialss/jogo-da-velha"
              target="_blank"
              rel="noreferrer"
            >
              <SecundaryButton type="button" name="Repositório" />
            </a>
            <a
              href="https://tictactoe-sigma-two.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <MainButton type="button" name="Ver demo"></MainButton>
            </a>
          </div>
        </div>
      </div>
      <div className="inverse">
        <img src={Projeto4} alt="" />
        <div>
          <h5>Calculadora React</h5>
          <p>criado com Create React App</p>
          <div className="buttons">
          <a
              href="https://github.com/vitorialss/calculator"
              target="_blank"
              rel="noreferrer"
            >
              <SecundaryButton type="button" name="Repositório" />
            </a>
            <a
              href="https://calculator-ruby-tau.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <MainButton type="button" name="Ver demo"></MainButton>
            </a>
          </div>
        </div>
      </div>
    </ExperienceBox>
  );
};

export default Experience;
