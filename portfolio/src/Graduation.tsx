import GradeBox from "./Graduation.module";
import Image from "./assets/image-from-rawpixel-id-3402398-jpeg.jpg";
import Alura from "./assets/channels4_profileal.jpg";
import Desco from "./assets/channels4_profile.jpg";

export default function Grade() {
  return (
    <GradeBox id="formacao">
      <h2>Formação</h2>

      <div>
        <div>
          <a
            href="https://cursos.alura.com.br/user/vick-leilanea/degree-front-end-113709/certificate"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Alura} alt="" />
          </a>
          <h4>Alura</h4>
          <h5>Formação Front-end</h5>
          <p>2022</p>
        </div>
        <div>
          <a
            href="https://drive.google.com/file/d/17HP9bf3ETaXbxnut24CofLicvv3-E-55/view?_hsmi=269957699&_hsenc=p2ANqtz-_ZdjK3N1bK3kH_Cy-059bEnj3nKFg1yLC48wqsAPmacvO4qjlwUq3PPLiigpE_73P-hHmn6MyW-FbEfMureCHDXwVMeA"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Desco} alt="" />
          </a>
          <h4>Descomplica</h4>
          <h5>Fundamentos de Front-End Development</h5>
          <p>2023</p>
        </div>
        <div>
          <a
            href="https://cursos.alura.com.br/user/vick-leilanea/degree-react-turma5-one-579108/certificate"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Alura} alt="" />
          </a>
          <h4>Alura</h4>
          <h5>Formação REACT T5 - ONE</h5>
          <p>2023</p>
        </div>
        <div>
          <img src={Image} alt="" />
          <h5>Formação UX</h5>
          <p>2022</p>
        </div>
        <div>
          <img src={Image} alt="" />
          <h5>Formação UX</h5>
          <p>2022</p>
        </div>
        <div>
          <img src={Image} alt="" />
          <h5>Formação UX</h5>
          <p>2022</p>
        </div>
      </div>
    </GradeBox>
  );
}
