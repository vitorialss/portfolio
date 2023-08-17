import { BsFiletypeCss } from "react-icons/bs";
import { RiEnglishInput } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import {
  BiLogoJavascript,
  BiLogoReact,
  BiLogoTypescript,
} from "react-icons/bi";

import { Card, Container } from "./Card";

import wave from "./assets/wave-haikeii.svg";


 function Wave() {
    return (
     <img src={wave} alt="" />
    )
}



export default function Skills() {
  const Cardlist = [
    { title: "CSS", icon: <BsFiletypeCss /> },
    { title: "Javascript", icon: <BiLogoJavascript /> },
    { title: "React.js", icon: <BiLogoReact /> },
    { title: "Inglês", icon: <RiEnglishInput /> },
    { title: "Typescript", icon: <BiLogoTypescript /> },
    { title: "Node", icon: <FaNodeJs /> },
  ];
  return (<>
  <Wave />
    
      <Container>
        <h2>Skills</h2>

        <div>
          {Cardlist.map((item, index) => (
            <Card key={index}>
              {item.icon}
              {item.title}
            </Card>
          ))}
        </div>
      </Container>
    </>
  );
}
