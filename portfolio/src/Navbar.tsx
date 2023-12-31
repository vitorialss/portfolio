import NavStyle from "./NavStyle.js";

export default function Navbar() {
  return (
    <NavStyle>
      <p>Vitoria Santos</p>

      <ul>
        <li>
          <a href="#aboutMe">Sobre mim</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#hobbies">Hobbies</a>
        </li>
        <li>
          <a href="#formacao">Formação</a>
        </li>
        <li>
          <a href="#projetos">Projetos</a>
        </li>
      </ul>
      <p className="email">vick.leilanea@gmail.com</p>
    </NavStyle>
  );
}
