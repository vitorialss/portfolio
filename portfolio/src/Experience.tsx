import Image from "./assets/image-from-rawpixel-id-3402398-jpeg.jpg";
import ExperienceBox from "./Experience.module";
import MainButton from "./MainButton";
import SecundaryButton from "./SecundaryButton";
import Projeto1 from "./assets/Vector.png"


const Experience = () => {
  return (
    <ExperienceBox id="projetos">
      <h2>Experiência</h2>
      <div>
        <img src={Projeto1} alt="" />
        <div>
          <h5>Jogo da velha</h5>
          <p>criado com React</p>
          <div className="buttons">
            <SecundaryButton type="button" name="Repositório" />
            <MainButton type="button" name="Ver demo" />
          </div>
        </div>
      </div>
      <div className="inverse">
        <img src={Image} alt="" />
        <div>
          <h5>Jogo da velha</h5>
          <p>criado com React</p>
          <div className="buttons">
          <SecundaryButton type="button" name="Repositório" />
            <MainButton type="button" name="Ver demo" ></MainButton>
          </div>
        </div>
      </div>
      <div>
        <img src={Image} alt="" />
        <div>
          <h5>Jogo da velha</h5>
          <p>criado com React</p>
          <div className="buttons">
          <SecundaryButton type="button" name="Repositório" />
            <MainButton type="button" name="Ver demo" ></MainButton>
          </div>
        </div>
      </div>
      <div className="inverse">
        <img src={Image} alt="" />
        <div>
          <h5>Jogo da velha</h5>
          <p>criado com React</p>
          <div className="buttons">
          <SecundaryButton type="button" name="Repositório" />
            <MainButton type="button" name="Ver demo" ></MainButton>
          </div>
        </div>
      </div>
    </ExperienceBox>
  );
};

export default Experience;
