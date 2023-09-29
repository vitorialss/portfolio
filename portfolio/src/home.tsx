import vetor from "./assets/Vector.png";
import MainHome from "./mainHome";

export default function Home() {
  return (
    <MainHome>
      <div>
        <p>Ola, meu nome é</p>
        <h1>Vitoria Santos</h1>

        <p>Sou desenvolvedora Front-end</p>

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
            <a>
              Curriculo <img src={vetor} />
            </a>
          </li>
        </ul>
        <div id="aboutMe">
          <h3>Sobre mim</h3>
          <p>Tenho 27 anos</p>
          <p>Sou de Aracaju-SE</p>
          <p>Estudo programação há 2 anos</p>
        </div>
      </div>
    </MainHome>
  );
}
