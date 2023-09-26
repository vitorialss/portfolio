import GradeBox from "./Graduation.module";
import Image from "./assets/image-from-rawpixel-id-3402398-jpeg.jpg";

export default function Grade() {
  return (
    <GradeBox>
      <h2>Formação</h2>

      <div>
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
