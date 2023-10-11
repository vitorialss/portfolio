import GradeBox from "./Graduation.module";
import Alura from "./assets/channels4_profileal.jpg";
import Desco from "./assets/channels4_profile.jpg";
import Dio from "./assets/VIaVEXOH_400x400.jpg";

export default function Grade() {
  return (
    <GradeBox id="formacao">
      <h2>Formação</h2>

      <div className="box">
        <div>
          <a
            href="https://cursos.alura.com.br/degree/certificate/6630d9d7-9b50-4f44-ba11-3332bca67a19"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Alura} alt="Logo Alura" />
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
            <img src={Desco} alt="Logo Descomplica" />
          </a>
          <h4>Descomplica</h4>
          <h5>Fundamentos de Front-End Development</h5>
          <p>2023</p>
        </div>
        <div>
          <a
            href="https://cursos.alura.com.br/degree/certificate/cfc27325-961f-4f42-acb2-efc44d5b553c"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Alura} alt="Logo Alura" />
          </a>
          <h4>Alura</h4>
          <h5>Formação REACT T5 - ONE</h5>
          <p>2023</p>
        </div>
        <div>
        <a
            href="https://mail-attachment.googleusercontent.com/attachment/u/0/?ui=2&ik=66766d448c&attid=0.1&permmsgid=msg-f:1757105859680299935&th=18627e7847006b9f&view=att&disp=inline&saddbat=ANGjdJ92qq79mIQUlTzZFHKc7aEXAFSiBu9X9Nhri-qVcp4XPfjbiFTQk936eiIkIzFvXcCrnDVyI7ZxomKCNMhQ_GH_w93ekm-g5PS9ULcVorQunpJCmGAvGhUARLyemnJ4hZ3x13tzS8tUyqq9pAmboLsAfpuOlOlFnZvxSuFkAnSTwpQ5MOapiIJKFPauRplPaq7jAZbvjPl8zVei-0cPvDVWLzDtNz67ttXYc7G6fNpeU_0UDdufUJANVTj2eJwEFuqpmYyMpF5Hnbudt2qZjkW3iD649NtVwDQ9EqNDGUo-eJw5MABJZGGjV3MnI-89Dw5DfLHS5vY5uL9-t_YuRoUB0UwuF-cAC8coUlBoZmEVw_ONCYGnSfLwn6yDCeBsFZRzRvHdqSYGKgi-0Kb4Om9aQhBRPC06n_CyB-NjfCjPP7sgFgr5yrmR7RJp_LJ2o0S4G8ku6SeyKmSNh6gHzvnjAmxjvP4WURRqUbPQJNJZ8-VU3NuUOhpDVbFRj5g2-g8q0jhiQtJIn1RxamcOEAyv9kTlk3gK1N9clCpFqCLKlA5r-aqxZ6EbCwYSB6F1URJ2XFwPPcY-bOfHdcpywj2Kec1cuTLmFMpzlOiLBYsDbKIX6eQE7zyKEsjIK7_tUIQ68GjJ9Qd6ZHELSa9YmxTMCahfmaHCmG5YuuvszVIDduYX8DJEnP0hL8zdg_f_1IsmeBgWd6i1LcOtcQD_wa0kBnE963PkQBM4Xn0672xqHOleIfdb6GQDYbRkDk2bZzpNhjdGIecyiN1qS8yJu2mTUmngSD_uMPgyrdFwuvPvGEQq_75VmL_n_tpeP07JnqAmrWOQbdAQQC_rCZfJR8rV6OpeiAWd4YnSKpG-nKpFC4mo1lXtgfs9Jr3AnmJp3JpWHLIJZjEedct3u6g-tqDVAT_UkeVVfg2KjNRJ_QZ9JReI-J1o0s5qM8yx1DbhuM_oedL8JsL037MstaJfiQbrPi7urJL6fEpUadLR_reVNec7EZFid85PzHI"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Dio} alt="Logo Dio" />
          </a>
          <h4>Dio</h4>
          <h5>Formação Inovação</h5>
          <p>2022</p>
        </div>
        <div>
        <a
            href="https://cursos.alura.com.br/degree/certificate/ed13d5e7-501b-4e80-9251-dc5017e366ad"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Alura} alt="Logo Alura" />
          </a>
          <h4>Alura</h4>
          <h5>Formação Desenvolvimento Pessoal</h5>
          <p>2023</p>
        </div>
        <div>
        <a
            href="https://cursos.alura.com.br/degree/certificate/89f1b88c-4084-48ae-8b85-60a3c420f373"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Alura} alt="Logo Alura" />
          </a>
          <h4>Alura</h4>
          <h5>Formação UX Design</h5>
          <p>2022</p>
        </div>
      </div>
    </GradeBox>
  );
}
