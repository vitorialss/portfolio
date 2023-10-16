import vetor from "./assets/Vector.png";
import MainHome from "./mainHome";

export default function Home() {
  return (
    <MainHome>
      <div>
        <p>Olá, meu nome é</p>
        <h1>Vitoria Santos</h1>

        <p>Sou Desenvolvedora Frontend | HTML, CSS, JavaScript e React.js</p>

        <ul>
          <li>
            <a
              href="https://github.com/vitorialss"
              target="_blank"
              rel="noreferrer"
            >
              Github <img src={vetor} />{" "}
            </a>
          </li>

          <li>
            <a
              href="https://www.linkedin.com/in/vitoria--santos-/"
              target="_blank"
              rel="noreferrer"
            >
              Linkedin <img src={vetor} />
            </a>
          </li>

          <li>
            <a href="https://drive.google.com/file/d/1Hc_5kH7oXOk3qFTK-L-EXExLWK2FPbqV/view?usp=drive_link"
              target="_blank"
              rel="noreferrer"
              >
              Curriculo <img src={vetor} />
            </a>
          </li>
        </ul>
        <div id="aboutMe">
          <h3>Sobre mim</h3>
          <p>Tenho 27 anos</p>
          <p>Sou de Aracaju-SE</p>
          <p>Estudo programação há 2 anos</p>
          <p>Pretendo em breve terminar de me especializar em back-end e me tornar uma Desenvolvedora FullStack</p>
          <p>Tenho uma cachorra chamada Lilo</p>
        </div>
      </div>
    </MainHome>
  );
}
