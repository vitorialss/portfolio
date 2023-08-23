import { BsFiletypeCss } from "react-icons/bs";
import { RiEnglishInput } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import {
  BiLogoJavascript,
  BiLogoReact,
  BiLogoTypescript,
  BiLogoMongodb,
} from "react-icons/bi";


import { Card, Container } from "./Card";

import wave from "./assets/wave-haikeii.svg";


 function Wave() {
    return (
     <img src={wave} alt="" />
    )
}



export default function Skills() {

  const iconStyles = {fontSize: "1.5em" };
  const Cardlist = [
    { title: "CSS", icon: <BsFiletypeCss style={iconStyles}/> },
    { title: "Javascript", icon: <BiLogoJavascript style={iconStyles} /> },
    { title: "React.js", icon: <BiLogoReact style={iconStyles} /> },
    { title: "Inglês", icon: <RiEnglishInput style={iconStyles} /> },
    { title: "Typescript", icon: <BiLogoTypescript style={iconStyles} /> },
    { title: "Node", icon: <FaNodeJs style={iconStyles}/> },
    { title: "MongoDB", icon: <BiLogoMongodb style={iconStyles} /> },
    { title: "MySQL", icon: <GrMysql style={iconStyles} /> },
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
